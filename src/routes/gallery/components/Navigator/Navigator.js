/**
 *  Date    : 2020/3/21
 *  Author  : CastileMan
 *  Declare : 画廊导航
 */
import React, { useState, useMemo } from 'react';
import { useLocation } from 'react-router';
import classNames from 'classnames';

import Link from '@/components/Link';

import galleryRoutes from './galleryRoutes';

import './Navigator.scss';

export default function Navigator() {
  const [hoverIndex, setHoverIndex] = useState(null);

  const location = useLocation();

  const currentRouteTitle = useMemo(() => {
    const activeRoute = galleryRoutes.find(route => location.pathname.startsWith(route.link));
    if(activeRoute) {
      const activeChild = activeRoute.children.find(child => location.pathname === child.link);
      if(activeChild) {
        return activeChild.title;
      }
    }

    return null;
  }, [location]);

  return (
    <div className="GalleryNavigator">
      {
        galleryRoutes.map((route, index) => {
          const { title, link, children = [] } = route;
          const active = location.pathname.startsWith(link);
          const isHover = hoverIndex === index;
          let displayTitle = title;
          if(active && !isHover) {
            displayTitle = currentRouteTitle;
          }
          return (
            <div
              className={classNames('gallery-route', { active })}
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
              key={index}
            >
              <div className="gallery-route_title transition-all f18 text-white text-center">
                {displayTitle}
                <i className="ic ic-right inline-block" />
              </div>
              <div className="gallery-route_children f16">
                {
                  children.map((child) => {
                    const { title, link } = child;
                    const active = location.pathname.startsWith(link);
                    return (
                      <Link disabled={active} to={link} key={link}>
                        <div className={classNames('gallery-route_children-item', { active })}>
                          <div className="gallery-route_children-item_title">{title}</div>
                        </div>
                      </Link>
                    )
                  })
                }
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

