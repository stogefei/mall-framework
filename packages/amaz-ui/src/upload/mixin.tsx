import { Progress } from 'ant-design-vue';
import { Component, Prop, Vue } from 'vue-property-decorator';
import { VNodeData } from 'vue';
import { BFile } from '@amaz/shared-utils/src/upload';

const prefixCls = 'bb-upload-mixin';
@Component({
  name: prefixCls,
  components: {
    AProgress: Progress,
  },
})
export default class BBUploadMixin extends Vue {
  @Prop({ default: undefined }) comPrefixCls: string;

  @Prop({ default: () => ({}) }) files: BFile[];

  @Prop({ default: '' }) accept: string;

  @Prop({ default: false }) multiple: boolean;

  @Prop({ default: undefined }) size: string;

  @Prop({ default: false }) disabled: boolean;

  @Prop({ default: 0 }) max: number;

  addFile () {
    (this.$refs.file as HTMLInputElement).click();
  }

  get fliePorps () {
    return {
      attrs: {
        type: 'file',
        accept: this.accept,
        multiple: this.multiple ? 'multiple' : undefined,
      },
      style: {
        display: 'none',
      },
      on: {
        change: this.onFileChange,
        ...this.$listeners,
      },
    } as VNodeData;
  }

  onFileChange (e) {
    this.$emit('fileChange', e.target.files);
    e.target.value = null;
  }
}
