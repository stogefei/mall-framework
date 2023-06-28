import {
  Component, Prop, Vue, Model, Watch,
} from 'vue-property-decorator';
import { Select, Spin } from 'ant-design-vue';

import { withInstall } from '../_utils';
import { VNodeData } from 'vue';
import { debounce } from 'lodash-es';
import { Generator } from '@amaz/utils';
import BIcon from '../icon';
const prefixCls = 'bb-select';

const DEFAULT_STRUCTURE = {
  icon: 'icon',
  label: 'text',
  value: 'key',
  children: 'children',
};
@Component({
  name: prefixCls,
  components: {
    ASelect: Select,
    ASelectOption: Select.Option,
    ASelectOptGroup: Select.OptGroup,
    ASpin: Spin,
    BIcon,
  },
})
class BBSelect extends Vue {
  @Model('change', { default: undefined }) value: any | any[];

  @Prop({ default: () => [] }) options:
    | any[]
    | ((pageNum: number, searchValue?: string) => Promise<any[]>);

  @Prop({ default: 'default' }) mode: 'default' | 'multiple';

  @Prop({ default: true }) labelInValue: boolean;

  @Prop({ default: true }) showSearch: boolean;

  @Prop({ default: null }) size: string;

  @Prop({ default: null }) placeholder: string;

  @Prop({ default: true }) allowClear: boolean;

  @Prop({ default: false }) disabled: boolean;

  @Prop({ default: null }) structure: any;

  fetching = false;

  lastFetchId = 0;

  currentOptions = [];

  id = Generator.uuid(12).toLocaleLowerCase();

  pageNum = 1;

  total = 0;

  fetchSearch = null;

  searchValue = undefined;

  open = false;

  currentValue = null;

  currentStructure = null;

  @Watch('structure', { immediate: true, deep: true })
  watchStructure () {
    this.currentStructure = Object.assign(
      {},
      DEFAULT_STRUCTURE,
      this.structure,
    );
  }

  @Watch('value', { immediate: true, deep: true })
  watchValue () {
    this.currentValue = this.value;
    if (this.value && this.labelInValue) {
      if (this.value instanceof Array) {
        this.currentValue = this.value.map((item) => ({
          key: item[this.currentStructure.value],
          label: item[this.currentStructure.label],
        }));
      } else {
        this.currentValue = {
          key: this.value[this.currentStructure.value],
          label: this.value[this.currentStructure.label],
        };
      }
    }
  }

  @Watch('options', { immediate: true, deep: true })
  watchOptions () {
    if (this.options instanceof Array) {
      this.currentOptions = [...this.options];
    }
  }

  async getOptions () {
    this.fetching = true;

    if (this.options instanceof Function) {
      this.lastFetchId++;
      const fetchId = this.lastFetchId;
      const res: any = await this.options(this.pageNum, this.searchValue);
      if (this.searchValue !== undefined && fetchId !== this.lastFetchId) {
        return [];
      }
      this.fetching = false;
      if (res.res) {
        this.total = res.total;

        return res.data;
      } else {
        return [];
      }
    } else {
      this.fetching = false;
      if (this.searchValue) {
        return this.options.filter(
          (item) =>
            item[this.currentStructure.label] &&
            item[this.currentStructure.label]
              .toLocaleLowerCase()
              .includes(this.searchValue.toLocaleLowerCase()),
        );
      } else {
        return this.options;
      }
    }
  }

  /**
   * 下拉框显示取值事件
   * @param open
   */
  async onDropdownVisibleChange (open) {
    this.open = open;
    if (open) {
      this.currentOptions = await this.getOptions();
    } else {
      this.pageNum = 1;
      this.searchValue = undefined;
    }
  }

  /**
   * 下拉框筛选事件
   * @param searchValue
   */
  async onSearch (searchValue) {
    if (this.open) {
      this.pageNum = 1;
      this.searchValue = searchValue;
      this.fetching = true;
      this.currentOptions = [];
      this.currentOptions = await this.getOptions();
    }
  }

