import API, { ResponseCode } from '@amaz/api';
import Generator from '@amaz/utils/src/generator';
import { isImageFile } from './utils';
import { getUser } from '../user';
import ImageUtils from '../image';
// import Vue from 'vue';

export * from './utils';
/**
 * intend 准备中
 * queue 上传队列中
 * uploading 上传中
 * complete 已完成
 * error 错误
 */
export enum FileStatus {
  INTEND = 'intend',
  UPLOADING = 'uploading',
  QUEUE = 'queue',
  COMPLETE = 'complete',
  ERROR = 'error',
}
export interface BFile {
  id?: string;
  progress?: number;
  status?: FileStatus;
  file?: File;
  size?: number;
  name?: string;
  type?: string;
  thumbUrl?: string;
  url?: string;

  data?: any;

  error?: string;

  [key: string]: any;
}

export interface UploadParams {
  files?: BFile[];
  // 上传线程数量
  threads?: number;
  // 上传类型
  type?: 'picture' | 'file';

  // 上传文件类型
  accept?: string;

  // 是否自动上传
  auto?: boolean;
  // 最大上传数量
  max?: number;
  // 上传参数

  formData?: { [key: string]: any };
  maxSize?: number;

  message?: any;

  // 是否是公开的

  public?: boolean;

  addFileBefore?: (file: File) => boolean;
  success?: (data: any, file: BFile) => void;

  error?: (message: string, file: BFile) => void;
}
class Upload implements UploadParams {
  // 上传线程数量
  threads: number = 3;

  // 是否自动上传
  auto = true;
  // 上传参数

  formData: { [key: string]: any };

  accept: string = '';

  type?: 'picture' | 'file';

  maxSize: number = 0;

  max = 0;

  // 上传的文件
  files: BFile[] = [];

  // 上传队列
  uploadQueue: BFile[] = [];

  public: boolean = false;

  message = {
    error(msg) {},
    success(msg) {},
  };

  addFileBefore?: (file: BFile) => boolean;

  success: (file: BFile) => void;

  error: (message: string, file: BFile) => void;

  uploadingThreads = 0;

  constructor(params?: UploadParams) {
    if (params) {
      this.setConfig(params);
    }
  }

  setConfig(params: UploadParams) {
    Object.assign(this, params);

    if (this.files) {
      this.files.forEach((file) => {
        if (!file.id) {
          // Vue.set(file, 'id', Generator.uuid(8));
        }
        if (!file.status) {
          // Vue.set(file, 'status', FileStatus.COMPLETE);
        }
        if (file.status === FileStatus.COMPLETE) {
          // Vue.set(file, 'url', ImageUtils.getImageUrl(file.id));
          // Vue.set(file, 'thumbUrl', ImageUtils.getThumbImageUrl(file.id));
        }
      });
    }
  }

  checkFile(file: BFile) {
    if (this.type === 'picture' && !isImageFile(file)) {
      this.message.error(
        '不是图片格式, 请选择webp, svg, png, gif, jpg, jpeg, jfif, bmp, dpg, ico格式。',
      );
      return false;
    }
    if (!file.name.includes('.')) {
      this.message.error('文件必须带有后缀名称。例如：.txt');
      return false;
    }
    if (this.maxSize && file.size > this.maxSize) {
      let tipText;
      if (this.maxSize / 1024 > 1000) {
        tipText = (this.maxSize / 1024 / 1024).toFixed(2) + 'MB';
      } else {
        tipText = (this.maxSize / 1024).toFixed(0) + 'KB';
      }
      this.message.error(`文件操作限制大小，最大只能上传${tipText}`);
      return false;
    }
    if (this.accept) {
      const suffix = file.name.split('.')[1];
      if (!this.accept.includes(suffix)) {
        this.message.error(`文件类型必须是${this.accept}。`);
        return false;
      }
    }
    return true;
  }

