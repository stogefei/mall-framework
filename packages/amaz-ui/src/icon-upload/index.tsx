import { message } from 'ant-design-vue';
import {
  Component, Prop, Vue, Watch, Model,
} from 'vue-property-decorator';
import { VNodeData } from 'vue';
import { withInstall } from '../_utils';
import Upload, { BFile } from '@amaz/shared-utils/src/upload';
import BAvatar from '../avatar';
import BIcon from '../icon';
const prefixCls = 'bb-icon-upload';
@Component({
  name: prefixCls,
  inheritAttrs: false,
  components: {
    BAvatar,
    BIcon,
  },
})
class BBIconUpload extends Vue {
  @Model('input', { default: undefined }) value: string;

  @Prop({ default: '.webp,.svg,.png,.gif,.jpg,.jpeg,.jfif,.bmp,.dpg,.ico' })
  accept: string;

  @Prop({ default: 'appstore' }) defaultIcon: string;

  @Prop({ default: undefined }) avatarBackground: string;

  @Prop({ default: null }) shape: 'square' | 'default';

  @Prop({ default: undefined }) iconSize: number;

  // 文件上传限制大小
  @Prop({ default: 0 }) maxSize: number;

  @Prop({ default: false }) disabled: boolean;

  // 新增上传文件之前
  @Prop({ default: undefined }) addFileBefore: (file: BFile) => boolean;

  current: string = null;

  innerFiles: BFile[] = [];

  upload = new Upload();

  @Watch('value', { immediate: true })
  watchValue () {
    this.current = this.value;
  }

  initUpload () {
    this.upload.setConfig({
      files: this.innerFiles,
      auto: true,
      type: 'picture',
      accept: this.accept,
      maxSize: this.maxSize,
      message: message,
      max: 1,
      public: false,
      addFileBefore: this.addFileBefore,
      success: this.success,
      error: this.error,
    });
  }

  addFile (e: Event) {
    e.stopPropagation();
    (this.$refs.file as HTMLInputElement).click();
  }

  onFileChange (e) {
    if (e.target.files) {
      this.upload.addFiles(e.target.files);
    }
    e.target.value = null;
  }

  get fliePorps () {
    return {
      attrs: {
        type: 'file',
        accept: this.accept,
      },
      style: {
        display: 'none',
      },
      on: {
        change: this.onFileChange,
      },
    } as VNodeData;
  }

  success (file: BFile) {
    this.current = file.id;
    this.innerFiles.splice(0, 1);
    this.$emit('input', file.id);
    this.$emit('change', file.id);
    this.$emit('success', file.id);
    this.$emit('changeFile', file);
  }

  error (msg: string, file: BFile) {
    this.$emit('error', file.id);
  }

  updated () {
    this.initUpload();
  }

  created () {
    this.initUpload();
  }

  render () {
    return (
      <div class={prefixCls}>
        <input ref="file" {...this.fliePorps}></input>
        <b-avatar
          icon={this.defaultIcon}
          avatar={this.current}
          shape={this.shape}
          size={this.iconSize}
          background={this.avatarBackground}
        />
        <div class={`${prefixCls}-shade`} onClick={this.addFile}>
          <b-icon type="edit-o" theme="b8" />
        </div>
      </div>
    );
  }
}
export default withInstall<BBIconUpload>(BBIconUpload);
