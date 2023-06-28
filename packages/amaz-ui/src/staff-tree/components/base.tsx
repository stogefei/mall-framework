import {
  Input,
  Select,
  Tree,
  Checkbox,
  Icon,
  Spin,
  Tabs,
} from 'ant-design-vue';
import { MultipleItem, SingleItem } from '../common';
// @ts-ignore
import { directive as ClickOutside } from 'v-click-outside-x';
import Popper from './popper/vue-popper';
import { debounce } from 'lodash-es';
import {
  Component, Mixins, Model, Prop, Watch,
} from 'vue-property-decorator';
import '../style/index.less';
import i18n from '@amaz/i18n';
const prefixCls = 'BBaseTree';
const prefix = 'bb-organization';
@Component({
  name: prefixCls,
  components: {
    ACheckbox: Checkbox,
    MultipleItem,
    SingleItem,
    ASelect: Select,
    ASelectOption: Select.Option,
    AInput: Input,
    ATabs: Tabs,
    ATabPane: Tabs.TabPane,
    ATree: Tree,
    AIcon: Icon,
    ASpin: Spin,
  },
  directives: {
    ClickOutside: ClickOutside,
  },
})
export default class BBaseTree extends Mixins(Popper) {
  @Model('change') value: any;

  @Prop() prefixCls!: String;

  @Prop() prefixStyle!: any;

  @Prop() selectStyle!: String;

  @Prop({
    type: Array,
    default: () => [],
  })
  users!: any[];

  @Prop({
    type: Array,
    default: () => [],
  })
  depts!: any[];

  @Prop() limit!: Number;

  @Prop({
    type: Boolean,
    default: true,
  })
  showMyDepts!: boolean;

  @Prop({
    type: Array,
    default: () => [],
  })
  myDepts!: any[];

  @Prop({
    type: Array,
    default: () => [],
  })
  myDeptUsers!: any[];

  @Prop({
    type: Array,
    default: () => [],
  })
  searchData!: any[];

  @Prop({
    type: Boolean,
    default: true,
  })
  showSelect!: boolean;

  @Prop({
    type: Boolean,
    default: true,
  })
  allowClear!: boolean;

  @Prop({
    type: String,
    default: '',
  })
  selectPlaceholder!: string;

  @Prop({
    type: Boolean,
    default: true,
  })
  isMultiple!: boolean;

  @Prop({
    type: Boolean,
    default: true,
  })
  checkStrictly!: boolean;

  @Prop({
    type: Boolean,
    default: false,
  })
  disabled!: boolean;

  @Prop() loadTreeNode!: Function;

  @Prop() defaultExpandedKeys!: any[];

  @Prop() excludeKeys!: any[];

  @Prop({
    type: Object,
    default: () => {
      return {
        value: 'id',
        key: 'id',
        name: 'name',
        extra: 'extra',
        hasChildren: 'hasChildren',
      };
    },
  })
  propLabel!: any;

  @Prop({
    type: Boolean,
    default: true,
  })
  userSelectable!: boolean;

  @Prop({
    type: Boolean,
    default: true,
  })
  deptSelectable!: boolean;

  @Prop() scrollToBottom!: Function;

  @Prop({
    type: Boolean,
    default: true,
  })
  loadingDep!: boolean;

  @Prop({
    type: Boolean,
    default: true,
  })
  loadingMyDep!: boolean;

  @Prop({
    type: Boolean,
    default: false,
  })
  isAdminSys!: boolean;

  @Prop() maxTagCount!: Number;

  @Prop() maxTagTextLength!: Number;

  myUsersChecked = false;

  selectFocus = false;

  searchBoxFocus = false;

  contentFocus = false;

  deptsTreeData = [];

  innerMyDepts = [];

  // 是否是搜索状态
  isSearching = false;

  // 搜索键值
  searchKey = '';

  // 树形选择键值
  selectedKey = [];

  // 是否是搜索状态
  searching = false;

  // 组织树选中的key
  TreeCheckedKeys = {
    checked: [],
    halfChecked: [],
  };

  refreshKey = 0;

  currentActiveTab = 0;

  expandedKeys = [];

  expandedMydepKeys = [];

  get disabledMyDep () {
    return this.isAdminSys;
  }

  get searchPlaceholder () {
    return i18n.t('common.search');
  }

  get allMyDeptUsersChecked () {
    return this.isCheckAll(this.innerMyDeptUsers);
  }

