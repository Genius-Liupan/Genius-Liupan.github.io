/**
 *  Date    : 2020/2/5
 *  Author  : CastileMan
 *  Declare : DesignCategory
 */

import React, { useState } from 'react';
import classNames from 'classnames';

import VisibilitySensor from '@/components/visibility-sensor';
import inbetweening_png from '@/assets/images/home/inbetweening.png';
import product_png from '@/assets/images/home/product.png';
import ip_png from '@/assets/images/home/ip.png';

import './DesignCategory.scss';

export default function DesignCategory() {
  return (
    <div className="DesignCategory">
      <div className="dashboard-content">
        {
          CATEGORY_LIST.map((category, index) => {
            return (
              <div className="design-category-item clearfix" key={index}>
                <img
                  className="design-category-picture left"
                  src={category.picture}
                  alt=""
                />

                <div className="design-category-info clearfix">
                  <div className="design-category-title">{category.title}</div>
                  <div className="design-category-desc">{category.desc}</div>
                  <span className="check-detail-btn transition-bg-color right text-center cursor-pointer">立即查看</span>
                </div>
              </div>
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
    picture: product_png,
    title: '产品设计',
    desc: '关于基建行业的阅读学习类APP，从前期调研、原型确立、设计初稿、出效果图，整个流程下来都是自身独立完成。'
  },
  {
    index: 1,
    picture: inbetweening_png,
    title: '插画设计',
    desc: '从小就热爱绘画，工作后逐渐转向设计，也是和艺术相关，梦想是人机与艺术相结合，为用户做出一点细微贡献。'
  },
  {
    index: 2,
    picture: ip_png,
    title: '网页设计/IP形象设计',
    desc: '也会做一些企业的官方体验网站，但涉及量不多，还有IP形象设计也会涉及到。'
  },
];