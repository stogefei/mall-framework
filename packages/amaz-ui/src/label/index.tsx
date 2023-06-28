import { defineComponent, Component, ExtractPropTypes } from 'vue';
import { withInstall } from '../_utils';
const prefixCls = 'bb-label';
export const labelProps = () => ({
  require: { default: false, type: Boolean },
});
const component = {
  name: prefixCls,
  props: labelProps(),
  setup (props, { slots, attrs, emit }) {
    console.log(props, 'props');
    const require = attrs.require || props.require;
    const BBLabelProps = {
      class: {
        [prefixCls]: true,
      },
      ...props,
    };
    return () => {
      return (
        <label {...BBLabelProps}>
          {require ? <span class={`${prefixCls}__require`}>*</span> : undefined}
          <span>{slots && slots.default()}</span>
        </label>
      );
    };
  },
};
// eslint-disable-next-line no-undef
export type BLabelProps = Partial<ExtractPropTypes<ReturnType<typeof labelProps>>>;
const BBLabel = defineComponent(component);
export default withInstall<Component>(BBLabel);
