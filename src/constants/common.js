/**
 *  Date    : 2019/11/5
 *  Author  : CastileMan
 *  Declare : 通用常量
 */

// 环境标识
export const ENV = {
  DEV: 'DEV',
  TEST: 'TEST',
  UAT: 'UAT',
  PRO: 'PRO'
};

// 随访单题目类型
export const FOLLOW_SUBJECT_TYPE = {
  RADIO: 1,     // 单选
  CHECKBOX: 2,  // 多选
  TEXTAREA: 3  // 问答
};

export const TOKEN = 'TOKEN';

export const EMPTY_PAGE_BEAN = {
  recordList: []
};

//表图数据初始值
export const EMPTY_CHART_DATA = {
  values: [[]],
  axis: [],
  axisSort: []
};

export const NOOP = () => {};   // 无操作，常用于props缺省值
export const JUST_RETURN = _ => _;    // 直接返回
export const RETURN_EMPTY_OBJECT = () => ({});    // 返回空对象，常用于connect传递空的mapStateToProps
export const PREVENT_DEFAULT = event => event.preventDefault();
export const STOP_PROPAGATION = event => event.stopPropagation();

export const FILE_TYPE = {
  AUDIO: 'AUDIO',
  VIDEO: 'VIDEO',
  IMAGE: 'IMAGE',
  EXCEL: 'EXCEL',
  PDF: 'PDF',
  WORD: 'WORD',
  PPT: 'PPT',
  ZIP: 'ZIP',
  TXT: 'TXT'
};

export const FILE_EXT = {
  [FILE_TYPE.AUDIO]: ['mp3', 'wav', 'aac', 'wma', 'ape', 'amr'],
  [FILE_TYPE.VIDEO]: ['mp4', 'mkv', 'mpg', 'avi', 'asx', 'mov', 'flv', 'rm', 'wmv', 'rmvb'],
  [FILE_TYPE.IMAGE]: ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'swf', 'tiff', 'psd', 'svg', 'webp'],
  [FILE_TYPE.EXCEL]: ['csv', 'xls', 'xlsx', 'xlsm', 'xltm', 'xlam'],
  [FILE_TYPE.PDF]: ['pdf'],
  [FILE_TYPE.WORD]: ['doc', 'docx'],
  [FILE_TYPE.PPT]: ['ppt', 'pptx'],
  [FILE_TYPE.ZIP]: ['zip', 'rar'],
  [FILE_TYPE.TXT]: ['txt']
};
