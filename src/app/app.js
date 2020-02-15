/**
 *  Date    : 2019/4/27
 *  Author  : CastileMan
 *  Declare : app
 */

'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import { Switch } from "react-router-dom";
import { bindActionCreators } from 'redux';
import { Provider } from 'react-redux';

import createStore from "./redux/createStore";
import middleWares from './redux/middleWares';
import Context from './redux/context';
import createHistory from './router/createHistory';

export default class App {
  constructor(options = {}) {
    this._routes = null;
    this._models = [];
    this._actions = {};
    this._store = null;

    const { history } = options;
    this.history = createHistory(history);
  }

  setRoutes(routes) {
    this._routes = routes;
    return this;
  }

  setModels(models = [], extraMiddleWares = []) {
    this._models = models;
    this._store = createStore(this._models, [...middleWares, ...extraMiddleWares]);

    // bind dispatch to actions
    this._actions = this._models.reduce((actions, model) => {
      const {namespace, actions: branchActions = {}} = model;
      actions[namespace] = bindActionCreators(branchActions, this._store.dispatch);

      return actions;
    }, {});
    return this;
  }

  getStore() {
    if(this._store) {
      return this._store;
    } else {
      throw new Error('store is not ready yet, you need to set the models first.');
    }
  }

  render(container) {
    if(!this._routes) {
      throw new Error('you need to set the routes before render().')
    }

    const routes = (
      <Router history={this.history}>
        <Switch>
          {this._routes}
        </Switch>
      </Router>
    );

    let content = routes;
    if(this._store) {
      content = (
        <Provider store={this._store}>
          <Context.Provider value={this._actions}>
            {routes}
          </Context.Provider>
        </Provider>
      )
    }

    ReactDOM.render(content, container);
  }
}
