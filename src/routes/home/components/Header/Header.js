/**
 *  Date    : 2020/1/28
 *  Author  : CastileMan
 *  Declare : Header
 */

'use strict';
import React, { useState, useEffect, useRef } from 'react';

import './Header.scss';

export default function DashboardHeader() {
  const [translateY, setTranslateY] = useState(0);
  const headerRef = useRef(null);

  useEffect(() => {
    let lastScrollY = null;
    let headerHeight = 0;

    function handleScroll() {
      const scrollY = window.scrollY;
      if(!lastScrollY) {
        lastScrollY = scrollY;
        headerHeight = headerRef.current.clientHeight;
        return;
      }
      const diff = scrollY - lastScrollY;
      lastScrollY = scrollY;

      setTranslateY(y => {
        y = y - diff;
        y = Math.max(y, -headerHeight);
        y = Math.min(y, 0);
        return y;
      });
    }

    window.addEventListener('scroll', handleScroll , false);

    return () => {
      window.removeEventListener('scroll', handleScroll , false);
    }
  }, []);

  return (
    <div
      ref={headerRef}
      className="DashboardHeader"
      style={{
        transform: `translateY(${translateY}px)`
      }}
    >
      <div className="dashboard-header-container">
        <span className="header-title">
          <i className="ic ic-logo mr10" />
          Panda的个人网站
        </span>
      </div>
    </div>
  )
}

