import { Component, Prop, Vue } from 'vue-property-decorator';
import { Radio, Icon } from 'ant-design-vue';
import { debounce } from 'lodash-es';
import './style/index.less';
import { highLight } from './high-light';
const prefixCls = 'SingleItem';
@Component({
  name: prefixCls,
  components: {
    ARadio: Radio,
    ARadioGroup: Radio.Group,
    AIcon: Icon,
  },
})
export default class SingleItem extends Vue {
  dropdownParent!: any;

  @Prop({
    type: Array,
    default: () => [],
  })
  data!: any[];

  @Prop() defaultValue!: any;

  @Prop() searchStatus!: boolean;

  @Prop({
    type: Boolean,
    default: true,
  })
  showSelected!: boolean;

  @Prop({
    type: Boolean,
    default: true,
  })
  showIcon!: boolean;

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

  radiovalue: string = '';

  mounted () {
    this.radiovalue = this.defaultValue;
  }

  onChange (e) {
    const v: string = e.target.value;
    const item = this.data.find(
      (i) => i[this.propLabel.value] === v || i === v,
    );
    if (this.dropdownParent) {
      this.dropdownParent && this.dropdownParent.visibleChange();
    }
    this.$emit('change', item);
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
      { leading: false, trailing: true },
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
        <a-radio
          key={item[this.propLabel.key] || item}
          value={item[this.propLabel.value] || item}
        >
          {this.showIcon ? <a-icon type="user" /> : null}
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
        </a-radio>
      );
    });
    return (
      <a-radio-group
        value={this.defaultValue}
        class="single-item"
        onChange={this.onChange}
      >
        <div class="single-item-pane" onScroll={this.onScroll}>
          {tags}
        </div>
      </a-radio-group>
    );
  }
}
