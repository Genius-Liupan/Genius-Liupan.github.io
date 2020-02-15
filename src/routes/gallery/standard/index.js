/**
 *  Date    : 2020/1/28
 *  Author  : CastileMan
 *  Declare : index
 */
import Standard from './Standard';

export default {
  path: 'standard',
  component: Standard,
  redirect: '/pc',
  getChildren: () => [
    require('./pc'),
    require('./mobile')
  ]
};