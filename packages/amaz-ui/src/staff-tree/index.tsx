import { Component, Prop, Vue } from 'vue-property-decorator';
import BIcon from '../icon';
import Combobox from '../combobox/index';
import BaseTree from './components/base';
import { withInstall } from '../_utils';
import { Button, Input } from 'ant-design-vue';
import { UnitVoType } from '@amaz/api';
import i18n from '@amaz/i18n';
import Service from './service';
import { debounce } from 'lodash-es';
const prefixCls = 'bb-staff-tree';
@Component({
  name: prefixCls,
  components: {
    BIcon,
    AButton: Button,
    AInput: Input,
    BCombobox: Combobox,
    BaseTree,
  },
})
class BBStaffTree extends Vue {
  @Prop() value!: any[];

  @Prop({
    default: () => 'zh-CN',
  })
  locale!: any;

  @Prop({
    default: () => {
      return {
        selectOrg: false, // 能否选部门
        selectUser: true, // 能否选人
        multiple: true, // 是否多选
        placeholder: '', // 占位符
      };
    },
  })
  options!: any;

  // 过滤条件需要的参数 人员混选和后台管理系统需要传参
  @Prop({
    default: () => {
      return {
        orgIds: [], // 组织限定范围
        type: UnitVoType.DEPARTMENT, // 类型 部门还是人员
        isAdminSys: false, // 是否后台系统使用
      };
    },
  })
  params!: any;

  @Prop({
    type: Function,
  })
  getParentContainer!: any;

  @Prop({
    default: false,
  })
  disabled!: boolean;

  // getParentContainer (triggerNode: HTMLElement) {
  //   return triggerNode;
  // }

  departments: any = []; // 部门列表

  myDepartments: any = []; // 我的部门

  myDepartmentUsers: any = []; // 我的部门用户

  usersList: any = []; // 用户列表

  defaultExpandedKeys: any = [];

  searchList: any = [];

  propLabel: any = {
    value: 'id',
    key: 'id',
    name: 'name',
    type: 'type',
    extra: 'extra',
    hasChildren: 'hasChildren',
  };

  loadingMyDep: boolean = false;

  debounceSearch = null;

  get formatValue () {
    return this.formatUserData(this.value);
  }

  set formatValue (value) {
    console.log(value, 'value');
    let valueData = value;
    // 单选转为对象
    if (!this.options.multiple && value) {
      valueData = value[0];
    }
    this.$emit('input', valueData);
    // this.$emit('change', valueData);
  }

  // 是否复选 multiple兼容旧数据
  get isMultiple () {
    return this.options.multiple;
  }

  // 占位符
  get placeholder () {
    if (this.options.placeholder) {
      return this.options.placeholder;
    }
    if (
      this.options.selectOrg &&
      this.options.selectUser &&
      this.options.multiple
    ) {
      return i18n.t('genesisUI.selectPersonDep');
    } else if (this.options.selectOrg && !this.options.selectUser) {
      return i18n.t('genesisUI.selectDepartment');
    } else if (!this.options.selectOrg && this.options.selectUser) {
      return i18n.t('genesisUI.selectPerson');
    }
    return i18n.t('common.pleaseSelect');
  }

  // 是否选部门
  get selectOrg () {
    return this.options.selectOrg;
  }

  // 是否选人
  get selectUser () {
    return this.options.selectUser;
  }

  // 混选
  get selectAll () {
    return !!(
      this.options.selectOrg &&
      this.options.selectUser &&
      this.options.multiple
    );
  }

  formatUserData (data: any) {
    if (Array.isArray(data)) {
      return data;
    } else if (data && !Array.isArray(data)) {
      return [data];
    } else {
      return [];
    }
  }

  async showPane () {
    // console.log('show---');
    this.$nextTick(async () => {
      this.getRootDepartments().then(() => {
        (this as any).$refs.usersSelector.expandedKeys = [];
        // (this as any).$refs.usersSelector.expandedMydepKeys = [];
        this.expandDeptUsers(this.departments[0]);
      });
    });
  }

  // 获取根组织
  async getRootDepartments (id?: string) {
    const res: any = await this.getNextDepartments(id);
    // console.log(res, '根组织节点');
    const data = res.departments || [];
    this.departments = data.filter((item) => !item.selfDept);
  }

  expandDeptUsers (node) {
    this.loadUsers(null, node, 'dep');
  }

