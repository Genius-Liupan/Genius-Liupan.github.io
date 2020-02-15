/**
 *  Date    : 2020/1/28
 *  Author  : CastileMan
 *  Declare : index
 */
import GalleryHome from './GalleryHome';

export default {
  path: 'gallery',
  component: GalleryHome,
  redirect: '/pc',
  getChildren: () => [
    require('./pc'),
    require('./standard'),
    require('./mobile'),
    require('./others')
  ]
};