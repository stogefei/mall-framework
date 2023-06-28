import {
  Component, Prop, Vue, Watch, Model,
} from 'vue-property-decorator';
import BField from '../field';
import { withInstall } from '../_utils';
import { VNodeData } from 'vue';
import i18n from '@amaz/i18n';

const prefixCls = 'bb-mapping-item';

@Component({
  name: prefixCls,
  components: {
    BField,
  },
})
class BBMappingItem extends Vue {
  @Model('input', { default: null }) value: any;

  @Prop({ default: null }) valueType: any;

  @Prop({ default: null }) fields: any;

  @Prop({ default: 0 }) level: number;

  current: any = null;

  @Watch('value', { immediate: true, deep: true })
  watchValue () {
    const current = { ...this.value } as any;

    this.current = current;
  }

  defaultOptions = {
    'tree-select': {
      treeNodeFilterProp: 'title',
      treeDataSimpleMode: true,
      labelInValue: true,
      showSearch: true,
      placeholder: i18n.t('genesisUI.chooseTips'),
      dropdownClassName: 'bb-json-schema-tree-dropdown',
      replaceFields: {
        title: 'name',
        value: 'code',
      },
    },
  };

  onChange (value, code, field, ...args) {
    let nvalue = value;
    if (value && field.type === 'tree-select') {
      nvalue = { code: value.value, name: value.label };
      const item = field.treeData.find((tree) => tree.code === value.value);
      nvalue.type = item.type;
      nvalue.schemaCode = item.schemaCode;
      nvalue.weight = item.weight;
    }
    this.current[code] = nvalue;

    this.$emit('input', this.current);
    this.$emit('change', { value: nvalue, code, field }, ...args);
  }

  render () {
    const ItemTags = [];
    Object.keys(this.fields).forEach((key, index) => {
      if (this.fields[key].visible === false) {
        return;
      }
      if (Object.prototype.hasOwnProperty.call(this.current, key)) {
        const fieldOptions = this.fields[key];
        let cValue = this.current[key];
        if (fieldOptions.type === 'tree-select' && cValue) {
          cValue = {
            label: cValue.name,
            value: cValue.code,
          };
        }
        const props: VNodeData = {
          props: {
            value: cValue,
          },
          attrs: {
            ...this.defaultOptions[fieldOptions.type],
            ...fieldOptions,
            style: undefined,
          },
          on: {
            input: (value, ...args) => {
              this.onChange(value, key, fieldOptions, ...args);
            },
          },
        };
        const prefix: any[] = [];
        if (index === 0) {
          prefix.push(this.$slots.prefix);
        }

        ItemTags.push(
          <div
            class={`${prefixCls}-cell`}
            style={{
              ...fieldOptions.style,
            }}
          >
            {prefix}
            <b-field {...props} />
          </div>,
        );
      }
    });
    return (
      <div class={prefixCls}>
        {ItemTags}
        {this.$slots.suffix}
      </div>
    );
  }
}
export default withInstall<BBMappingItem>(BBMappingItem);
