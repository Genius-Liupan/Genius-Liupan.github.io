/**
 *  Date    : 2020/3/24
 *  Author  : CastileMan
 *  Declare : 置顶
 */
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import classNames from 'classnames';

import './ScrollTop.scss';

export default function ScrollTop() {
  const [isVisible, setIsVisible] = useState(checkIsVisible);
  const [bottom, setBottom] = useState(50);

  useEffect(() => {
    function handleScroll() {
      setIsVisible(checkIsVisible());
      setBottom(checkIsBottom() ? 110 : 50);
    }
    window.addEventListener('scroll', handleScroll, false);

    return () => {
      window.removeEventListener('scroll', handleScroll, false);
    }
  }, []);

  const handleClick = useCallback(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }, []);

  const bottomREM = useMemo(() => `${bottom / 100}rem`, [bottom]);

  return (
    <div
      className={classNames("ScrollTop cursor-pointer transition-all", isVisible ? 'fade-in' : 'fade-out')}
      onClick={handleClick}
      style={{
        bottom: bottomREM
      }}
    >
      <i className="ic ic-right text-white" />
    </div>
  )
}

function checkIsVisible() {
  return (window.pageYOffset || window.scrollY) > window.innerHeight;
}

function checkIsBottom() {
  return (window.pageYOffset || window.scrollY) > (document.documentElement.scrollHeight || document.body.scrollHeight) - 1000;
}
