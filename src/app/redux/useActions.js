/**
 *  Date    : 2020/1/28
 *  Author  : CastileMan
 *  Declare : useActions
 */
import { useContext, useMemo } from 'react';

import context from "./context";

export default function useActions(selector) {
  const actions = useContext(context);

  return useMemo(() => {
    return selector(actions)
  }, [actions]);
};
