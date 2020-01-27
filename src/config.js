/**
 *  Date    : 2019/4/26
 *  Author  : CastileMan
 *  Declare : config
 */

'use strict';
const NODE_ENV = process.env.NODE_ENV;

// dev or production mode
const mode = {
  dev: NODE_ENV === 'development',
  production: NODE_ENV === 'production'
};

export default {
  mode
}