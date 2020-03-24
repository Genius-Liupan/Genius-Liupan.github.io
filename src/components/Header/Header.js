/**
 *  Date    : 2020/1/28
 *  Author  : CastileMan
 *  Declare : Header
 */


'use strict';
import React, { useState, useEffect, useRef } from 'react';
import classNames from 'classnames';
import Clipboard from 'clipboard';

import Link from '@/components/Link';
import Message from '@/components/Message';
import PAGE from "@/constants/page";

import './Header.scss';

export default function Header() {
  const [translateY, setTranslateY] = useState(0);
  const [isTop, setIsTop] = useState(true);
  const headerRef = useRef(null);

  useEffect(() => {
    let lastScrollY = null;
    let headerHeight = 0;

    function handleScroll() {
      const scrollY = window.scrollY || window.pageYOffset;
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

      setIsTop(scrollY === 0);
    }

    function handleResize() {
      headerHeight = headerRef.current.clientHeight;
    }

    window.addEventListener('scroll', handleScroll , false);
    window.addEventListener('resize', handleResize , false);

    return () => {
      window.removeEventListener('scroll', handleScroll , false);
      window.removeEventListener('resize', handleResize , false);
    }
  }, []);

  // 复制邮箱
  useEffect(() => {
    const clipboard = new Clipboard('#emailCopyBtn');

    clipboard.on('success', function() {
      Message.success({
        content: '邮箱地址已复制到剪贴板',
        icon: <i className="ic ic-round-fill-success mr5 text-primary" />
      });
    });

    return () => {
      clipboard.destroy();
    }
  }, []);

  return (
    <div
      ref={headerRef}
      className={classNames('Header', { top: isTop })}
      style={{
        transform: `translateY(${translateY}px)`
      }}
    >
      <div className="dashboard-header-container">
        <div className="flex1">
          <Link to={PAGE.HOME}>
          <span className="header-title">
            <i className="ic ic-logo mr10" />
            Panda个人网站
          </span>
          </Link>
        </div>

        <span
          id="emailCopyBtn"
          className="contact-me cursor-pointer f16"
          title="点击复制邮箱"
          data-clipboard-text="panda583457602@gmail.com"
        >
          <i className="ic ic-email f14" />
          联系邮箱
        </span>
      </div>
    </div>
  )
}

