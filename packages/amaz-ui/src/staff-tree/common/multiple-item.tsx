import { Component, Vue, Prop } from 'vue-property-decorator';
import { Checkbox, Icon } from 'ant-design-vue';
import { highLight } from './high-light';
import './style/index.less';
import { debounce } from 'lodash-es';
const prefixCls = 'MultipleItem';
@Component({
  name: prefixCls,
  components: {
    AIcon: Icon,
    ACheckbox: Checkbox,
    ACheckboxGroup: Checkbox.Group,
  },
})
export default class MultipleItem extends Vue {
  @Prop({
    type: Array,
    default: () => [],
  })
  data!: any[];

  @Prop({
    type: Array,
    default: () => [],
  })
  defaultValue!: string[];

  @Prop() searchStatus!: boolean;

  @Prop({
    type: Object,
    default: () => {
      return {
        value: 'value',
        key: 'key',
        name: 'name',
      };
    },
  })
  propLabel: any;

  @Prop({
    type: String,
    default: '',
  })
  hightLightKey!: string;

  @Prop({
    type: String,
    default: '',
  })
  extraLabel!: string;

  @Prop({
    type: Boolean,
    default: false,
  })
  control!: boolean;

  checkBoxVal: string[] = [];

  mounted () {
    // console.log(this.propLabel, 'propLabel---');
    this.checkBoxVal = this.defaultValue;
  }

  // onChange(val) {
  //   const items = this.data.filter(i => {
  //     return val.some(v => v === i[this.propLabel.value])
  //   });
  //   console.log('checkbox', items);
  //   this.$emit('onChange', items);
  // }

  onItemChange (val: any, currChecked: boolean) {
    const item: string = this.data.find(
      (i) => i[this.propLabel.value] === val.target.value,
    );
    let checked = val.target.checked;
    if (this.control) {
      checked = !currChecked;
    }
    const v: any = {
      value: item,
      checked: checked,
    };
    console.log(v, 'v');
    this.$emit('change', v);
  }

  onScroll (ele: any) {
    const dom: HTMLElement = ele.target;
    // 浏览器缩放时导致无法相等
    if (dom.clientHeight + dom.scrollTop + 5 >= dom.scrollHeight) {
      this.debounceEmitScroll();
    }
  }

  get debounceEmitScroll () {
    return debounce(
      () => {
        this.$emit('scrollToBottom');
      },
      500,
      {
        leading: false,
        trailing: true,
      },
    );
  }

  hightLight (content: string): string {
    return highLight(
      content,
      this.hightLightKey,
      '<span class="hightlight">',
      '</span>',
    );
  }

  render () {
    const tags = this.data.map((item) => {
      return (
        <div key={item[this.propLabel.key] || item} class="checkbox-item">
          <a-checkbox
            value={item[this.propLabel.value] || item}
            key={item[this.propLabel.key] || item}
            checked={this.defaultValue.includes(item[this.propLabel.value])}
            onChange={(e) =>
              this.onItemChange(
                e,
                this.defaultValue.includes(item[this.propLabel.value]),
              )
            }
          >
            {this.searchStatus ? (
              <a-icon type={item.unitType === 'USER' ? 'user' : 'team'} />
            ) : null}
            <span>
              {this.hightLightKey === '' ? (
                <span title={item[this.propLabel.name] || item} class="content">
                  {item[this.propLabel.name] || item}
                </span>
              ) : (
                <span
                  title={item[this.propLabel.name] || item}
                  class="content"
                  domPropsInnerHTML={this.hightLight(
                    `${item[this.propLabel.name] || item}${
                      this.extraLabel !== '' && item[this.extraLabel]
                        ? ' - ' + item[this.extraLabel]
                        : ''
                    }`,
                  )}
                />
              )}
            </span>
            {item.departmentFullName ? (
              <span>-{item.departmentFullName}</span>
            ) : null}
          </a-checkbox>
        </div>
      );
    });
    return (
      <div
        class="ant-checkbox-group bb-checkbox-group"
        onScroll={this.onScroll}
      >
        {tags}
      </div>
    );
  }
}