  get allUsersChecked () {
    return this.isCheckAll(this.innerUsers);
  }

  get innerSearchData () {
    return this.filterItems(this.searchData);
  }

  get innerUsers () {
    return this.filterItems(this.users);
  }

  // innerMyDepts () {
  //   return this.filterItems(this.myDepts);
  // },

  get innerMyDeptUsers () {
    return this.filterItems(this.myDeptUsers);
  }

  get multipleDefaultValue () {
    return this.value.map((i) => i[this.propLabel.value]);
  }

  get hasLimit () {
    return !!(this.limit && this.limit > 0) && this.isMultiple;
  }

  get singleDefaultValue () {
    return this.value && this.value.length > 0
      ? this.value[0][this.propLabel.value]
      : '';
  }

  get selectedData (): any[] {
    return this.value.map((i) => i[this.propLabel.value]);
  }

  set selectedData (val: any) {}

  get showPane () {
    return this.selectFocus || this.searchBoxFocus || this.contentFocus;
  }

  get treeDefaultKeys () {
    // 处理单选部门默认值是 选中的值 其他都是传入的第一个值
    if (this.deptSelectable) {
      return this.value.map((i) => i.key || i[this.propLabel.value]);
    } else {
      return this.selectedKey;
    }
  }

  get excludeKeyMap () {
    const excludesMap = {};
    if (this.excludeKeys && this.excludeKeys.length > 0) {
      this.excludeKeys.forEach((key) => {
        excludesMap[key] = true;
      });
    }
    return excludesMap;
  }

  get debounceUpdatePopper () {
    return debounce(
      () => {
        this.updatePopper();
      },
      300,
      { leading: false },
    );
  }

  get loadedKeys () {
    return this.expandedKeys;
  }

  get loadedMyDepKeys () {
    return this.expandedMydepKeys;
  }

  // 混合选人 人员展示在树上
  get selectable () {
    if (this.userSelectable && this.deptSelectable && this.isMultiple) {
      return false;
    } else {
      return this.userSelectable;
    }
  }

  @Watch('depts', { immediate: true, deep: true })
  watchDepts (items) {
    this.deptsTreeData = this.formatTreeData(items);
  }

  @Watch('myDepts', { immediate: true, deep: true })
  watchMyDepts (items) {
    this.innerMyDepts = this.formatTreeData(items);
  }

  @Watch('showPane')
  watchShowPane (val: boolean, oldValue: boolean) {
    if (val && !oldValue) {
      const self = this as any;
      this.$emit('showPane');
      this.onTabChange(this.currentActiveTab);
      setTimeout(() => {
        self.$refs.select.blur();
        self.$refs.searchInput.focus();
      }, 100);
    } else {
      this.$emit('closePane');
    }
    if (!val && oldValue && this.searchKey !== '') {
      this.clearSearchKey();
    }
    this.showPopper = val;
  }

  handleOutsideClick (e) {
    if (e.target === this.popperElm || this.popperElm.contains(e.target)) {
      return;
    }
    this.contentFocus = false;
    this.selectFocus = false;
    this.searchBoxFocus = false;
  }

  isCheckAll (users) {
    const map = {};
    if (this.value && this.value.length > 0) {
      this.value.forEach((item) => {
        map[item[this.propLabel.key]] = true;
      });
    }
    return users.every((user) => map[user[this.propLabel.key]]);
  }

  /**
   * 全选所有人员
   */
  checkAllUsers (evt) {
    this.checkAll(this.innerUsers, evt.target.checked);
  }

  /**
   * 全选所有我的部门人员
   */
  checkAllMyDeptUsers (evt) {
    this.checkAll(this.myDeptUsers, evt.target.checked);
  }

  /**
   * 全选私有实现方法
   */
  checkAll (users, checked) {
    const selectedValue = [...this.value];
    if (checked) {
      users.forEach((user) => {
        const included = selectedValue.find(
          (selectedUser) =>
            selectedUser[this.propLabel.key] === user[this.propLabel.key],
        );
        if (!included) {
          selectedValue.push(user);
        }
      });
    } else {
      users.forEach((user) => {
        const index = selectedValue.findIndex(
          (i) => i[this.propLabel.value] === user[this.propLabel.value],
        );
        if (index > -1) {
          selectedValue.splice(index, 1);
        }
      });
    }
    this.changeSelectedValue(selectedValue);
  }

