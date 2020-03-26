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
  desc: (
    <React.Fragment>
      <p>项目中读者端的应用服务设计主要也是H5页面设计，应用服务需要在不同的场景下展示形态也不同，每一个服务的定位是即时消费、冲动消费，因此在读者扫码后的第一时间要让读者看到自身所需要的东西，且符合当下场景的视觉与交互才能促成有效消费。</p>
      <p>我们服务的群体主要以K12为主，同时也包含成人教育、技能培训、古典文学等，不同类型的书刊就要设计出不同风格页面，才能引起读者的共鸣。</p>
    </React.Fragment>
  ),
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
