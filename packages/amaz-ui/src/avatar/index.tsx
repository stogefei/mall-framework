import {
  defineComponent, ExtractPropTypes, watch, ref,
} from 'vue';
import { withInstall } from '../_utils';
import { ImageUtils, appIcons } from '@amaz/shared-utils';
import BIcon from '../icon';
const prefixCls = 'bb-avatar';
export const avatarProps = () => ({
  icon: String,
  avatar: String,
  size: Number,
  theme: String || undefined || null,
  background: { default: '#bbbeca', type: String },
  shape: { default: 'square' || 'default', type: String },
});
const component:any = {
  name: prefixCls,
  inheritAttrs: false,
  components: {
    BIcon: BIcon,
  },
  props: avatarProps(),
  methods: {
    getBase64Image (img) {
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, img.width, img.height);
      const dataURL = canvas.toDataURL('image/png');
      return dataURL;
    },
  },
  setup (props, { attr, slots }) {
    const imageBase64 = ref(null);
    const style = ref(null);
    console.log(props, 'props');
    watch(
      () => props.size,
      (newValue, oldValue) => {
        // console.log('值发生了变更', newValue, oldValue);
        if (props.size) {
          style.value = {
            width: `${props.size}px`,
            height: `${props.size}px`,
            fontSize: `${props.size / 2}px`,
          };
        } else {
          style.value = null;
        }
      },
      { immediate: true },
    );
    watch(
      () => props.avatar,
      (newValue, oldValue) => {
        if (props.avatar) {
          // 如果是ID就去获取图片
          if (/^\d+$/.test(props.avatar)) {
            const img = document.createElement('img');
            img.src = ImageUtils.getThumbImageUrl(this.avatar);
            img.onload = () => {
              imageBase64.value = this.getBase64Image(img);
            };
          } else if (appIcons[props.avatar]) {
            imageBase64.value = appIcons[props.avatar];
          } else {
            imageBase64.value = props.avatar;
          }
        } else {
          imageBase64.value = '';
        }
      },
    );
    let Tag;
    if (imageBase64.value) {
      Tag = <img src={imageBase64.value} alt='' />;
    } else if (props.icon) {
      Tag = <b-icon type={props.icon} theme={'b8'} />;
    } else {
      Tag = slots && slots.default();
    }
    return () => {
      return (
        <span
          class={{
            [prefixCls]: true,
            [`${prefixCls}-square`]: props.shape === 'square',
          }}
          style={{
            ...props.style,
            background: imageBase64.value ? undefined : props.background,
          }}
        >
          {Tag}
        </span>
      );
    };
  },
};
// eslint-disable-next-line no-undef
export type BAvatarProps = Partial<ExtractPropTypes<ReturnType<typeof avatarProps>>>;
const BBAvatar = defineComponent(component);
export default withInstall(BBAvatar);
