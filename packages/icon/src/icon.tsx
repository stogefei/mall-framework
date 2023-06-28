import { defineComponent } from 'vue';
import './style';
const prefix = 'bb-icon';

export default defineComponent({
  name: prefix,
  component: {},
  inheritAttrs: false,
  props: {
    type: String,
    rotate: { type: Number, default: 0 },
  },
  created () {
    let icons: any = localStorage.getItem('icons');
    if (icons) {
      icons = JSON.parse(icons);
    } else {
      icons = [];
    }

    if (!icons.includes(this.type)) {
      icons.push(this.type);
    }

    localStorage.setItem('icons', JSON.stringify(icons));
  },
  // setup(props, { slots, attrs, emit }) {},
  render () {
    const props:any = { ...this.$props, ...this.$attrs };
    const iconProps:any = {
      class: {
        [prefix]: true,
        [`${prefix}-${this.type}`]: true,
        [props.class]: true,
      },
    };

    if (this.rotate) {
      iconProps.style = {
        transform: `rotate(${this.rotate}deg)`,
      };
    }
    return <i {...iconProps}></i>;
  },
});
