/**
 *  Date    : 2019/9/4
 *  Author  : CastileMan
 *  Declare : 常用hooks
 */
import { useState, useEffect, useCallback, useRef, useContext, useMemo } from 'react';
import { useSelector } from 'react-redux';
import shortid from '@wtdc/shortid';

import { useActions } from '@/utils/redux';
import { useLocationChange } from '@/utils/router';
import Context from '@/routes/heals/context';

/**
 * 用于刷新数据，通过调用 setRefreshKey 来更改 refreshKey，
 * 从而触发获取数据的 effect钩子 再执行一次，达到刷新数据的目的
 *
 * @returns [refreshKey, updateRefreshKey]
 */
export function useRefreshKey() {
  // key for refresh
  const [refreshKey, setRefreshKey] = useState(null);

  const updateRefreshKey = useCallback(() => {
    setRefreshKey(shortid());
  }, []);

  return [refreshKey, updateRefreshKey];
}

/**
 * 对数据的id进行匹配
 */
export function useDataMatcher(id) {
  const cacheRef = useRef(id);
  const matcherRef = useRef({
    isMatch: cacheRef.current === id,
    update: (_id) => {
      cacheRef.current = _id;
      matcherRef.current.isMatch = cacheRef.current === _id;
    }
  });

  useEffect(() => {
    matcherRef.current.isMatch = cacheRef.current === id;
  }, [id]);

  return matcherRef.current;
}

// 使用全局context
export function useHEALSContext() {
  return useContext(Context);
}

/**
 *  获取疾病标签列表or科室标签列表
 * @param options
 * @returns {*}
 */
export function useLabelList(options = {}) {
  const { typeCode = '', padStart = false, emptyLabel = '请选择' } = options;

  const actions = useActions(({ content }) => ({ content }));

  const optionsList = useSelector(state => state.content[({
    DEPARTMENT: 'deptLabelList',
    DISEASES: 'diseaseLabelList'
  })[typeCode]]);

  return useMemo(() => {
    if(optionsList.length === 0) {
      if(typeCode === 'DEPARTMENT') {
        actions.content.getDeptLabelList();
      }
      if(typeCode === 'DISEASES') {
        actions.content.getDiseaseLabelList();
      }
    }

    let result = optionsList;

    // 根据 padStart 和 emptyLabel 进行拼接
    if(padStart) {
      result = [{
        value: '',
        label: emptyLabel
      }].concat(optionsList);
    }

    return result;

  }, [optionsList, typeCode, padStart, emptyLabel]);
}

/**
 * 获取当前科室信息
 * @returns {*}
 */
export function useDepartment() {
  const { userDeptList, departmentId } = useSelector(state => state.user);
  return useMemo(() => {
    return userDeptList.find((dept) => dept.departmentId === departmentId) || {};
  }, [userDeptList, departmentId]);
}

export { useActions };

export { useLocationChange };
