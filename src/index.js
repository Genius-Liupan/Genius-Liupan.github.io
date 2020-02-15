import React from 'react';

import App from '@/app/app';
import routes from '@/routes';

import * as serviceWorker from './serviceWorker';

const app = new App();

app
  // .setModels([])
  .setRoutes(routes)
  .render(document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();


export default app;