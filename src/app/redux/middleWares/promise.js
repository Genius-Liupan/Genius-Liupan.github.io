/**
 *  Date    : 2019/4/26
 *  Author  : CastileMan
 *  Declare : promise middleWare
 */

'use strict';

export default store => next => action => {
  const {type, promise, success = ONLY_RETURN, fail, complete = ONLY_RETURN, payloadFormatter = ONLY_RETURN, ...rest} = action;
  const dispatch = store.dispatch;
  console.log('promise', action);
  if(promise) {
    return promise
      .then((res = {}) => {
        const payload = payloadFormatter(res);
        // 有type才dispatch
        if(type) {
          // 调用下一个中间件
          next({
            type,
            payload,
            ...rest
          });
        }

        // promise resolved, call the success callback
        success(payload, dispatch);
      })
      .catch(err => {
        // promise rejected, call the fail callback
        if(typeof fail === 'function') {
          fail(err, dispatch);
        } else {
          // throw the error
          return Promise.reject(err);
        }
      })
      .finally(() => {
        complete(dispatch);
      });
  } else {
    return next({
      type,
      ...rest
    });
  }
};

const ONLY_RETURN = _ => _;