  /**
   * 读取propLabel格式化部门数据
   */
  formatTreeData (depts) {
    const resultTree = [];
    const excludeKeyMap = this.excludeKeyMap;
    for (let i = 0; i < depts.length; i++) {
      const dept = depts[i];
      const formattedItem = {
        title: dept[this.propLabel.name],
        key: dept[this.propLabel.key],
        value: dept[this.propLabel.value],
        isLeaf: !dept[this.propLabel.hasChildren] || false,
        scopedSlots: {
          title: 'title',
        },
        ...dept,
      };
      if (!excludeKeyMap[formattedItem.key]) {
        if (dept.children) {
          formattedItem.children = this.formatTreeData(dept.children);
        }
        resultTree.push(formattedItem);
      }
    }
    return resultTree;
  }

  expandTree (expandedKeys, { expanded: bool, node }) {
    this.expandedKeys = expandedKeys;
  }

  expandMydepTree (expandedKeys, { expanded: bool, node }) {
    this.expandedMydepKeys = expandedKeys;
  }

  /**
   * 树选择器选中
   */
  onTreeSelect (selectedKeys, e) {
    this.onSelectTreeNode(selectedKeys, e, 'dep');
  }

  // 我的部门
  onTreeSelectMydep (selectedKeys, e) {
    this.onSelectTreeNode(selectedKeys, e, 'mayDep');
  }

  // 树形控件点击
  onSelectTreeNode (selectedKeys, e, type) {
    // 部门单多选触发，改变数据，人员单多选不考虑
    if (this.deptSelectable) {
      if (this.isMultiple) {
        console.log('isMultiple');
      } else {
        // 选中该节点，部门单选
        const params = {
          [this.propLabel.key]: selectedKeys[0],
          [this.propLabel.value]: selectedKeys[0],
          [this.propLabel.name]: e.node.title,
          [this.propLabel.type]: e.node.dataRef.unitType,
        };
        this.onSelectData(params);
      }
    }
    if (this.selectable) {
      // 回调盖部门的人员
      this.selectedKey = selectedKeys;
      this.$emit('expandUsers', selectedKeys[0], e.node.dataRef, type);
    }
  }

  /** *树开启了checkbox事件 */
  onCheckBoxSelect (checkedKeys, e) {
    const params = {
      checked: e.checked,
      value: {
        [this.propLabel.key]: e.node.eventKey,
        [this.propLabel.value]: e.node.eventKey,
        [this.propLabel.name]: e.node.title,
        [this.propLabel.type]: e.node.dataRef.unitType,
      },
    };
    this.TreeCheckedKeys = checkedKeys;
    this.onSelectData(params);
  }

  /**
   * 加载树的数据
   */
  async onLoadTreeData (treeNode: any, type: string) {
    console.log(treeNode.dataRef, 'treeNode.dataRef');
    if (
      treeNode &&
      treeNode.dataRef.children &&
      treeNode.dataRef.children.length > 0
    ) {
      return;
    }
    if (this.loadTreeNode) {
      const loadNode = this.loadTreeNode(treeNode);
      if (loadNode) {
        if (loadNode.then) {
          return loadNode.then((data) => {
            if (data) {
              treeNode.dataRef.children = this.formatTreeData(data);
              if (type === 'dep') {
                this.deptsTreeData = [...this.deptsTreeData];
              } else {
                this.innerMyDepts = [...this.innerMyDepts];
              }
            }
          });
        } else {
          treeNode.dataRef.children = this.formatTreeData(loadNode);
          if (type === 'dep') {
            this.deptsTreeData = [...this.deptsTreeData];
          } else {
            this.innerMyDepts = [...this.innerMyDepts];
          }
        }
      }
    }
  }

  /**
   * 选择人或部门时
   */
  onSelectData (payload) {
    if (!this.isMultiple) {
      this.changeSelectedValue([payload]);
      // 单选关闭
      this.contentFocus = false;
      this.selectFocus = false;
      this.searchBoxFocus = false;
    } else {
      const { checked, value } = payload;
      let copiedValue = [...this.value];
      if (checked) {
        if (this.hasLimit && copiedValue.length + 1 > this.limit) {
          this.$emit('outLimit', copiedValue);
        } else {
          copiedValue.push(value);
        }
      } else {
        copiedValue = this.deselectValue(value);
      }
      this.changeSelectedValue(copiedValue);
    }
  }

  changeSelectedValue (selectedValue) {
    this.$emit('change', selectedValue);
    this.showPane && this.isMultiple && this.debounceUpdatePopper();
  }

