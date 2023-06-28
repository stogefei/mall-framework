import { BFile } from './index';

const extname = (url = '') => {
  const temp = url.split('/');
  const filename = temp[temp.length - 1];
  const filenameWithoutSuffix = filename.split(/#|\?/)[0];
  return (/\.[^./\\]*$/.exec(filenameWithoutSuffix) || [''])[0];
};

const isImageFileType = (type) => !!type && type.indexOf('image/') === 0;

export const isImageFile = (file) => {
  if (isImageFileType(file.type)) {
    return true;
  }
  const name = file.name;
  const extension = extname(name);

  if (/(webp|svg|png|gif|jpg|jpeg|jfif|bmp|dpg|ico)$/i.test(extension)) {
    return true;
  }

  if (extension) {
    // other file types which have extension
    return false;
  }
  return false;
};
export function getSize(size: number) {
  if (size > 1024 * 1024 * 1024) {
    return (size / (1024 * 1024 * 1024)).toFixed(2) + 'G';
  } else if (size > 1024 * 1024) {
    return (size / (1024 * 1024)).toFixed(2) + 'M';
  } else if (size > 1024) {
    return (size / 1024).toFixed(2) + 'KB';
  } else {
    return size + 'B';
  }
}
export function getFileIcon(file: BFile) {
  const suffix = file.name.split('.')[1];
  let icon;
  let image;

  if (isImageFile(file)) {
    const fileUrl = file.file ? window.URL.createObjectURL(file.file) : null;
    image = fileUrl || file.thumbUrl || file.url;
  } else {
    if (suffix) {
      switch (suffix.toLocaleLowerCase()) {
        case 'doc':
        case 'docx':
          icon = 'word-file';
          break;
        case 'exl':
        case 'exlx':
          icon = 'excel-file';
          break;
        case 'ppt':
        case 'pptx':
          icon = 'ppt-file';
          break;
        case 'zip':
        case 'rar':
          icon = 'zip-file';
          break;
        case 'txt':
          icon = 'text-file';
          break;
        case 'pdf':
          icon = 'pdf-file';
          break;
        case 'mp3':
          icon = 'music-file';
          break;
        case 'mp4':
          icon = 'video-file';
          break;
        default:
          icon = 'unkown-file';
          break;
      }
    }
  }
  return {
    image,
    icon,
  };
}
