/**
 *  Date    : 2019/4/26
 *  Author  : CastileMan
 *  Declare : createStore
 */
import {createStore, applyMiddleware, combineReducers, compose} from 'redux';

import config from '@/config';

const INIT_STATE = window.__initState__ || {};

const mode = config.mode;

/**
 * 创建store
 * @param models
 * @param middleWares 通过中间件强化 store create
 * @param initState 初始数据，做同构使用
 * @returns {object}
 */
export default function(models, middleWares = [], initState = INIT_STATE) {
  const rootReducer = {};
  const reducersMap = {};
  models.forEach((model) => {
    const {namespace, state: initialState, reducers} = model;
    reducersMap[namespace] = reducers;
    rootReducer[namespace] = function(state = initialState, action) {
      let matchedReducer = null;
      // action.type 格式为 namespace/actionType
      const [reducerNamespace, actionType] = action.type.split('/');
      // action from redux
      if(action.type.includes('@@')) {
        return state;
      }
      else if(reducerNamespace && actionType) {
        try {
          matchedReducer = reducersMap[reducerNamespace][actionType];
        } catch (err) {
          // 不存在的命名空间
          throw new Error(`Mismatched namespace: '${reducerNamespace}'`);
        }
      }
      // 提示格式错误
      else {
        throw new Error(`Invalid action type: '${action.type}', expected string like 'namespace/actionType'`);
      }

      if(matchedReducer) {
        return matchedReducer(state, action);
      } else {
        // 不存在对应reducer的action type
        throw new Error(`Mismatched action type: '${action.type}'`);
      }
    }
  });

  // redux devtools
  let composeEnhancers = compose;
  if (mode.dev) {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  }

  return createStore(
    combineReducers(rootReducer),
    initState,
    composeEnhancers(applyMiddleware(...middleWares))
  );
};
