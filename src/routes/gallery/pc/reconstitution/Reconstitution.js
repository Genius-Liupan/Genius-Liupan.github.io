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
  desc: '重构系统是有设计发起的一个项目，设计于2018年，主要是为了视觉与交互的改版，由于不涉及运营与市场，紧急度并不高，因此目前还在开发中。整个的重构主要目的是让整体视觉与控件统一，突出核心内容，操作与用户体验放在第一位。',
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