  /**
   * 下拉框滚动事件
   * @param e
   */
  async onPopupScroll (e: Event) {
    if (this.options instanceof Function) {
      const ele = e.target as HTMLUListElement;
      const height = ele.scrollHeight - ele.clientHeight;

      if (
        height - ele.scrollTop < 150 &&
        !this.fetching &&
        this.currentOptions.length < this.total
      ) {
        this.pageNum++;
        this.currentOptions.push(...(await this.getOptions()));
      }
    }
  }

  obChange (value, vNodes) {
    let nValue = value;
    let srouce: any;
    if (value && this.labelInValue) {
      if (value instanceof Array) {
        nValue = value.map((item) => ({
          [this.currentStructure.value]: item.key,
          [this.currentStructure.label]: item.label,
        }));
      } else {
        nValue = {
          [this.currentStructure.value]: value.key,
          [this.currentStructure.label]: value.label,
        };
      }
    }
    if (value) {
      if (value instanceof Array) {
        srouce = [];
        vNodes.forEach((item, index) => {
          srouce.push(item.data?.props?.source || value[index]);
        });
      } else {
        srouce = vNodes.data?.props?.source || value;
      }
    }

    this.$emit('change', nValue || null, srouce);
  }

  getOptionItem (item, level = 0) {
    const children = item[this.currentStructure.children];

    if (children) {
      if (children.length) {
        let GroupLabelTag;
        if (this.$scopedSlots.group) {
          GroupLabelTag = this.$scopedSlots.group(item);
        } else {
          const icon = item[this.currentStructure.icon];
          GroupLabelTag = [
            icon ? <b-icon type={icon} theme="b8" /> : null,
            item[this.currentStructure.label],
          ];
        }
        const sItems = children.map((sitem) =>
          this.getOptionItem(sitem, level + 1),
        );

        return (
          <a-select-opt-group>
            <span slot="label">{GroupLabelTag}</span>
            {sItems}
          </a-select-opt-group>
        );
      }
    } else {
      const Tags = [];
      if (this.$scopedSlots.option) {
        Tags.push(this.$scopedSlots.option(item));
      } else {
        if (item.icon) {
          Tags.push(<b-icon type={item.icon} theme="b8" />);
        }

        Tags.push(item[this.currentStructure.label]);
      }
      const props: VNodeData = {
        key: item[this.currentStructure.value],
        props: {
          source: item,
        },
        style: {
          paddingLeft: `${level * 20}px`,
        },
        attrs: {},
      };
      Object.values(this.currentStructure).forEach((key: string) => {
        props.attrs[key] = item[key];
        props.attrs.disabled = item.disabled;
      });
      return <a-select-option {...props}>{Tags}</a-select-option>;
    }
  }

  created () {
    this.fetchSearch = debounce(this.onSearch, 800);
  }

  render () {
    const props: VNodeData = {
      ref: 'select',
      class: {
        [prefixCls]: true,
      },
      props: {
        ...this.$props,
        value: this.currentValue || undefined,
        filterOption: false,
        options: null,
        dropdownClassName: `${prefixCls}-dropdown`,
        optionLabelProp: this.currentStructure.label,
      },
      attrs: {
        ...this.$attrs,
      },
      on: {
        ...this.$listeners,
        dropdownVisibleChange: this.onDropdownVisibleChange,
        search:
          this.options instanceof Function ? this.fetchSearch : this.onSearch,
        popupScroll: this.onPopupScroll,
        change: this.obChange,
      },
      scopedSlots: this.$scopedSlots,
    };
    const Tags = [];
    if (this.currentOptions && this.currentOptions.length) {
      this.currentOptions.forEach((item) => {
        Tags.push(this.getOptionItem(item));
      });
    }
    return (
      <a-select {...props}>
        {this.fetching && <a-spin slot="notFoundContent" size="small" />}
        {Tags}
      </a-select>
    );
  }
}

export default withInstall<BBSelect>(BBSelect);
