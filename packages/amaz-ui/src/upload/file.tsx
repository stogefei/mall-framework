import { Component, Mixins } from 'vue-property-decorator';
import { FileStatus, getSize } from '@amaz/shared-utils/src/upload';
import { Button, Tooltip } from 'ant-design-vue';
import i18n from '@amaz/i18n';
import Icon from '../icon';
import Mixin from './mixin';
import label from '../label';
const prefixCls = 'bb-upload-file';
@Component({
  name: prefixCls,
  components: {
    AButton: Button,
    ATooltip: Tooltip,
    BIcon: Icon,
  },
})
export default class BBUploadCard extends Mixins(Mixin) {
  render () {
    const files = [];
    let btnTag;
    if (
      !this.disabled &&
      (!this.max || (this.max && this.files.length < this.max))
    ) {
      btnTag = (
        <div class={prefixCls}>
          <div onClick={this.addFile} class={`${prefixCls}__btn`}>
            <input ref="file" {...this.fliePorps}></input>
            <a-button size={this.size} type="primary">
              <b-icon type="cloud-upload" />
              {i18n.t('genesisUI.upload')}
            </a-button>
          </div>
        </div>
      );
    }
    this.files.forEach((file) => {
      const detele = this.disabled ? null : (
        <b-icon
          type="delete-o"
          theme="b8"
          onClick={(e: Event) => {
            e.stopPropagation();
            e.preventDefault();
            this.$emit('delete', file);
          }}
        />
      );
      let action;
      switch (file.status) {
        case FileStatus.INTEND:
          action = (
            <b-icon
              type="cloud-upload"
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                this.$emit('upload', file);
              }}
            />
          );
          break;
        case FileStatus.QUEUE:
          action = (
            <b-icon
              type="pause"
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                this.$emit('pause', file);
              }}
            />
          );
          break;
        case FileStatus.UPLOADING:
          break;
        case FileStatus.ERROR:
          action = (
            <b-icon
              type="reload"
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                this.$emit('reload', file);
              }}
            />
          );
          break;
        case FileStatus.COMPLETE:
        default:
          action = (
            <b-icon
              type="cloud-download"
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                this.$emit('download', file);
              }}
            />
          );
          break;
      }
      /**
       *
       */

      const tips = (
        <div class={`${prefixCls}__actions`}>
          {action}
          {detele}
        </div>
      );

      const progress =
        file.status === FileStatus.UPLOADING ? (
          <a-progress
            stroke-color={{ '0%': '#108ee9', '100%': '#87d068' }}
            percent={file.progress}
          />
        ) : null;
      let Tag;
      Tag = (
        <div
          onClick={
            file.status === FileStatus.COMPLETE
              ? () => this.$emit('preview', file)
              : () => {}
          }
          class={`${prefixCls}__list-item ${file.status}`}
        >
          <div class={`${prefixCls}__info`} title={file.name}>
            <b-icon
              type={
                file.status === FileStatus.UPLOADING ? 'loading' : 'paper-clip'
              }
            />
            <label>{file.name}</label>
            <span>({getSize(file.size)})</span>
          </div>
          {progress}
          {tips}
        </div>
      );
      if (file.error) {
        Tag = (
          <a-tooltip placement="top">
            <span slot="title">{file.error}</span>
            {Tag}
          </a-tooltip>
        );
      }
      files.push(Tag);
    });

    return (
      <div class={this.comPrefixCls}>
        {btnTag}
        {...files}
      </div>
    );
  }
}
