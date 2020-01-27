/**
 *  Date    : 2019/4/27
 *  Author  : CastileMan
 *  Declare : route
 */
import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import shortid from 'shortid';

export default function route(config = {}) {
  const {path = null, component: Component, exact = false, strict = false, sensitive = false} = config;

  return (
    <Route path={path} exact={exact} strict={strict} sensitive={sensitive} key={shortid()}>
      {
        ({match, ...props}) => (
          // 路由匹配才渲染
          match && (
            // 配置有组件则渲染组件，没有则渲染children
            Component ?
              <Component match={match} {...props}>
                {getChildren(config)}
              </Component>
              :
              getChildren(config)
          )
        )
      }
    </Route>
  );
}


function formatPathname(pathname = '') {
  // 替换冗余的slash
  return pathname.replace(/\/{2}/g, '/');
}

function getChildren(config) {
  const {path, switchChildren = true, redirect, children, getChildren} = config;
  const ChildrenWrapper = switchChildren ? Switch : React.Fragment;
  return (
    <ChildrenWrapper>
      {redirect && <Redirect exact from={path} to={formatPathname(path + redirect)} />}
      {children || (typeof getChildren === 'function' && getChildren().map(getComponent))}
    </ChildrenWrapper>
  );
}

function getComponent(module) {
  if(module && module.__esModule) {
    return module.default;
  } else {
    return module;
  }
}