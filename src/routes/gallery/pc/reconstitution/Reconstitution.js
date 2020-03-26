/**
 *  Date    : 2020/2/13
 *  Author  : CastileMan
 *  Declare : RAYS重构
 */
import React from 'react';

import Gallery from '@/routes/gallery/components/Gallery';
  import {
  GALLERY_PC_RAYS_RECON_ADVISER_LOGIN,
  GALLERY_PC_RAYS_RECON_ADVISER_APP,
  GALLERY_PC_RAYS_RECON_ADVISER_BOOK,
  GALLERY_PC_RAYS_RECON_ADVISER_RESOURCE, GALLERY_PC_RAYS_RECON_MERCHANT_LOGIN, GALLERY_PC_RAYS_RECON_AGENT_LOGIN
} from "@/constants/static";

export default function Reconstitution() {
  return (
    <Gallery
      className="Reconstitution"
      {...DATA}
    />
  )
}

const COMMON_PROPS = {
  display: 'block',
  className: 'mb30',
  aspect: 0.56
};

const DATA = {
  desc: (
    <React.Fragment>
      <p><b>项目背景：</b>重构系统是由设计与产品一同发起的一个自主优化型项目，重构主要目的是让整体视觉与控件统一，突出核心内容，用户体验与商业价值的实现放在第一位。</p>
      <p><b>优化点：</b></p>
      <ol>
        <li>1.在功能上做了很大减法，减去不必要的功能干扰，突出核心内容。</li>
        <li>2.在色彩上依旧保持原始象征色系，去掉辅色，主色颜色明度提高，使整体气氛更加清新明亮，减少视觉干扰与压力。</li>
        <li>3.在规范上语言更加统一，无论是从交互上还是视觉上，在可复用的组件基础上进行优化与迭代，减少开发成本的同时最大限度的统一设计语言。</li>
      </ol>
    </React.Fragment>
  ),
  itemProps: COMMON_PROPS,
  content: [
    {
      title: '编辑端',
      pictureList: [GALLERY_PC_RAYS_RECON_ADVISER_LOGIN, GALLERY_PC_RAYS_RECON_ADVISER_APP, GALLERY_PC_RAYS_RECON_ADVISER_BOOK, GALLERY_PC_RAYS_RECON_ADVISER_RESOURCE],
    },
    {
      title: '作者端',
      pictureList: [GALLERY_PC_RAYS_RECON_MERCHANT_LOGIN],
    },
    {
      title: '出版端',
      pictureList: [GALLERY_PC_RAYS_RECON_AGENT_LOGIN],
    }
  ]
};
