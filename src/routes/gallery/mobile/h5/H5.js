/**
 *  Date    : 2020/2/13
 *  Author  : CastileMan
 *  Declare : H5
 */
import React from 'react';

import Gallery from '@/routes/gallery/components/Gallery';
import {
  GALLERY_MOBILE_H5_LISTEN, GALLERY_MOBILE_H5_SHARE, GALLERY_MOBILE_H5_SKILLS,
  GALLERY_MOBILE_H5_STROKES, GALLERY_MOBILE_H5_OTHERS
} from "@/constants/static";

import './H5.scss';

export default function H5() {
  return (
    <Gallery
      className="H5"
      {...RAYS_DATA}
    />
  )
}

const COMMON_PROPS = {
  display: 'inline-block',
  className: 'mb30',
  aspect: 2.165
};

const RAYS_DATA = {
  desc: 'H5页面是针对微信公众号扫码推送的服务消息，点击服务消息跳转到应用页面，每一个应用相当于是一个独立的服务，类似于微信小程序。服务的群体主要是针对K12教育学生，也会有特殊情况，以下设计包含多种服务场景。',
  itemProps: COMMON_PROPS,
  content: [
    {
      title: '笔顺动图',
      pictureList: GALLERY_MOBILE_H5_STROKES
    },
    {
      title: '生词听写',
      pictureList: GALLERY_MOBILE_H5_LISTEN
    },
    {
      title: '秀技能',
      pictureList: GALLERY_MOBILE_H5_SKILLS
    },
    {
      title: '好友裂变',
      pictureList: GALLERY_MOBILE_H5_SHARE
    },
    {
      title: '其它应用页面',
      pictureList: GALLERY_MOBILE_H5_OTHERS
    }
  ]
};
