/**
 *  Date    : 2019/11/26
 *  Author  : CastileMan
 *  Declare : storage
 */

const LocalStorage = window.localStorage;

export default {
  set: (key, value) => {
    LocalStorage.setItem(key, value);
  },

  get: (key) => {
    return LocalStorage.getItem(key) || '';
  },

  remove: (key) => {
    return LocalStorage.removeItem(key);
  },

  clear: () => {
    return LocalStorage.clear();
  }
};