  /**
   * 我的部门左侧选中
   */
  onSelectMyDept (val) {
    if (this.deptSelectable) {
      this.onSelectData(val);
    } else {
      this.$emit('expandMyDeptUsers', val);
    }
  }

  /**
   * 删除已选中的值
   */
  deselectValue (val) {
    const index: any = this.value.findIndex(
      (i) => i[this.propLabel.value] === val[this.propLabel.value],
    );
    const copiedValue: any = [...this.value];
    copiedValue.splice(index, 1);
    return copiedValue;
  }

  /**
   * select框聚焦
   */
  focus () {
    this.$emit('focus');
    this.selectFocus = true;
    // 监听鼠标在其他地方按下时收起面板
    this.$nextTick(() => {
      (this.$refs.contentPane as HTMLElement).addEventListener(
        'mousedown',
        this.mousedown,
        false,
      );
    });
  }

  /**
   * select框失焦事件
   */
  blur () {
    this.selectFocus = false;
  }

  /**
   * 点击后缀
   */
  onClickSuffix (e: Event) {
    e.stopPropagation();
    const self = this as any;
    if (!this.showPane) {
      self.$refs.select.focus();
    } else {
      self.$refs.select.blur();
      e.stopPropagation();
      this.selectFocus = false;
    }
  }

  /**
   * 鼠标按下事件
   */
  mousedown (e: Event) {
    e.stopPropagation();
    e.cancelBubble = true;
    this.contentFocus = true;
  }

  clearAllSelect (e) {
    console.log(e, 'e');
    e.stopPropagation();
    this.changeSelectedValue([]);
  }

  deselect (val: string) {
    // 单选时直接清空
    let newSelectedValues = [];
    if (this.isMultiple) {
      const item = this.value.find((i: any) => i[this.propLabel.key] === val);
      newSelectedValues = this.deselectValue(item);
    } else {
      this.refreshKey++;
    }
    this.changeSelectedValue(newSelectedValues);
  }

  /**
   * 搜索框聚焦事件
   */
  searchFocus () {
    this.searching = true;
    this.searchBoxFocus = true;
  }

  /**
   * 搜索框失焦事件
   */
  searchBlur () {
    this.searchBoxFocus = false;
  }

  /**
   * 搜索框变化事件
   */
  searchChange () {
    this.$nextTick(() => {
      this.isSearching = this.searchKey !== '';
      this.$emit('search', this.searchKey);
    });
  }

  /**
   * 清空搜索框
   */
  clearSearchKey () {
    this.searchKey = '';
    this.isSearching = false;
    this.$emit('search', '');
  }

  /**
   * 切换面板
   */
  onTabChange (val) {
    this.currentActiveTab = val;
    this.$emit('changeTab', this.currentActiveTab);
  }

  /**
   * 过滤需要排除的Unit
   */
  filterItems (items) {
    return (items || []).filter((item) => {
      const included = !this.excludeKeyMap[item[this.propLabel.key]];
      if (included && item.children && item.children.length > 0) {
        item.children = this.filterItems(item.children);
      }
      return included;
    });
  }

  mounted () {
    const self = this as any;
    this.$nextTick(() => {
      this.popperElm = self.$refs.contentPane;
      this.referenceElm = self.$refs.select.$el;
      this.selectedKey = self.defaultExpandedKeys;
    });
  }

