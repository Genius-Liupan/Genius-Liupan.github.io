/**
 *  Date    : 2020/1/28
 *  Author  : CastileMan
 *  Declare : index
 */
import { route } from '@/app';

import App from './App';

export default route({
  path: '/',
  component: App,
  getChildren: () => [
    require('./gallery')
  ]
});