/**
 *  Date    : 2019/8/26
 *  Author  : CastileMan
 *  Declare : offsetFormatter
 */

export default function offsetFormatter(offset, size) {
  const _offset = offset || 0;
  const { width = 0, height = 0 } = size;
  let top = _offset;
  let left = _offset;
  let right = _offset;
  let bottom = _offset;

  if(typeof _offset === 'object') {
    top = _offset.top;
    left = _offset.left;
    right = _offset.right;
    bottom = _offset.bottom;
  }

  return {
    top: formatter(top, height),
    left: formatter(left, width),
    right: formatter(right, width),
    bottom: formatter(bottom, height)
  };
};

function formatter(offset, basis = 0) {
  let _offset = 0;
  if(typeof offset === 'number') {
    _offset = offset;
  } else {
    const num = percent2num(offset);
    // percent offset
    if(!Number.isNaN(num)) {
      _offset = num * basis;
    }
  }

  return _offset;
}

function percent2num(percent = '') {
  if(typeof percent === 'string' && percent.length > 1 && percent.endsWith('%')) {
    let number = +(percent.slice(0, -1));
    if(!Number.isNaN(number)) {
      return number / 100;
    }
  }

  return NaN;
}
