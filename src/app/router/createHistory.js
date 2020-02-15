/**
 *  Date    : 2020/2/14
 *  Author  : CastileMan
 *  Declare : createHistory
 */
import React from 'react';
import {createBrowserHistory} from "history";

export default function createHistory(options = {}) {
  const history = createBrowserHistory(options);

  history.listen((location, action) => {
    if(['PUSH', 'REPLACE'].includes(action)) {
      document.documentElement.scrollTop = 0;
    }
  });

  return history;
}