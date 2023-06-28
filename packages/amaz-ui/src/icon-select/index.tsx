import {
  Component, Vue, Prop, Model,
} from 'vue-property-decorator';
import { withInstall } from '../_utils';
import Combobox from '../combobox';
import Icon from '../icon';
import IconList from '../icon-list';

const prefixCls = 'bb-icon-select';

@Component({
  name: prefixCls,
  inheritAttrs: false,
  components: {
    BIcon: Icon,
    BCombobox: Combobox,
    BIconList: IconList,
  },
})
class BBIconSelect extends Vue {
  @Prop({ default: () => ['b8', 'outlined', 'filled'] }) themes: string[];

  @Model('change', { default: () => [] }) checked: any[] | any;

  @Prop({ default: () => false }) multiple: boolean;

  comboboxStatus = false;

  async select ({ key }) {}

  mouseover () {
    this.comboboxStatus = true;
  }

  change (data) {
    if (!this.multiple) {
      this.comboboxStatus = false;
    }
    this.$emit('change', data);
  }

  render () {
    const listProps = {
      class: {
        [`${prefixCls}__popup`]: true,
      },
      props: this.$props,
      attrs: this.$attrs,
      on: {
        ...this.$listeners,
        change: this.change,
      },
    };
    const iconTags = [];
    if (this.checked) {
      if (this.checked instanceof Array) {
        this.checked.forEach((item) => {
          iconTags.push(<b-icon type={item.type} theme={item.theme} />);
        });
      } else {
        iconTags.push(
          <b-icon type={this.checked.type} theme={this.checked.theme} />,
        );
      }
    }
    return (
      <b-combobox class={prefixCls} v-model={this.comboboxStatus}>
        <div slot="label" class={`${prefixCls}__icons`}>
          {...iconTags}
        </div>
        <div>
          <b-icon-list {...listProps} />
        </div>
      </b-combobox>
    );
  }
}

export default withInstall<BBIconSelect>(BBIconSelect);
