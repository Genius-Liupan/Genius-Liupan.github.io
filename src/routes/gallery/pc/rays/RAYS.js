/**
 *  Date    : 2020/2/12
 *  Author  : CastileMan
 *  Declare : RAYS
 */
import React from 'react';

import Gallery from '@/routes/gallery/components/Gallery';
import { GALLERY_PC_RAYS_ADVISER_LOGIN, GALLERY_PC_RAYS_ADVISER_HOME, GALLERY_PC_RAYS_ADVISER_APP, GALLERY_PC_RAYS_MERCHANT_HOME, GALLERY_PC_RAYS_CHANNEL_WECHAT } from "@/constants/static";

export default function RAYS() {
  return (
    <Gallery
      className="RAYS"
      {...RAYS_DATA}
    />
  )
}

const COMMON_PROPS = {
  display: 'block',
  className: 'mb30',
  aspect: 0.56
};

const RAYS_DATA = {
  desc: (
    <React.Fragment>
      <p>
        <b>项目背景：</b>RAYS系统，该产品是B2C的商业模式主要为出版社打造现代纸书，挖掘更多的知识付费途径，为读者提供更多的学习资源。B端主要分为5个角色，不同的角色进入到不同后台系统，作者-内容生产者、编辑-内容生产与维护、运营-商城运营、出版-审核内容、平台-数据管控。主要服务的是编辑系统，由编辑配置书刊增值内容到二维码上，读者通过扫码或分享来获取服务。
      </p>
      <p>
        <b>服务人群：</b>出版社的内容生产者为主，年龄在30-45岁之间。
      </p>
      <p>
        <b>设计理念：</b>通过每个角色业务需求给对应的角色系统定义不同的主色，虽然是B端的设计，商业的需求是功能与视觉同时兼备，整体风格清新明了，突出内容与功能的同时要有品牌特征与统一的视觉规范。
      </p>
      <p>具体了解可以通过RAYS体验网站：<a href="https://rays.5rs.me/index.html">https://rays.5rs.me</a>。</p>
    </React.Fragment>
  ),
  itemProps: COMMON_PROPS,
  content: [
    {
      title: '编辑端',
      pictureList: [GALLERY_PC_RAYS_ADVISER_LOGIN, {
        src: GALLERY_PC_RAYS_ADVISER_HOME,
        itemProps: {
          aspect: 0.58
        }
      }, GALLERY_PC_RAYS_ADVISER_APP],
    },
    {
      title: '作者端',
      pictureList: [GALLERY_PC_RAYS_MERCHANT_HOME],
    },
    {
      title: '作者端',
      pictureList: [GALLERY_PC_RAYS_CHANNEL_WECHAT],
      itemProps: {
        aspect: 0.65
      }
    }
  ]
};
