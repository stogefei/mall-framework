import { defineComponent, ExtractPropTypes } from 'vue';
import Icon from '@ant-design/icons-vue';
import BIcon from '@amaz/icon';
import { withInstall } from '../_utils';
const prefixCls = 'bb-icon';
export const BIconProps = () => ({
  type: String,
  theme: { default: 'outlined', type: String },
  rotate: { default: 0, type: Number, require: false },
});
const component = {
  name: prefixCls,
  inheritAttrs: false,
  components: {
    AIcon: Icon,
    BIcon,
  },
  props: BIconProps(),
  setup (props, { attrs }) {
    const iconProp = {
      ...attrs,
      ...props,
    };
    let Tag;
    if (props.theme === 'b8') {
      let icons: any = localStorage.getItem('icons');
      if (icons) {
        icons = JSON.parse(icons);
      } else {
        icons = [];
      }
      if (!icons.includes(props.type)) {
        icons.push(props.type);
      }

      localStorage.setItem('icons', JSON.stringify(icons));

      delete iconProp.theme;
      // console.log(iconProp, 'iconProp---');
      Tag = <b-icon {...iconProp} />;
    } else {
      iconProp.class = {
        [prefixCls]: true,
      };
      Tag = <a-icon {...iconProp} />;
    }
    return () => {
      return Tag;
    };
  },
};
// eslint-disable-next-line no-undef
export type BBIconProps = Partial<ExtractPropTypes<ReturnType<typeof BIconProps>>>;
const BBIcon = defineComponent(component);
export default withInstall(defineComponent(BBIcon));
