/**
 *  Date    : 2019/11/10
 *  Author  : CastileMan
 *  Declare : Scrollbars
 */
import React, { useEffect, useRef } from 'react';
import { Scrollbars as SourceScrollbars } from 'react-custom-scrollbars';

import { NOOP } from '@/constants/common';

export default function Scrollbars(props) {
  const { forwardRef = NOOP, ...rest } = props;

  const scrollbarsRef = useRef(null);

  // 解决scrollbars首次渲染无法正确获取内容宽高的问题
  useEffect(() => {
    const timer = window.setTimeout(() => {
      try {
        const scrollbars = scrollbarsRef.current;
        scrollbars.update();
        scrollbars.showTracks();
        scrollbars.hideTracks();
      } catch(e) {
        console.error(e);
      }
    }, 1000);

    return () => {
      window.clearTimeout(timer);
    };
  }, []);

  // 获取 scrollbars 实例
  function getRef(ref) {
    forwardRef(ref);
    scrollbarsRef.current = ref;
  }

  return (
    <SourceScrollbars
      ref={getRef}
      {...rest}
    >
      { props.children }
    </SourceScrollbars>
  );
}

Scrollbars.defaultProps = {
  autoHide: true
};