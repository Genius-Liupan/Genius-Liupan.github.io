/**
 *  Date    : 2019/9/4
 *  Author  : CastileMan
 *  Declare : redux相关utils
 */

import { useMemo } from 'react';
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';

import { NOOP } from '@/constants/common';
import models from '@/models';

/**
 * 通过getter获取bindded actions
 * @param getter<Function>
 * @returns {*}
 */
export function useActions(getter = NOOP) {
  const dispatch = useDispatch();
  return useMemo(() => getter(getActions(dispatch)), []);
}

function getActions(dispatch) {
  if(!getActions._actions) {
    return models.reduce((actions, model) => {
      const { namespace, actions: modelActions } = model;
      if(modelActions) {
        actions[namespace] = bindActionCreators(modelActions, dispatch);
      }
      return actions;
    }, {});
  }

  return getActions._actions;
}
