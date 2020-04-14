/**
 *  Date    : 2020/1/28
 *  Author  : CastileMan
 *  Declare : index
 */
import Others from './Others';

export default {
  path: 'others',
  component: Others,
  redirect: '/inbetweening',
  getChildren: () => [
    require('./inbetweening'),
    require('./ip'),
    require('./hmi'),
  ]
};