  addFiles(files: File[]) {
    if (this.max && this.files.length + files.length > this.max) {
      this.message.error(`上传文件数量超出限制，最大上传数量为${this.max}个。`);
      return;
    }
    if (files && files.length) {
      for (let index = 0; index < files.length; index++) {
        const file = files[index];

        const nFile: BFile = {
          id: Generator.uuid(8),
          file,
          size: file.size,
          name: file.name,
          type: file.type,
          status: (file as any).status || FileStatus.INTEND,
          progress: 0,
        };
        if (
          !this.checkFile(nFile) ||
          (this.addFileBefore && this.addFileBefore(nFile) === false)
        ) {
          return;
        }

        if (this.auto) {
          nFile.status = FileStatus.QUEUE;
          this.uploadQueue.push(nFile);
          this.uploading();
        }
        this.files.push(nFile);
      }
    }
  }

  deleteFile(id: string) {
    const fileIndex = this.files.findIndex((oFile) => oFile.id === id);
    if (fileIndex > -1) {
      this.files.splice(fileIndex, 1);
    }
    const queueFileIndex = this.uploadQueue.findIndex(
      (oFile) => oFile.id === id,
    );
    if (queueFileIndex > -1) {
      this.uploadQueue.splice(queueFileIndex, 1);
    }
  }

  uploadFile(id: string) {
    const file = this.files.find((oFile) => oFile.id === id);
    if (file) {
      file.status = FileStatus.QUEUE;
      this.uploadQueue.push(file);
      this.uploading();
    }
  }

  pauseFile(id: string) {
    const queueFileIndex = this.uploadQueue.findIndex(
      (oFile) => oFile.id === id,
    );
    console.log('pauseFile', id, queueFileIndex);

    if (queueFileIndex > -1) {
      // Vue.set(this.uploadQueue[queueFileIndex], 'status', FileStatus.INTEND);
      // Vue.set(this.uploadQueue[queueFileIndex], 'progress', 0);
      this.uploadQueue.splice(queueFileIndex, 1);
    }
  }

  reloadFile(id?: string) {
    if (id) {
      const file = this.files.find((oFile) => oFile.id === id);

      if (file && file.file instanceof File) {
        file.status = FileStatus.QUEUE;
        file.progress = 0;
        this.uploadQueue.push(file);
      }
    } else {
      const files = this.files.filter(
        (oFile) => oFile.status === FileStatus.INTEND,
      );
      if (files && files.length) {
        files.forEach((file) => {
          file.status = FileStatus.QUEUE;
        });
        this.uploadQueue.push(...files);
      }
    }
    this.uploading();
  }

  uploading() {
    if (
      (this.threads === 0 || this.uploadingThreads < this.threads) &&
      this.uploadQueue.length
    ) {
      const file = this.uploadQueue.shift();
      this.uploadingThreads++;
      file.status = FileStatus.UPLOADING;
      let pormise;
      if (this.public) {
        pormise = API.documentFileController.upload;
      } else {
        pormise = API.documentFileController.uploadFile;
      }
      pormise(file.file, undefined, {
        onUploadProgress: (e) => {
          var percent = Math.floor((e.loaded / e.total) * 100);
          file.progress = percent;
        },
      })
        .then((data) => {
          if (data.code === ResponseCode.SUCCESS) {
            const user = getUser();
            file.status = FileStatus.COMPLETE;
            file.id = data.data.id;
            file.createTime = data.data.createTime;
            file.creator = user.name;
            file.suffix = data.data.suffix;
            file.url = ImageUtils.getImageUrl(file.id);
            file.thumbUrl = ImageUtils.getThumbImageUrl(file.id);
            this.success && this.success(file);
          } else {
            file.status = FileStatus.ERROR;
            file.error = data.msg;
            this.error && this.error(data.msg, file);
          }
        })
        .catch((e) => {
          file.status = FileStatus.ERROR;
          file.error = e.message;
          this.error && this.error(e.message, file);
        })
        .finally(() => {
          this.uploadingThreads--;
          this.uploading();
        });
    }
  }
}

export default Upload;
