const Utils = {
  isNotEmpty(value) {
    switch (typeof value) {
      case 'undefined': {
        return false;
      }

      case 'string': {
        return value.length !== 0;
      }

      case 'object': {
        if(Array.isArray(value)) {
          return value.length !== 0;
        } else if(value === null) {
          return false;
        } else {
          return Object.keys(value).length !== 0;
        }
      }

      default: {
        return true;
      }
    }
  },

  isEmpty(value) {
    return (value === undefined || value === null || value === '');
  },

  json2params(json, slice = '&') {
    return Object.keys(json).reduce((acc, item) => {
      return String(acc) + item + '=' + json[item] + slice;
    }, '').slice(0, -1);
  },

  params2json(params = '', slice = '&') {
    return params.split(slice).reduce((acc, item) => {
      let arr = item.split('=');
      return { ...acc, ...{ [arr[0]]: arr[1] }};
    }, {});
  },
  // 将查询对象转换为查询字符串
  formatQuery2QueryStr(query = {}) {
    let queryStr = '';
    const filteredQuery = Utils.filterMerge(query);
    if(Utils.isNotEmpty(filteredQuery)) {
      queryStr = '?' + Utils.json2params(filteredQuery);
    }
    return queryStr;
  },
  timeFormat(time = 0) {
    let hours,
      minutes,
      seconds;
    let intTime = Math.floor(time);
    hours = Math.floor(intTime / 3600);
    minutes = Math.floor(intTime / 60 % 60);
    seconds = intTime % 60;
    return {
      hours: hours,
      minutes: (minutes > 9) ? minutes : '0' + minutes,
      seconds: (seconds > 9) ? seconds : '0' + seconds
    };
  },
  browser() {
    const ua = navigator.userAgent.toLowerCase();
    return {
      ios: !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/i),
      android: ua.indexOf('android') > -1 || ua.indexOf('linux') > -1,
      iPad: ua.indexOf('ipad') > -1,
      wechat: ua.toLowerCase().indexOf('micromessenger') > -1,
      aliPay: ua.toLowerCase().indexOf('alipay') > -1
    };
  },

  toFixed(num = 0, len = 0) {
    let result = '',
      level = 3,
      [tempNum, tail] = `${num}`.split('.'),
      showText = false;
    if(num >= 1000000) {
      showText = true;
      let tempCount = (num / 10000).toFixed(2);
      [tempNum, tail] = `${tempCount}`.split('.');
    }
    const padEnd = (str, len = 2, padString = 0) => {
      str = str.slice(0, len);
      while(str.length < len) {
        str += padString;
      }
      return str;
    };
    if(!len) {
      tail = tail ? padEnd(tail) : '00';
      tempNum = (tempNum || 0).toString();
      while(tempNum.length > level) {
        result = ',' + tempNum.slice(-level) + result;
        tempNum = tempNum.slice(0, tempNum.length - level);
      }
      if(tempNum) {
        result = tempNum + result;
      }
      return `${result}.${tail}${showText ? '万' : ''}`;
    } else {
      if(typeof num !== 'number') {
        num = Number(num);
      }
      return num.toFixed(len);
    }
  },

  size2string(size = 0) {
    let strSize = '';
    if(size > 1024 * 1024 * 1024) {
      strSize = this.toFixed(size / 1024 / 1024 / 1024) + 'G';
    } else if(size > 1024 * 1024) {
      strSize = this.toFixed(size / 1024 / 1024) + 'M';
    } else if(size > 1024) {
      strSize = this.toFixed(size / 1024) + 'K';
    } else {
      strSize = size + 'B';
    }
    return strSize;
  },

  //截取字符串
  cutString(str = '', len, type = '...') {
    if(str.length > len) {
      return str.slice(0, len) + type;
    } else return str;
  },

  getDate(time) {
    if(time && !(Number(time) > 0)) {
      let [tDate, tTime] = time.split(' ');
      tDate = tDate.replace(/[^\d]/g, '/');
      time = tTime ? `${tDate} ${tTime}` : `${tDate}`;
    }
    const d = time ? new Date(time) : new Date();
    return {
      Y: d.getFullYear(),
      M: d.getMonth(),
      W: d.getDay(), //周几
      D: d.getDate(),
      h: d.getHours(),
      min: d.getMinutes(),
      s: d.getSeconds(),
      ms: d.getMilliseconds()
    };
  },

  /**
   * 格式化时间
   * 用"YY","MM","DD","hh","mm","ss"分别表示年、月、日、时、分、秒  (如 YY-MM-DD hh:mm:ss)
   * @param {Date} date 待格式化的时间
   * @param {String} format 格式： example: YY-MM-DD YY/MM/DD
   * @returns {String} 格式化后的时间
   */
  dateFormat(date, format = 'YY-MM-DD') {
    const _date = Utils.getDate(date);
    const _newDate = {
      YY: String(_date.Y),
      MM: String(_date.M + 1).padStart(2, '0'),
      DD: String(_date.D).padStart(2, '0'),
      hh: String(_date.h).padStart(2, '0'),
      mm: String(_date.min).padStart(2, '0'),
      ss: String(_date.s).padStart(2, '0')
    };

    return format.replace(DATE_FORMAT_REG, function(match, p) {
      return _newDate[p];
    });
  },

  /**
   * 获取 指定日期 n 天以前/以后的日期
   * @param {Date} theDate 开始日期
   * @param {Number} nDays 日期差：正数为往后，负数为往前
   * @param {String} format 格式化参数: YY MM DD hh mm ss
   */
  getTheDate(theDate = null, nDays = 0, format = 'YY-MM-DD') {
    const _date = theDate ? +new Date(theDate) : Date.now();
    const newDate = _date + nDays * 86400000;
    return Utils.dateFormat(newDate, format);
  },

  date2string(date, gap = '-', requireTime = false, requireDate = true) {
    let tempObj = Utils.getDate(date);
    for(let key in tempObj) {
      if(key === 'M') {
        tempObj[key]++;
      }
      tempObj[key] = `${tempObj[key]}`.padStart(2, '0');
    }
    const { Y, M, D, h, min, s } = tempObj;
    const Dd = `${Y}${gap}${M}${gap}${D}`,
      T = `${h}:${min}:${s}`;
    let result = requireDate ? `${Dd} ` : '';
    requireTime && (result += T);
    return result.trim();
  },

  arr2Tree(arr = [], id, parentId, children, descent = '', path = 'path') {   //path: 父节点id路径, //descent: 所有子孙id
    let result = [],
      hash = {},
      i = 0,
      j = 0,
      len = arr.length;
    for(; i < len; i++) {
      hash[arr[i][id]] = arr[i];
    }
    for(; j < len; j++) {
      let aVal = arr[j],
        hashVP = hash[aVal[parentId]];
      !aVal[children] && (aVal[children] = []);
      !aVal[path] && (aVal[path] = []);
      descent && !aVal[descent] && (aVal[descent] = []);
      if(hashVP) {
        !hashVP[children] && (hashVP[children] = []);
        aVal[path] = (hashVP[path] || []).concat(hashVP[id]);
        if(descent) {
          aVal[path].forEach((item) => {
            hash[item][descent].push(aVal[id]);
          });
        }
        hashVP[children].push(aVal);
      } else {
        result.push(aVal);
      }
    }
    return result;
  },

  /**
   * https://help.aliyun.com/document_detail/50039.html?spm=5176.doc31848.6.750.BrFGlG
   * @param src
   * @param ratio 图片缩放比例 0-1
   * @param effect 图片处理效果例如{resize:'w_100,h_100'}
   * @returns {string}
   */
  getImg(src = '', ratio = 0.6, effect = {}) {
    const handleOssImg = (url = '', ratio, effects = {}) => {
      const TYPE = 'image',
        EFFECTSKEY = 'x-oss-process';
      let baseUrl = url;
      let queryStr = '';
      let query = {};
      let queryIndex = url.indexOf('?');
      let effectsStr = '';
      if(queryIndex > -1) {
        baseUrl = url.slice(0, queryIndex);
        queryStr = url.slice(queryIndex + 1);
      }
      if(queryStr) {
        query = Utils.params2json(queryStr);
      }
      if(query[EFFECTSKEY]) {
        effectsStr = query[EFFECTSKEY];
      }
      const str2actions = (actionsStr = effectsStr) => {
        let actionsArr = actionsStr.split('/');
        let actions = {};
        if(actionsArr.length > 1) {
          actionsArr.slice(1).forEach((item = '') => {
            let keyIndex = item.indexOf(',');
            let key = item.slice(0, keyIndex),
              value = item.slice(keyIndex + 1);
            actions[key] = value;
          });
        }
        return actions;
      };
      const actions2str = (actions = {}) => {
        let str = '';
        for(let key in actions) {
          str += `/${key},${actions[key]}`;
        }
        return str;
      };

      if(ratio > 0) {
        ratio = ratio >= 1 ? 1 : ratio;
        Object.assign(effects, {
          resize: `p_${Math.round(ratio * 100)}`
        });
      }
      if(Object.keys(effects).length) {
        let resultActions = `${TYPE}${actions2str(Object.assign({}, str2actions(), effects))}`;
        if(effectsStr) {
          let reg = new RegExp(effectsStr, 'g');
          return url.replace(reg, resultActions);
        } else {
          return `${baseUrl}?${Utils.json2params(Object.assign({}, query, {
            [EFFECTSKEY]: resultActions
          }))}`;
        }
      } else {
        return url;
      }
    };
    if(src && src.indexOf('/oss/') > -1) {
      return handleOssImg(src, ratio, effect);
    } else {
      return src;
    }
  },

  /**
   * 先合并，再过滤对象中的空属性，使用方法类似于Object.assign
   * @param args
   * @returns {{}}
   */
  mergeFilter(...args) {
    const object = Object.assign(...args);
    return Object.keys(object).reduce((obj, key) => {
      const value = object[key];
      if(Utils.isNotEmpty(value) && value !== 'undefined') {
        obj[key] = value;
      }
      return obj;
    }, {});
  },
  /**
   * 先过滤对象中的空属性，再合并，使用方法类似于Object.assign，不对第一个参数做修改，而是将结果作为新的对象返回
   * @param args
   * @returns {{}}
   */
  filterMerge(...args) {
    return Object.assign.apply(null, args.map((object) => {
      return Object.keys(object).reduce((obj, key) => {
        const value = object[key];
        if(Utils.isNotEmpty(value) && value !== 'undefined') {
          obj[key] = value;
        }
        return obj;
      }, {});
    }));
  },
  isJSONString(string = '') {
    if(typeof string === 'string') {
      try {
        JSON.parse(string);
        return true;
      } catch(e) {
        return false;
      }
    }
    return false;
  },
  //格式化数据
  formatNum(num) {
    if(num) {
      if(num >= 10000) {
        return Utils.round(num / 10000, 2) + '万';
      } else {
        return num;
      }
    } else {
      return 0;
    }
  },
  /**
   * 链接拼参数
   * @param url 可以是带query的也可以是不带的
   * @param params 拼的参数对象
   * @returns {string}
   */
  padQuery(url = '', params = {}) {
    const [pathname, queryStr] = url.split('?');
    let tempQuery = Utils.filterMerge(Object.assign({}, Utils.params2json(queryStr), Utils.filterMerge(Object.assign({}, params))));
    let searchQuery = Utils.formatQuery2QueryStr(tempQuery);
    return `${pathname}${searchQuery}`;
  },
  padStart(num = '', bit = 2, pad = '0') {
    num = String(num);
    if(num.padStart) {
      return num.padStart(bit, pad);
    } else {
      while(num.length < bit) {
        num = String(pad) + num;
      }
      return num;
    }
  },
  //浮点数相加
  accAdd: (arg1, arg2) => {
    let r1,
      r2,
      m;
    try {
      r1 = arg1.toString().split('.')[1].length;
    } catch(e) {
      r1 = 0;
    }
    try {
      r2 = arg2.toString().split('.')[1].length;
    } catch(e) {
      r2 = 0;
    }
    m = Math.pow(10, Math.max(r1, r2));
    return Math.round(arg1 * m + arg2 * m) / m;
  },
  //浮点数相减
  accSub: (arg1, arg2) => {
    return Utils.accAdd(arg1, -arg2);
  },
  /**
   * 获取阿里云原始文件
   * @param url
   * @returns {string}
   */
  getOriginFile(url = '') {
    if(typeof url === 'string' && url.indexOf('//oss') > -1) {
      return url.replace('//oss', '//file');
    } else {
      return url;
    }
  },
  // 四舍五入，精确到x位小数
  round(num, x = 0) {
    if(Number.isNaN(Number(num))) {
      return num;
    }
    return Math.round(num * Math.pow(10, x)) / Math.pow(10, x);
  },
  client() {
    const u = navigator.userAgent;
    return {
      webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
      mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
      ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
      android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端
      iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器
      iPad: u.indexOf('iPad') > -1, //是否iPad
      ie: window.ActiveXObject || 'ActiveXObject' in window,
      wechat: u.indexOf('MicroMessenger') > -1 //是否微信 （2015-01-22新增）
    };
  },
  /**
   * 比较时间
   * @param start
   * @param end
   */
  compareTime(start = '', end = '') {
    if(start && end) {
      const getTimeMs = (timeStr = '') => {
        let temp = typeof timeStr === 'string' ? timeStr.replace(/-/g, '/') : timeStr;
        return Number(new Date(temp));
      };
      return getTimeMs(end) > getTimeMs(start);
    } else {
      console.error('参数不能为空');
    }
  },
  // 文件是否为阿里云文件
  isOSSFile(url) {
    return url.indexOf('/oss/') >= 0;
  },
  /**
   * 节流函数，在指定周期内最多只执行一次函数
   * @param func<Function>: 要节流的函数
   * @param interval<Number>: 节流周期
   */
  throttle(func, interval = 500) {
    let last = 0;
    let timer = null;
    return function(...args) {
      const now = Date.now();
      const diff = now - last;

      const execute = () => {
        last = now;
        func(...args);
      };

      if(diff >= interval) {
        window.clearTimeout(timer);
        execute();
      } else {
        window.clearTimeout(timer);
        timer = window.setTimeout(() => {
          timer = null;
          execute();
        }, interval - diff);
      }
    };
  },

  // 防止函数连续调用
  valve(func) {
    let operating = false;
    const reset = () => operating = false;
    return (...args) => {
      if(operating) return null;
      operating = true;
      return func(reset)(...args);
    };
  },

  /**
   * 删除对象的一些属性
   * @param obj
   * @param fields
   * @returns {{}}
   */
  omit(obj, fields = []) {
    let shallowCopy = { ...obj };
    for(let i = 0; i < fields.length; i++) {
      let key = fields[i];
      delete shallowCopy[key];
    }
    return shallowCopy;
  },

  // 秒转化为时分秒
  getTimeStr(s) {
    if(!s) {
      return '--';
    }
    const hour = Math.floor(s / 3600);
    const minute = Math.floor(s % 3600 / 60);
    const second = s % 3600 % 60;
    let str = '';
    if(hour > 0) {
      str += `${hour}小时`;
    }
    if(minute > 0) {
      str += `${minute}分`;
    }
    str += `${second}秒`;
    return str;
  },

  //柱状图、折线图、区域图
  CommonChart(arr = [], axisKey, keys, customFunc) {
    const values = [[]], axis = [];
    let axisSort = [];
    if(!arr.length) {
      return {
        values: [[]],
        axis: [],
        axisSort: []
      };
    }
    if(typeof (keys) === 'string') {
      keys = [keys];
    }
    if(!Array.isArray(keys)) {
      return;
    }
    if(arr.length > 0) {
      arr.forEach((item, i) => {
      //自定义数据处理方法
        if(customFunc) {
          item = customFunc(item, i);
        }
        keys.forEach((keyItem, i) => {
          if(!Array.isArray(values[i])) {
            values[i] = [];
          }
          values[i].push(Number(item[keyItem]) || 0);
        });
        axis.push(item[axisKey] || '未知');
      });
      let newArr = arr.map(item => {
        let sum = 0;
        keys.forEach((keyItems) => {
          sum += item[keyItems];
        });
        return Object.assign({}, item, { sum });
      });
      newArr.sort(function(a, b) {
        return b.sum - a.sum;
      });
      newArr.forEach(item => {
        item.sum && axisSort.push(item[axisKey] || '未知');
      });
      return {
        values,
        axis,
        axisSort
      };
    }
  },

  isSupportWebp() {
    if(Utils.isSupportWebp.isSupported !== void 0) return Utils.isSupportWebp.isSupported;
    try {
      Utils.isSupportWebp.isSupported = document
        .createElement('canvas')
        .toDataURL('image/webp', 0.5)
        .indexOf('data:image/webp') === 0;
    } catch(err) {
      Utils.isSupportWebp.isSupported = false;
    }

    return Utils.isSupportWebp.isSupported;
  }
};

export default Utils;

// dateFormat 方法中，匹配日期格式
const DATE_FORMAT_REG = /(YY|MM|DD|hh|mm|ss)/g;
