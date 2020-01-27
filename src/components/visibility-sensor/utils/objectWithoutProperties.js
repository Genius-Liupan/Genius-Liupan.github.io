/**
 *  Date    : 2019/8/24
 *  Author  : CastileMan
 *  Declare : objectWithoutProperties
 */

export default function objectWithoutProperties(obj, keys) {
  const target = {};
  for (let key in obj) {
    if (!Object.prototype.hasOwnProperty.call(obj, key)) continue;
    if (keys.indexOf(key) >= 0) continue;
    target[key] = obj[key];
  }
  return target;
}
