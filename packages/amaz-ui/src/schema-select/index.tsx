import {
  Component, Prop, Vue, Model, Watch,
} from 'vue-property-decorator';
import { withInstall } from '../_utils';
import { BizPropertyVo, BizPropertyVoPropertyType } from '@amaz/api';
import { Schema } from '@amaz/shared-utils';
import BSelect from '../select';
import { VNodeData } from 'vue';
const prefixCls = 'bb-schema-select';

@Component({
  name: prefixCls,
  components: {
    BSelect,
  },
})
class BBSchemaSelect extends Vue {
  @Model('change', { default: undefined }) value: any | any[];

  @Prop({ default: null }) element: any;

  @Prop({ default: null }) elementRowIndex: number;

  @Prop({ default: 20 }) pageSize: number;

  @Prop({ default: 'default' }) mode: string;

  @Prop({ default: true }) labelInValue: boolean;

  @Prop({ default: true }) showSearch: boolean;

  @Prop({ default: null }) size: string;

  @Prop({ default: null }) placeholder: string;

  @Prop({ default: true }) allowClear: boolean;

  @Prop({ default: false }) disabled: boolean;

  @Prop({ default: false }) property: BizPropertyVo;

  options = null;

  @Watch('property', { immediate: true, deep: true })
  watchProperty () {
    let options;
    if (
      [
        BizPropertyVoPropertyType.CORRELATION_FORM,
        BizPropertyVoPropertyType.CORRELATION_MULTI_FORM,
      ].includes(this.property.propertyType)
    ) {
      options = Schema.correlationOptionsRule(this.property);
    } else {
      options = this.property.option;
    }
    const fun = Schema.asyncOptions(options, this.pageSize);
    this.options = async (page, searchValue?) => {
      const filters = Schema.getOptionsFilterParams(
        options,
        this.element?.from,
        this.elementRowIndex,
      );
      return await fun({ page, filters, searchValue });
    };
  }

  render () {
    const props: VNodeData = {
      props: {
        ...this.$props,
        options: this.options,
      },
      attrs: {
        ...this.$attrs,
      },
      scopedSlots: {
        ...this.$scopedSlots,
      },
      on: {
        ...this.$listeners,
      },
    };
    return <b-select {...props} />;
  }
}

export default withInstall<BBSchemaSelect>(BBSchemaSelect);
