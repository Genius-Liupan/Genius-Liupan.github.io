/**
 *  Date    : 2020/1/28
 *  Author  : CastileMan
 *  Declare : index
 */
import Mobile from './Mobile';

export default {
  path: 'mobile',
  component: Mobile,
  redirect: '/h5',
  getChildren: () => [
    require('./h5'),
    require('./app')
  ]
};