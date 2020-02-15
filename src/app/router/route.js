/**
 *  Date    : 2019/4/27
 *  Author  : CastileMan
 *  Declare : route
 */
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import shortid from 'shortid';

export default function route(config = {}) {
  const {path = null, component: Component, exact = false, strict = false, sensitive = false} = config;

  return (
    <Route path={path} exact={exact} strict={strict} sensitive={sensitive} key={shortid()}>
      {
        ({match, ...props}) => {
          // 路由匹配才渲染
          if(!match) return null;

          return (
            <React.Fragment>
              {
                // 配置有组件则渲染组件
                Component ?
                  <Component match={match} {...props}>
                    {getChildren(config)}
                  </Component>
                  :
                  getChildren(config)
              }
            </React.Fragment>
          );
        }
      }
    </Route>
  );
}

function getChildren(config) {
  const {path, switchChildren = true, redirect, children, getChildren} = config;
  const ChildrenWrapper = switchChildren ? Switch : React.Fragment;

  return (
    <ChildrenWrapper>
      {redirect && <Redirect exact from={path} to={concatPath(path, redirect)} />}
      {
        children || (
          typeof getChildren === 'function' && getChildren().map((module) => {
            const childConfig = getComponent(module);
            return route(Object.assign({}, childConfig, {
              path: concatPath(path, childConfig.path)
            }));
          })
        )
      }
    </ChildrenWrapper>
  );
}

function renderRedirect(config) {
  const {path, redirect} = config;
  return (
    <Redirect exact from={path} to={concatPath(path, redirect)} />
  )
}

function concatPath(base = '', path = '') {
  base = base.replace(/\/$/, '');
  path = path.replace(/^\//, '');
  return base + '/' + path;
}

function getComponent(module) {
  if(module && module.__esModule) {
    return module.default;
  } else {
    return module;
  }
}