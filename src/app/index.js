/**
 *  Date    : 2019/4/27
 *  Author  : CastileMan
 *  Declare : index
 */

'use strict';
import App from './app';
import connect from './redux/connect';
import useActions from './redux/useActions';
import route from './router/route';
import lazy from './router/lazy';

export default App;

export {
  connect,
  useActions,
  route,
  lazy
};
