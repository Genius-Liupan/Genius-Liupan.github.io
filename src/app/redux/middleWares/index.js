/**
 *  Date    : 2019/4/26
 *  Author  : CastileMan
 *  Declare : middleWares
 */

'use strict';
import ReduxThunk from 'redux-thunk';

import promiseMiddleWare from './promise';

export default [
  ReduxThunk,
  promiseMiddleWare
];
