/**
 *  Date    : 2019/8/26
 *  Author  : CastileMan
 *  Declare : getBoundingClientRect
 */

export default function getBoundingClientRect(el, offset = {}) {
  let rect = {};

  // for window container
  if(el === window) {
    rect = {
      top: 0,
      left: 0,
      bottom: window.innerHeight || document.documentElement.clientHeight,
      right: window.innerWidth || document.documentElement.clientWidth
    };
  } else {
    const _rect = el.getBoundingClientRect();
    if(typeof _rect.toJSON === 'function') {
      rect = _rect.toJSON();
    } else {  // for ie & edge
      rect = DIRECTIONS.reduce((obj, direction) => obj[direction] = _rect[direction], {});
    }
  }

  DIRECTIONS.forEach((direction) => {
    if(POSITIVE_DIRECTIONS.includes(direction)) {
      rect[direction] += offset[direction] || 0;
    } else {
      rect[direction] -= offset[direction] || 0;
    }
    rect[direction] = Math.floor(rect[direction]);
  });
  rect.width = rect.right - rect.left;
  rect.height = rect.bottom - rect.top;
  return rect;
};

const DIRECTIONS = ['left', 'top', 'right', 'bottom'];
const POSITIVE_DIRECTIONS = ['top', 'left'];