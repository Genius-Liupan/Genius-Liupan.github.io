/**
 *  Date    : 2020/2/5
 *  Author  : CastileMan
 *  Declare : DesignCategory
 */

import React, { useState, useCallback } from 'react';
import classNames from 'classnames';

import FadeVisibilitySensor from '@/components/FadeVisibilitySensor';
import Img from '@/components/Img';
import Link from '@/components/Link';
import { HOME_CATEGORY_ICON_PRODUCT, HOME_CATEGORY_ICON_INBETWEENING, HOME_CATEGORY_ICON_IP, HOME_CATEGORY_CONTENT_PRODUCT, HOME_CATEGORY_CONTENT_INBETWEENING, HOME_CATEGORY_CONTENT_IP } from "@/constants/static";
import PAGE from "@/constants/page";

import './DesignCategory.scss';

export default function DesignCategory(props) {
  const { history } = props;

  const [index, setIndex] = useState(0);

  const isMobile = window.innerWidth <= 414;

  const handleCategoryClick = useCallback((category) => {
    if(isMobile) {
      history.push(category.link);
    }
  }, []);

  const handleCategoryBtnClick = useCallback((category) => {
    if(!isMobile) {
      history.push(category.link);
    }
  }, []);

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
                      <Link to={category.link}>
                        <Img
                          src={category.image}
                          className="design-category-slider-image"
                          intervalCheck
                        />
                      </Link>
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
                    onClick={() => handleCategoryClick(category)}
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
                        onClick={() => handleCategoryBtnClick(category)}
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
    desc: '为国家电网基建行业设计的一款阅读学习类APP，从前期调研、原型确立、出效果图，整个产品实现流程下来都是独立完成。',
    image: HOME_CATEGORY_CONTENT_PRODUCT,
    link: PAGE.APP
  },
  {
    index: 1,
    iconPic: HOME_CATEGORY_ICON_INBETWEENING,
    title: '插画设计',
    desc: '在闲暇时也会记录灵感，保持着对世界的好奇心与创造力，多练习才能将感性的思维表达得更加具体。',
    image: HOME_CATEGORY_CONTENT_INBETWEENING,
    link: PAGE.INBETWEENING
  },
  {
    index: 2,
    iconPic: HOME_CATEGORY_ICON_IP,
    title: '网页设计/IP形象设计',
    desc: 'IP形象的设计要在品牌调性的基础上做延伸，才能保持统一的视觉语言，减少形象复杂度，增加识别度。',
    image: HOME_CATEGORY_CONTENT_IP,
    link: PAGE.IP
  },
];
