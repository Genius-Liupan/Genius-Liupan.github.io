/**
 *  Date    : 2019/8/23
 *  Author  : CastileMan
 *  Declare : constants
 */


export function preventDefault(event) {
  if(!event) return;
  event.preventDefault();
  event.stopPropagation();
}

export function objectWithoutProperties(obj, keys) {
  const target = {};
  for (let key in obj) {
    if (!Object.prototype.hasOwnProperty.call(obj, key)) continue;
    if (keys.indexOf(key) >= 0) continue;
    target[key] = obj[key];
  }
  return target;
}