import { Component, Prop, Vue } from 'vue-property-decorator';
import BIcon from '../icon';
import Combobox from '../combobox/index';
import BaseTree from './components/base';
import { withInstall } from '../_utils';
import { Button, Input } from 'ant-design-vue';
import i18n from '@amaz/i18n';
import Service from './service';
const prefixCls = 'bb-role-tree';
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
class BBRoleTree extends Vue {
  @Prop() value!: any[];

  @Prop({
    default: () => {
      return {
        selectOrg: false, // 能否选角色组
        selectUser: true, // 能否选角色
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
        isAdminSys: false, // 是否后台系统使用
      };
    },
  })
  params!: any;

  @Prop({
    type: Function,
  })
  getParentContainer!: any;

  @Prop() customData!: any;

  departments: any = []; // 角色组列表

  usersList: any = []; // 角色列表

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
    return i18n.t('genesisUI.roleSelectTips');
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
        (this as any).$refs.usersSelector.selectedKey = [];
        // (this as any).$refs.usersSelector.selectedKey = [this.departments[0].id];
        this.expandDeptUsers(this.departments[0]);
      });
    });
  }

  // 获取根组织
  async getRootDepartments (id?: string) {
    console.log('获取根节点');
    if (this.customData) {
      this.departments = this.customData;
    } else {
      const res: any = await this.getNextDepartments(id);
      this.departments = res.departments || [];
    }
  }

  expandDeptUsers (node) {
    this.loadUsers(null, node, 'dep');
  }

  //  获取下级
  async getNextDepartments (deptIds?: string) {
    const params = {
      parentId: deptIds,
      orgIds: [],
      ...this.params,
    };
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
    const res: any = this.departments.find((item) => item.id === node.id);
    const roleUsers = res?.children || [];
    if (type === 'dep') {
      this.usersList = roleUsers;
    }
  }

  changeUser (val: any) {
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

  async onSearch (key: any) {
    // 搜索后赋值
    if (key !== '') {
      this.searchList = this.searchTags(key);
    } else {
      this.searchList = [];
    }
  }

  searchTags (key: any) {
    const tags = [];
    this.departments.forEach((item) => {
      if (item.children) {
        item.children.forEach((inner) => {
          inner.groupName = item.name;
        });
        tags.push(...item.children);
      }
    });
    const searchResults: any[] = tags.filter(
      (inner) =>
        inner.name.toLowerCase().includes(key) || inner.name.includes(key),
    );
    if (searchResults.length > 0) {
      const results: any[] = searchResults.map((item) => {
        return {
          ...item,
          fullName: this.getName(item),
        };
      });
      console.log(results, 'results');
      return results;
    }
    return [];
  }

  getName (item) {
    return `${item.groupName}`;
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
          onSearch={this.onSearch}
          isMultiple={this.isMultiple}
          userSelectable={this.selectUser}
          depts={this.departments}
          users={this.usersList}
          searchData={this.searchList}
          deptSelectable={this.selectOrg}
          selectPlaceholder={this.placeholder}
          getParentContainer={this.getParentContainer}
          propLabel={this.propLabel}
          loadingMyDep={this.loadingMyDep}
          defaultExpandedKeys={this.defaultExpandedKeys}
        />
      </div>
    );
  }
}
export default withInstall<BBRoleTree>(BBRoleTree);
