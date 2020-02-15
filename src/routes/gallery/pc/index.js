/**
 *  Date    : 2020/1/28
 *  Author  : CastileMan
 *  Declare : index
 */
import PC from './PC';

export default {
  path: 'pc',
  component: PC,
  redirect: '/rays',
  getChildren: () => [
    require('./rays'),
    require('./reconstitution'),
    require('./erp'),
    require('./editor'),
  ]
};