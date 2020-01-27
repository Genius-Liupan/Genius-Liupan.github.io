/**
 *  Date    : 2019/10/17
 *  Author  : CastileMan
 *  Declare : 文件相关 utils
 */
import FileSaver from 'file-saver';

import { FILE_EXT } from '@/constants/common';
import Utils from '@/utils/utils';

/**
 * 获取文件类型
 */
export function getFileType(fileName) {
  const ext = getFileExt(fileName);
  return Object.keys(FILE_EXT).find(type => FILE_EXT[type].includes(ext));
}

/**
 * file size to string
 * @param size
 * @returns {string}
 */
export function size2string(size = 0) {
  let strSize = '';
  if(size > 1024 * 1024 * 1024) {
    strSize = Utils.toFixed(size / 1024 / 1024 / 1024, 2) + 'G';
  } else if(size > 1024 * 1024) {
    strSize = Utils.toFixed(size / 1024 / 1024, 2) + 'M';
  } else if(size > 1024) {
    strSize = Utils.toFixed(size / 1024, 2) + 'K';
  } else {
    strSize = size + 'B';
  }
  return strSize;
}

// 获取文件后缀名
export function getFileExt(fileName = '') {
  const index = fileName.lastIndexOf('.');
  if(index > 0) {
    fileName = fileName.toLowerCase();
    return fileName.substring(index + 1);
  }
  return '';
}

// 去除文件名中的后缀名
export function getFileName(fileName = '') {
  const ext = getFileExt(fileName);
  if(ext) {
    return fileName.slice(0, -(ext.length + 1));
  }
  return fileName;
}

// 保存文件
export function saveFile(url = '', name = '') {
  name = name.trim();
  const ext = getFileExt(url) || 'png';
  let fileName = name;
  if(ext) {
    fileName += `.${ext}`;
  }
  return FileSaver.saveAs(url, fileName);
}

// 把文件转换成可读URL
export function getObjectURL(file) {
  let url = null;
  if(window.createObjectURL !== undefined) {        // basic
    url = window.createObjectURL(file);
  } else if(window.URL !== undefined) {             // mozilla(firefox)
    url = window.URL.createObjectURL(file);
  } else if(window.webkitURL !== undefined) {       // webkit or chrome
    url = window.webkitURL.createObjectURL(file);
  }
  return url;
}
