import {
  Component, Prop, Vue, Watch,
} from 'vue-property-decorator';
import { withInstall } from '../_utils';
import { ImageUtils } from '@amaz/shared-utils';
import BIcon from '../icon';
import { IBIconEditorVaule } from '../icon-editor';
const prefixCls = 'bb-icon-avatar';
@Component({
  name: prefixCls,
  inheritAttrs: false,
  components: {
    BIcon,
  },
})
class BBIconAvatar extends Vue {
  @Prop({ default: undefined }) value: IBIconEditorVaule;

  @Prop({ default: undefined }) size: number;

  @Prop({ default: undefined }) title: string;

  @Prop({ default: undefined }) defaultIcon: string;

  @Prop({ default: 'blue' }) defaultColor: string;

  @Prop({ default: 'square' }) shape: 'square' | 'round';

  @Prop({ default: 'default' }) theme: 'solid' | 'default';

  prefixCls = prefixCls;

  imageBase64 = null;

  style = null;

  icon = null;

  @Watch('size', { immediate: true })
  watchSize () {
    if (this.size) {
      this.style = {
        width: `${this.size}px`,
        height: `${this.size}px`,
        fontSize: `${this.size / 2}px`,
      };
    } else {
      this.style = null;
    }
  }

  @Watch('value', { immediate: true, deep: true })
  watchTheme () {
    if (this.value) {
      if (this.value.type === 'icon') {
        this.icon = this.value.iconKey;
        this.imageBase64 = null;
      } else if (this.value.type === 'pic') {
        const img = document.createElement('img');
        img.src = ImageUtils.getThumbImageUrl(this.value.picId);
        img.onload = () => {
          this.imageBase64 = this.getBase64Image(img);
        };
      } else {
        this.imageBase64 = '';
      }
    } else {
      this.imageBase64 = '';
    }
  }

  getBase64Image (img) {
    var canvas = document.createElement('canvas');
    canvas.width = img.width;
    canvas.height = img.height;
    var ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0, img.width, img.height);
    var dataURL = canvas.toDataURL('image/png');
    return dataURL;
  }

  render () {
    let Tag;
    const classList = {
      [prefixCls]: true,
      [`${prefixCls}--square`]: this.shape === 'square',
      [`${prefixCls}--solid`]: this.theme === 'solid',
    };
    if (this.imageBase64) {
      Tag = <img src={this.imageBase64} />;
    } else if (this.icon) {
      Tag = <b-icon type={this.icon} theme="b8" />;
    } else if (this.defaultIcon) {
      classList[this.defaultColor] = true;
      Tag = <b-icon type={this.defaultIcon} theme="b8" />;
    } else if (this.title) {
      classList.blue = true;
      Tag = <span>{this.title.substring(0, 1).toLocaleUpperCase()}</span>;
    } else {
      classList.blue = true;
      Tag = <span>{this.$slots.default}</span>;
    }

    if (this.value?.type === 'icon' && this.value?.color) {
      classList[this.value.color] = true;
    }

    return (
      <div
        class={classList}
        style={{
          ...this.style,
        }}
      >
        {Tag}
      </div>
    );
  }
}

export default withInstall<BBIconAvatar>(BBIconAvatar);
