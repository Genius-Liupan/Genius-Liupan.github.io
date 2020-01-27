/**
 *  Date    : 2019/8/24
 *  Author  : CastileMan
 *  Declare : optimize
 */

/**
 * 防抖函数
 * @param func
 * @param delay
 */
export function debounce(func, delay = 100) {
  let timer = null;

  return (...args) => {
    // 当delay等于0时，取消debounce，改为同步执行该方法
    if(delay === 0) {
      return func(...args);
    }

    window.clearTimeout(timer);
    timer = window.setTimeout(() => {
      func(...args);
    }, delay);
  }
}

/**
 * 节流函数，在指定周期内最多只执行一次函数
 * @param func<Function>: 要节流的函数
 * @param interval<Number>: 节流周期
 */
export function throttle(func, interval = 500) {
  let last = 0;
  let timer = null;
  return function(...args) {
    const now = Date.now();
    const diff = now - last;
    window.clearTimeout(timer);

    const execute = () => {
      last = now;
      func(...args);
    };

    if(diff >= interval) {
      execute();
    } else {
      timer = window.setTimeout(() => {
        timer = null;
        execute();
      }, interval - diff);
    }
  }
}