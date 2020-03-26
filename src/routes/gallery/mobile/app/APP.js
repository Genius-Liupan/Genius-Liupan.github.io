/**
 *  Date    : 2020/2/13
 *  Author  : CastileMan
 *  Declare : APP
 */
import React from 'react';

import Gallery from '@/routes/gallery/components/Gallery';
import {
  GALLERY_MOBILE_APP_BASE,
  GALLERY_MOBILE_APP_READER,
  GALLERY_MOBILE_APP_EDITOR,
  GALLERY_MOBILE_APP_BASE_DETAIL
} from "@/constants/static";

import './APP.scss';

export default function APP() {
  return (
    <Gallery
      className="APP"
      {...RAYS_DATA}
    />
  )
}

const COMMON_PROPS = {
  display: 'inline-block',
  className: 'mb30',
  aspect: 1.78
};

const RAYS_DATA = {
  desc: (
    <React.Fragment>
      <p>着重介绍第一款APP：<b>基建Online</b>。</p>
      <p><b>项目背景：</b>服务国家电网公司基建专业技术人员的，一款方便阅读的学习及考试的移动互联网平台。</p>
      <p><b>产品定位：</b>本项目的定位是，成为电力基建专业领域最具影响力的学习型APP，成为国家电网公司加强安全、质量、依法合规管理的平台和主阵地。因此基建Online APP专业性较强，主要是要突出功能性和学习性。UI设计简洁大方、具有时代感和亲和力的展示和应用前端，交互方便、参与度高的学习系统。</p>
      <p><b>用户需求：</b>供基建从业人员使用，专业性较强。</p>
      <p><b>设计思路：</b>对于国家电网这样的传统行业来说，APP的整体风格需要与企业品牌调性相符，因此用了logo与主色都从国家电网的基础品牌中延伸而来。同时在风格的设定上也以清晰简约为主，突出核心知识内容，同时为了减少学习过程来了压力与焦虑，在一些细节上加入了情感化的文字与插画设计，形成统一的视觉语言与品牌特征。</p>
    </React.Fragment>
  ),
  itemProps: COMMON_PROPS,
  content: [
    {
      title: '基建Online',
      pictureList: GALLERY_MOBILE_APP_BASE,
      itemProps: {
        aspect: 2.165
      },
      // extra: () => (
      //   <a
      //     className="block text-center" href={GALLERY_MOBILE_APP_BASE_DETAIL}
      //     target="_blank"
      //     style={{
      //       margin: '.5rem auto 1rem'
      //     }}
      //   >
      //     <span
      //       className="btn btn-primary f16"
      //       style={{
      //         padding: ".12rem .3rem",
      //         borderRadius: 0
      //       }}
      //     >
      //       查看完整展示图，效果更佳
      //     </span>
      //   </a>
      // )
    },
    {
      title: '读者APP',
      pictureList: GALLERY_MOBILE_APP_READER
    },
    {
      title: '编辑APP',
      pictureList: GALLERY_MOBILE_APP_EDITOR
    }
  ]
};
