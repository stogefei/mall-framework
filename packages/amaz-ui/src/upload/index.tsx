import { message } from 'ant-design-vue';
import Viewer from 'viewerjs';
import 'viewerjs/dist/viewer.css';
import {
  Component, Prop, Vue, Watch,
} from 'vue-property-decorator';
import { VNodeData } from 'vue';
import { withInstall } from '../_utils';
import Upload, {
  BFile,
  FileStatus,
  isImageFile,
} from '@amaz/shared-utils/src/upload';
import UploadCard from './card';
import UploadFile from './file';

const prefixCls = 'bb-upload';
@Component({
  name: prefixCls,
  components: {
    BUploadCard: UploadCard,
    BUploadFile: UploadFile,
  },
})
class BBUpload extends Vue {
  @Prop({ default: () => [] }) value: any[];

  @Prop({ default: undefined }) accept: string;

  @Prop({ default: false }) multiple: boolean;

  @Prop({ default: 0 }) max: number;

  @Prop({ default: true }) auto: boolean;

  // 组件样式大小，适配ant design
  @Prop({ default: null }) size: 'small';

  // 文件上传限制大小
  @Prop({ default: 0 }) maxSize: number;

  @Prop({ default: false }) disabled: boolean;

  @Prop({ default: 'file' }) type: 'picture' | 'file';

  @Prop({ default: false }) disable: boolean;

  @Prop({ default: false }) public: boolean;

  // 新增上传文件之前
  @Prop({ default: undefined }) addFileBefore: (file: BFile) => boolean;

  // 线程数 默认5个线程同时上传如果设置0时候则不限制
  @Prop({ default: 3 }) threads: number;

  prefixCls = prefixCls;

  innerFiles: any[] = [];

  upload = new Upload();

  @Watch('value', { immediate: true, deep: true })
  watchValue () {
    this.innerFiles = this.value || [];
  }

  preview (file: BFile) {
    if (isImageFile(file)) {
      let idx = -1;
      let num = 0;
      const perviewImage = document.createElement('div');
      this.innerFiles.forEach((nFile, index) => {
        if (nFile.status !== FileStatus.COMPLETE) {
          return;
        }
        if (isImageFile(nFile)) {
          const image = document.createElement('img');
          image.src = nFile.file
            ? window.URL.createObjectURL(nFile.file)
            : nFile.thumbUrl;
          image.setAttribute(
            'data-source',
            nFile.file ? window.URL.createObjectURL(nFile.file) : nFile.url,
          );
          image.setAttribute('alt', nFile.name);
          perviewImage.appendChild(image);
          if (nFile.id === file.id) {
            idx = num;
          }
          num++;
        }
      });
      const viewer = new Viewer(perviewImage, {
        url: 'data-source',
        hide: () => {
          viewer.destroy();
        },
      });
      viewer.show(true);
      viewer.view(idx);
    } else if (file) {
      // POC 代码
      window.open(
        `http://api.idocv.com/view/url?url=${encodeURIComponent(
          window.location.origin + file.url,
        )}`,
      );
    }
  }

  fileChange (files) {
    if (files.length) {
      this.upload.addFiles(files);
      this.$emit('input', this.innerFiles);
    }
  }

  uploadFile (file) {
    this.upload.uploadFile(file.id);
    this.$emit('upload', file);
  }

  reloadFile (file) {
    this.upload.reloadFile(file.id);
    this.$emit('reload', file);
  }

  deleteFile (file) {
    this.upload.deleteFile(file.id);
    this.$emit('delete', file);
    this.$emit('input', this.innerFiles);
  }

  pauseFile (file) {
    this.upload.pauseFile(file.id);
    this.$emit('pause', file);
  }

  previewFile (file) {
    this.preview(file);
    this.$emit('preview', file);
  }

  downloadFile (file) {
    let a = document.createElement('a');
    a.download = file.name;
    a.href = file.url;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    a = null;
    this.$emit('download', file);
  }

  success (file: BFile) {
    this.$emit('success', file);
  }

  error (msg: string, file: BFile) {
    this.$emit('error', file);
  }

  updated () {
    this.initUpload();
  }

  initUpload () {
    this.upload.setConfig({
      files: this.innerFiles,
      threads: this.threads,
      auto: this.auto,
      type: this.type,
      accept: this.accept,
      maxSize: this.maxSize,
      message: message,
      max: this.max,
      public: this.public,
      addFileBefore: this.addFileBefore,
      success: this.success,
      error: this.error,
    });
  }

  onClick () {
    this.$emit('click');
  }

  created () {
    this.initUpload();
  }

  render () {
    const slotPorps: VNodeData = {
      class: {
        [`${prefixCls}-sm`]: this.size === 'small',
      },
      props: {
        ...this.$props,
        comPrefixCls: prefixCls,
        files: this.innerFiles,
      },
      on: {
        fileChange: this.fileChange,
        download: this.downloadFile,
        upload: this.uploadFile,
        delete: this.deleteFile,
        pause: this.pauseFile,
        preview: this.previewFile,
        reload: this.reloadFile,
        click: this.onClick,
      },
    };
    let Tag;
    if (this.type === 'file') {
      Tag = <b-upload-file {...slotPorps}></b-upload-file>;
    } else {
      Tag = <b-upload-card {...slotPorps}></b-upload-card>;
    }
    return Tag;
  }
}
export default withInstall<BBUpload>(BBUpload);
