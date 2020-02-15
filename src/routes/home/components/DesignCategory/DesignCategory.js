/**
 *  Date    : 2020/2/5
 *  Author  : CastileMan
 *  Declare : DesignCategory
 */

import React, { useState } from 'react';
import classNames from 'classnames';

import FadeVisibilitySensor from '@/components/FadeVisibilitySensor';
import Img from '@/components/Img';
import { HOME_CATEGORY_ICON_PRODUCT, HOME_CATEGORY_ICON_INBETWEENING, HOME_CATEGORY_ICON_IP, HOME_CATEGORY_CONTENT_PRODUCT, HOME_CATEGORY_CONTENT_INBETWEENING, HOME_CATEGORY_CONTENT_IP } from "@/constants/static";
import PAGE from "@/constants/page";

import './DesignCategory.scss';

export default function DesignCategory(props) {
  const { history } = props;

  const [index, setIndex] = useState(0);
  return (
    <div className="DesignCategory">
      <div className="website-center-container pos-rel">
        <FadeVisibilitySensor>
          <div className="design-category-slider-container pos-abs">
            <ul
              className="design-category-slider"
              style={{
                height: `${CATEGORY_LIST.length}00%`,
                transform: `translateY(${-100 / CATEGORY_LIST.length * index}%)`
              }}
            >
              {
                CATEGORY_LIST.map((category, categoryIndex) => {
                  const active = index === categoryIndex;
                  return (
                    <li
                      className={classNames("design-category-slider-item", { active })}
                      style={{
                        height: `${100 / CATEGORY_LIST.length}%`
                      }}
                      key={categoryIndex}
                    >
                      <Img
                        src={category.image}
                        className="design-category-slider-image"
                        intervalCheck
                      />
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </FadeVisibilitySensor>

        {
          CATEGORY_LIST.map((category, categoryIndex) => {
            const active = index === categoryIndex;
            return (
              <FadeVisibilitySensor key={categoryIndex}>
                <div className="design-category-item-wrap">
                  <div
                    className={classNames("design-category-item clearfix", { active })}
                    onMouseEnter={() => setIndex(categoryIndex)}
                  >
                    <Img
                      className="design-category-picture left"
                      src={category.iconPic}
                    />

                    <div className="design-category-info clearfix">
                      <div className="design-category-title">{category.title}</div>
                      <div className="design-category-desc">{category.desc}</div>
                      <span
                        className="check-detail-btn transition-bg-color right text-center cursor-pointer"
                        onClick={() => history.push(category.link)}
                      >
                        立即查看
                      </span>
                    </div>
                  </div>
                </div>
              </FadeVisibilitySensor>
            )
          })
        }
      </div>
    </div>
  )
};


const CATEGORY_LIST = [
  {
    index: 0,
    iconPic: HOME_CATEGORY_ICON_PRODUCT,
    title: '产品设计',
    desc: '关于基建行业的阅读学习类APP，从前期调研、原型确立、设计初稿、出效果图，整个流程下来都是自身独立完成。',
    image: HOME_CATEGORY_CONTENT_PRODUCT,
    link: PAGE.APP
  },
  {
    index: 1,
    iconPic: HOME_CATEGORY_ICON_INBETWEENING,
    title: '插画设计',
    desc: '从小就热爱绘画，工作后逐渐转向设计，也是和艺术相关，梦想是人机与艺术相结合，为用户做出一点细微贡献。',
    image: HOME_CATEGORY_CONTENT_INBETWEENING,
    link: PAGE.INBETWEENING
  },
  {
    index: 2,
    iconPic: HOME_CATEGORY_ICON_IP,
    title: '网页设计/IP形象设计',
    desc: '也会做一些企业的官方体验网站，但涉及量不多，还有IP形象设计也会涉及到。',
    image: HOME_CATEGORY_CONTENT_IP,
    link: PAGE.IP
  },
];