  //  获取下级
  async getNextDepartments (deptIds?: string, type?: string) {
    const params = {
      parentId: deptIds,
      orgIds: [],
      ...this.params,
    };
    // 混选 传参改为人员
    if (this.selectAll || type) {
      params.type = UnitVoType.USER;
    } else {
      params.type = UnitVoType.DEPARTMENT;
    }
    return await Service.getDepartmentsBy(params);
  }

  // 获取下级部门
  async onLoadNode (node: any) {
    // console.log(node.dataRef, 'load---');
    const nodeId: string = node.dataRef.id;
    const res: any = await this.getNextDepartments(nodeId);
    return res.departments;
  }

  // 获取部门下用户
  async loadUsers (val, node: any, type: string) {
    // console.log(node, 'node');
    const res: any = await this.getNextDepartments(node.id, UnitVoType.USER);
    const dataList = res.departments.filter(
      (item) => item.unitType === UnitVoType.USER,
    );
    if (type === 'dep') {
      this.usersList = dataList;
    } else {
      this.myDepartmentUsers = dataList;
    }
  }

  changeUser (val: any) {
    console.log(val, 'val');
    if (this.isMultiple) {
      this.$emit('change', val);
    } else {
      let valData: any[] = val;
      if (Array.isArray(val)) {
        valData = val[0];
      }
      this.$emit('change', valData);
    }
    // this.$emit('change', val);
    try {
      if (!this.isMultiple) {
        const selector: any = this.$refs.usersSelector;
        selector.contentFocus = false;
        selector.selectFocus = false;
        selector.searchBoxFocus = false;
      }
    } catch (err) {
      console.error('error');
    }
  }

  /**
   * 切换面板
   */
  async onchangeTab (key) {
    // console.log(key, 'key---');
    if (!!key && this.myDepartments.length === 0) {
      // 加载我的部门
      this.loadingMyDep = true;
      const res: any = await this.getNextDepartments();
      const data = res.departments || [];
      this.myDepartments = data.filter((item) => item.selfDept);
      const resUser: any = await this.getNextDepartments(
        data[0].id,
        UnitVoType.USER,
      );
      const dataList = resUser.departments.filter(
        (item) => item.unitType === UnitVoType.USER,
      );
      this.myDepartmentUsers = dataList;
      this.loadingMyDep = false;
    }
  }

  async onSearch (key: any) {
    // 搜索后赋值
    if (key !== '') {
      const params = {
        name: key,
        parentId: '',
        orgIds: [],
        ...this.params,
      };
      // 混选 查用户和部门
      if (this.selectAll) {
        params.type = '';
      } else if (this.options.selectUser) {
        params.type = UnitVoType.USER;
      }
      Service.search(params).then((data: any) => {
        // console.log(data, 'data--');
        const searchData = data.departments || data.users;
        this.searchList = searchData.map((item) => {
          return {
            ...item,
            fullName: this.getName(item),
          };
        });
        // console.log(this.searchList, 'this.searchList');
      });
    } else {
      this.searchList = [];
    }
  }

  getName (item) {
    if (item.unitType === UnitVoType.USER) {
      return `${item.name}-${item.departmentFullName}`;
    } else {
      if (item.departmentFullName) {
        const arrayList: any = item.departmentFullName.split('/');
        const depName = arrayList[arrayList.length - 1];
        return `${item.name} - ${depName}`;
      }
      return item.name;
    }
  }

  focus () {
    this.$emit('focus');
  }

  created () {
    this.debounceSearch = debounce(this.onSearch, 300);
  }

  render () {
    return (
      <div class={prefixCls} ref="staffTree">
        <base-tree
          ref="usersSelector"
          v-model={this.formatValue}
          loadTreeNode={this.onLoadNode}
          onShowPane={this.showPane}
          onExpandUsers={this.loadUsers}
          onChange={this.changeUser}
          onChangeTab={this.onchangeTab}
          onSearch={this.debounceSearch}
          isMultiple={this.isMultiple}
          disabled={this.disabled}
          userSelectable={this.selectUser}
          isAdminSys={this.params?.isAdminSys}
          depts={this.departments}
          myDepts={this.myDepartments}
          users={this.usersList}
          myDeptUsers={this.myDepartmentUsers}
          searchData={this.searchList}
          deptSelectable={this.selectOrg}
          selectPlaceholder={this.placeholder}
          getParentContainer={this.getParentContainer}
          propLabel={this.propLabel}
          loadingMyDep={this.loadingMyDep}
          onFocus={this.focus}
          defaultExpandedKeys={this.defaultExpandedKeys}
        />
      </div>
    );
  }
}
export default withInstall<BBStaffTree>(BBStaffTree);