  render () {
    // 我的部门
    const innerMyDeptTags = (
      <div class={`${prefix}-content-pane`}>
        <div
          class={[
            `${prefix}-content-pane__left`,
            `${prefix}-content-pane--left0`,
          ]}
        >
          <a-tree
            checkStrictly={this.checkStrictly}
            checkable={this.isMultiple && !this.selectable}
            loadData={(e) => this.onLoadTreeData(e, 'myDep')}
            loadedKeys={this.loadedMyDepKeys}
            expandedKeys={this.expandedMydepKeys}
            defaultExpandedKeys={this.defaultExpandedKeys}
            autoExpandParent={true}
            selectedKeys={
              !this.isMultiple || this.selectable ? this.treeDefaultKeys : []
            }
            checkedKeys={
              this.isMultiple && !this.selectable ? this.treeDefaultKeys : []
            }
            treeData={this.innerMyDepts}
            onSelect={this.onTreeSelectMydep}
            onExpand={this.expandMydepTree}
            onCheck={this.onCheckBoxSelect}
          />
        </div>
        {/* 有可选人员 */}
        {this.innerMyDeptUsers.length > 0 && this.selectable ? (
          <div class={`${prefix}-content-pane__right`}>
            {!this.hasLimit && this.isMultiple ? (
              <div class={`${prefix}-content__checkbox-all`}>
                <a-checkbox
                  checked={this.allMyDeptUsersChecked}
                  onChange={this.checkAllMyDeptUsers}
                >
                  {i18n.t('genesisUI.selectAll')}
                </a-checkbox>
              </div>
            ) : null}
            {this.isMultiple ? (
              <multiple-item
                propLabel={this.propLabel}
                control={this.hasLimit}
                data={this.innerMyDeptUsers}
                defaultValue={this.multipleDefaultValue}
                onChange={this.onSelectData}
              />
            ) : (
              <single-item
                propLabel={this.propLabel}
                data={this.innerMyDeptUsers}
                defaultValue={this.singleDefaultValue}
                onChange={this.onSelectData}
              />
            )}
          </div>
        ) : (
          <div class={`${prefix}-content-pane__right`}>
            <div class={`${prefix}-content__no-data`}>
              {i18n.t('genesisUI.noStaff')}
            </div>
          </div>
        )}
      </div>
    );
    // 加载动画
    const loadingTag = this.loadingDep ? (
      <div class="loading">
        <a-spin size="small" />
      </div>
    ) : (
      <div class={`${prefix}-content__no-data`}>
        {i18n.t('genesisUI.noDep')}
      </div>
    );
    // 全部部门
    const departmentTag = (
      <div class={`${prefix}-content-pane`}>
        <div
          class={[
            `${prefix}-content-pane__left`,
            !(this.deptsTreeData.length > 0) && this.loadingDep
              ? `${prefix}-content-pane__left--loading`
              : '',
          ]}
        >
          {this.deptsTreeData.length > 0 ? (
            <a-tree
              checkStrictly={this.checkStrictly}
              checkable={this.isMultiple && !this.selectable}
              loadData={(e) => this.onLoadTreeData(e, 'dep')}
              loadedKeys={this.loadedKeys}
              expandedKeys={this.expandedKeys}
              defaultExpandedKeys={this.defaultExpandedKeys}
              autoExpandParent={true}
              selectedKeys={
                !this.isMultiple || this.selectable ? this.treeDefaultKeys : []
              }
              checkedKeys={
                this.isMultiple && !this.selectable ? this.treeDefaultKeys : []
              }
              treeData={this.deptsTreeData}
              onSelect={this.onTreeSelect}
              onExpand={this.expandTree}
              onCheck={this.onCheckBoxSelect}
            />
          ) : (
            loadingTag
          )}
        </div>
        {this.selectable ? (
          <div class={`${prefix}-content-pane__right`}>
            {this.innerUsers.length > 0 ? (
              <div>
                {!this.hasLimit && this.isMultiple ? (
                  <div class={`${prefix}-content__checkbox-all`}>
                    <a-checkbox
                      checked={this.allUsersChecked}
                      onChange={this.checkAllUsers}
                    >
                      {i18n.t('genesisUI.selectAll')}
                    </a-checkbox>
                  </div>
                ) : null}

                {this.isMultiple ? (
                  <multiple-item
                    class={
                      this.hasLimit ? `${prefix}-content__checkbox--limit` : ''
                    }
                    data={this.innerUsers}
                    propLabel={this.propLabel}
                    control={this.hasLimit}
                    defaultValue={this.multipleDefaultValue}
                    onChange={this.onSelectData}
                  />
                ) : (
                  <single-item
                    key="refreshKey"
                    propLabel={this.propLabel}
                    data={this.innerUsers}
                    defaultValue={this.singleDefaultValue}
                    onChange={this.onSelectData}
                  />
                )}
              </div>
            ) : (
              <div class={`${prefix}-content__no-data`}>
                {i18n.t('genesisUI.noStaff')}
              </div>
            )}
          </div>
        ) : null}
      </div>
    );
    // 我的部门
    const myDepartmentTag = this.loadingMyDep ? (
      <div class="loading loading--mydep">
        <a-spin size="small" />
      </div>
    ) : (
      <div class={`${prefix}-content-my-dep`}>
        {this.innerMyDepts.length > 0 ? (
          innerMyDeptTags
        ) : (
          <div class={`${prefix}-content__no-range`}>
            {i18n.t('genesisUI.outSelect')}
          </div>
        )}
      </div>
    );
    const tabTags = (
      <a-tabs
        defaultActiveKey={this.currentActiveTab}
        onChange={this.onTabChange}
      >
        <a-tab-pane key="0" tab={i18n.t('genesisUI.allDep')}>
          {departmentTag}
        </a-tab-pane>
        <a-tab-pane
          key="1"
          tab={i18n.t('genesisUI.myDepartment')}
          disabled={this.disabledMyDep}
        >
          {myDepartmentTag}
        </a-tab-pane>
      </a-tabs>
    );
    const tags = this.disabledMyDep ? (
      <div class={`${prefix}-content-tag`}>{departmentTag}</div>
    ) : (
      tabTags
    );
    // 面板
    const tabPane = <keep-alive>{!this.isSearching ? tags : null}</keep-alive>;

    const tag = (
      <div
        ref="contentPane"
        class={[
          `${prefix}-content`,
          !this.selectable ? `${prefix}-content--only-department` : '',
          this.showPane
            ? `${prefix}-content-display`
            : `${prefix}-content-none`,
        ]}
      >
        {/* 搜索框 */}
        <div class={`${prefix}-content-search`}>
          <a-input
            ref="searchInput"
            v-model={this.searchKey}
            placeholder={this.searchPlaceholder}
            onChange={this.searchChange}
            onFocus={this.searchFocus}
            onBlur={this.searchBlur}
          >
            <a-icon slot="prefix" type="search" />
            {this.searchKey !== '' ? (
              <a-icon
                slot="suffix"
                type="close-circle"
                onClick={this.clearSearchKey}
              />
            ) : null}
          </a-input>
        </div>
        <div>
          {/* 搜索结果面板 */}
          {this.isSearching ? (
            <div class={`${prefix}-search-no-data`}>
              {this.innerSearchData.length > 0 ? (
                <div>
                  {this.isMultiple ? (
                    <multiple-item
                      data={this.innerSearchData}
                      propLabel={this.propLabel}
                      searchStatus={true}
                      extraLabel={this.propLabel.extra || ''}
                      defaultValue={this.multipleDefaultValue}
                      hightLightKey={this.searchKey}
                      scrollToBottom={this.scrollToBottom}
                      onChange={this.onSelectData}
                    />
                  ) : (
                    <single-item
                      data={this.innerSearchData}
                      defaultValue={this.singleDefaultValue}
                      propLabel={this.propLabel}
                      extraLabel={this.propLabel.extra || ''}
                      showIcon={false}
                      searchStatus={true}
                      showSelected={false}
                      hightLightKey={this.searchKey}
                      scrollToBottom={this.scrollToBottom}
                      onChange={this.onSelectData}
                    />
                  )}
                </div>
              ) : (
                <div class={`${prefix}-search-no-user`}>
                  {' '}
                  {i18n.t('genesisUI.noResult')}
                </div>
              )}
            </div>
          ) : null}
          {/* 切换面板 */}
          {tabPane}
        </div>
      </div>
    );

    return (
      <div
        v-click-outside={(e) => this.handleOutsideClick(e)}
        class={[prefixCls, prefix]}
        style={this.prefixStyle}
      >
        <a-icon
          type={this.showPane ? 'up' : 'down'}
          class="select-suffix"
          onClick={(e) => this.onClickSuffix(e)}
        />
        <a-select
          v-show={this.showSelect}
          ref="select"
          v-model={this.selectedData}
          placeholder={this.selectPlaceholder}
          disabled={this.disabled}
          allowClear={this.allowClear}
          maxTagCount={this.maxTagCount}
          maxTagTextLength={this.maxTagTextLength}
          dropdownClassName={`${prefix}--select-dropdown`}
          mode="multiple"
          style="width: 100%"
          onFocus={() => this.focus()}
          onBlur={() => this.blur()}
          onDeselect={(e) => this.deselect(e)}
        >
          <a-icon
            slot="clearIcon"
            theme="filled"
            type="close-circle"
            onClick={(e) => this.clearAllSelect(e)}
          />
          {this.value.map((item) => {
            return (
              <a-select-option key={item[this.propLabel.value]}>
                {item[this.propLabel.name]}
              </a-select-option>
            );
          })}
        </a-select>
        <transition tag="div" name="bb-slide">
          {tag}
        </transition>
      </div>
    );
  }
}
