import { Component, Prop, Vue } from 'vue-property-decorator';
import {
  Input, Tooltip, message, Button,
} from 'ant-design-vue';
import BQrCode from '../qr-code';
import BIcon from '../icon';
import BField from '../field';
import i18n from '@amaz/i18n';
import { getExternalFormUrl } from '@amaz/shared-utils';
import { withInstall } from '../_utils';
import { downloadFileByBase64 } from '@amaz/utils';

const prefixCls = 'bb-external-link-qrcode';
@Component({
  name: prefixCls,
  inheritAttrs: false,
  components: {
    BQrCode,
    BIcon,
    AInput: Input,
    ATooltip: Tooltip,
    BField,
    AButton: Button,
  },
})
class BBExternalLinkQrCode extends Vue {
  @Prop({ default: null }) value: string;

  base64 = null;

  get url () {
    return getExternalFormUrl(this.value);
  }

  onCopy () {
    const inputEle = document.createElement('input');
    inputEle.setAttribute('readonly', 'readonly');
    document.body.appendChild(inputEle);
    inputEle.value = this.url;
    inputEle.select();
    const isOk = document.execCommand('Copy');
    document.body.removeChild(inputEle);
    if (isOk) {
      message.success(i18n.t('common.copySuccess') as string);
    }
  }

  onGenerate (imageBase64) {
    this.base64 = imageBase64;
  }

  onDownload () {
    console.log('this.base64', this.base64);

    downloadFileByBase64(this.base64, 'qrcode');
  }

  render () {
    return (
      <div class={prefixCls}>
        <b-field label={i18n.t('genesisUI.linkURL')}>
          <a-input value={this.url} style="backgroundColor: #fff;" disabled>
            <a-tooltip slot="suffix" title={i18n.t('genesisUI.copyLink')}>
              <b-icon type="paste" theme="b8" onClick={this.onCopy} />
            </a-tooltip>
          </a-input>
        </b-field>
        <b-field
          ref="content"
          class={`${prefixCls}-content`}
          label={i18n.t('common.QRcode')}
        >
          <b-qr-code value={this.url} onGenerate={this.onGenerate} />
          <a-button type="link" onClick={this.onDownload}>
            {i18n.t('genesisUI.downloadCode')}
          </a-button>
        </b-field>
      </div>
    );
  }
}

export default withInstall<BBExternalLinkQrCode>(BBExternalLinkQrCode);
