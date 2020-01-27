/**
 *  Date    : 2019/11/9
 *  Author  : CastileMan
 *  Declare : 对createRouter进行封装，集成 breadcrumb 和 indexRoute 等功能
 */
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import _createRouter from '@wtdc/feed-router';

import Breadcrumb from '@/components/Breadcrumb';
import { NOOP } from '@/constants/common';

export function createRouter(props) {
  const { onEnter, breadcrumb } = props;

  return _createRouter({
    ...props,
    getComponent: ComponentWrap(props),
    onEnter: function(locationState, history, cb) {
      const { match } = locationState;

      // 配置面包屑
      if(breadcrumb) {
        Breadcrumb.append({
          ...breadcrumb,
          match
        });
      }

      // 针对内部onEnter参数数量逻辑进行相应处理
      if(typeof onEnter === 'function') {
        onEnter(locationState, history, cb);

        if(onEnter.length < 3) {
          cb();
        }
      } else {
        cb();
      }
    }
  });
}

// 封装默认子路由跳转逻辑
function ComponentWrap({ getComponent, getChildRoutes = NOOP, beforeRender = NOOP }) {
  const childRoutes = getChildRoutes() || [];
  const indexRoute = childRoutes.find((childRoute) => childRoute.default);

  return () => (props) => {
    const { history, match: { isExact, url }} = props;
    // 如果配置默认子路由，跳转至默认子路由
    if(indexRoute && isExact) {
      window.setTimeout(() => {
        history.replace(`${url.replace(REMOVE_TAIL_SLASH_REG, '')}/${indexRoute.path.replace(REMOVE_HEAD_SLASH_REG, '')}`);
      }, 0);
    }

    beforeRender();

    const Component = getComponent();
    return <Component {...props} />;
  };
}

const REMOVE_TAIL_SLASH_REG = /\/$/;
const REMOVE_HEAD_SLASH_REG = /^\//;

/**
 * location change hook
 * @param callback
 */
export function useLocationChange(callback = NOOP) {
  const location = useLocation();
  useEffect(() => {
    callback(location);
  }, [location]);

  return location;
}