import { Component, Mixins } from 'vue-property-decorator';
import { FileStatus } from '@amaz/shared-utils/src/upload';
import i18n from '@amaz/i18n';
import Icon from '../icon';
import Mixin from './mixin';
const prefixCls = 'bb-upload-card';
@Component({
  name: prefixCls,
  components: {
    BIcon: Icon,
  },
})
export default class BBUploadCard extends Mixins(Mixin) {
  nAccept = '.webp,.svg,.png,.gif,.jpg,.jpeg,.jfif,.bmp,.dpg,.ico';

  render () {
    const files = [];
    this.fliePorps.attrs.accept = this.accept || this.nAccept;
    let btnTag;

    if (
      !this.disabled &&
      (!this.max || (this.max && this.files.length < this.max))
    ) {
      btnTag = (
        <div class={prefixCls}>
          <div onClick={this.addFile} class={`${prefixCls}__btn`}>
            <input ref="file" {...this.fliePorps}></input>
            <b-icon type="plus"></b-icon>
            <div class="ant-upload-text">{i18n.t('genesisUI.img')}</div>
          </div>
        </div>
      );
    }
    this.files.forEach((file) => {
      let tips;
      const detele = this.disabled ? null : (
        <b-icon type="delete" onClick={() => this.$emit('delete', file)} />
      );
      switch (file.status) {
        case FileStatus.INTEND:
          tips = (
            <div class={`${prefixCls}__actions`}>
              <b-icon
                type="cloud-upload"
                onClick={() => this.$emit('upload', file)}
              />
              {detele}
            </div>
          );
          break;
        case FileStatus.QUEUE:
          tips = (
            <div class={`${prefixCls}__actions`}>
              <b-icon type="pause" onClick={() => this.$emit('pause', file)} />
              {detele}
            </div>
          );
          break;
        case FileStatus.UPLOADING:
          tips = (
            <div class={`${prefixCls}__actions`}>
              <a-progress type="circle" percent={file.progress} width={50} />
            </div>
          );
          break;
        case FileStatus.ERROR:
          tips = (
            <div class={`${prefixCls}__actions`}>
              <b-icon
                type="reload"
                onClick={() => this.$emit('reload', file)}
              />
              {detele}
            </div>
          );
          break;
        case FileStatus.COMPLETE:
        default:
          tips = (
            <div class={`${prefixCls}__actions`}>
              <b-icon type="eye" onClick={() => this.$emit('preview', file)} />
              <b-icon
                type="cloud-download"
                onClick={() => this.$emit('download', file)}
              />
              {detele}
            </div>
          );
          break;
      }
      files.push(
        <div class={`${prefixCls} ${prefixCls}__list-item ${file.status}`}>
          <span class={`${prefixCls}__img`}>
            <img
              src={
                file.file
                  ? window.URL.createObjectURL(file.file)
                  : null || file.thumbUrl || file.url
              }
            ></img>
          </span>
          {tips}
        </div>,
      );
    });

    return (
      <div class={this.comPrefixCls}>
        {btnTag}
        {...files}
      </div>
    );
  }
}
