import { defineComponent, ExtractPropTypes } from 'vue';
import { withInstall } from '../_utils';
import BIcon from '../icon';
const prefixCls = 'bb-btn';
export const ButtonProps = () => ({
  icon: String,
  disabled: Boolean,
  type: { default: 'blue' || 'black' || 'dashed' || 'default', type: String },
});
const component = {
  name: prefixCls,
  inheritAttrs: false,
  components: {
    BIcon,
  },
  props: ButtonProps(),
  setup (props, { slots, attrs, emit }) {
    const p = { ...props, ...attrs };
    const {
      icon,
      disabled,
      type,
      ...restProps
    } = p;
    let IconTag;
    if (slots.icon) {
      IconTag = slots.icon({});
    } else if (icon) {
      IconTag = <b-icon type={this.icon} theme="b8" />;
    }
    let cls;
    switch (type) {
      case 'blue':
        cls = 'bb-btn--blue';
        break;
      case 'black':
        cls = 'bb-btn--black';
        break;
      case 'dashed':
        cls = 'bb-btn--dashed';
        break;
    }
    const btnProps = {
      class: {
        'bb-btn': true,
        [cls]: !!cls,
      },
      disabled: disabled,
      ...restProps,
    };
    const handleClick = () => {
      if (disabled) {
        return false;
      }
    };
    return () => {
      return (
        <div {...btnProps} onClick={handleClick}>
          {IconTag}
          {slots && <span>{ slots.default() }</span>}
        </div>
      );
    };
  },
};
// eslint-disable-next-line no-undef
export type BButtonProps = Partial<ExtractPropTypes<ReturnType<typeof ButtonProps>>>;

const Button = defineComponent(component);
export default withInstall(defineComponent(Button));
