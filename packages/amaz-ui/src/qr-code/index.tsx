import {
  Component, Prop, Watch, Vue,
} from 'vue-property-decorator';
import QrCode from 'qrcode';
import { withInstall } from '../_utils';

const prefixCls = 'bb-qrcode';
@Component({
  name: prefixCls,
  inheritAttrs: false,
  components: {},
})
class BBQrCode extends Vue {
  @Prop({ default: null }) value: string;

  @Prop({ default: 'H' }) level: 'L' | 'M' | 'Q' | 'H';

  @Prop({ default: 250 }) width: number;

  @Prop({ default: 2 }) margin: number;

  base64 = null;

  @Watch('value', { immediate: true })
  watchStr () {
    if (this.value) {
      QrCode.toDataURL(
        this.value,
        {
          errorCorrectionLevel: this.level,
          margin: this.margin,
          width: this.width,
        },
        (err, urls) => {
          if (err) {
            console.error(err);
          }
          this.base64 = urls;
          this.$emit('generate', this.base64);
        },
      );
    }
  }

  render () {
    return (
      <div
        class={{
          [prefixCls]: true,
        }}
      >
        <img src={this.base64} {...{ on: { ...this.$listeners } }} />
      </div>
    );
  }
}

export default withInstall<BBQrCode>(BBQrCode);
