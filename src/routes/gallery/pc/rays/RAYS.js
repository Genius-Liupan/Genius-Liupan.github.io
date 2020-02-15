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
    <span>
      这是我从2015年开始做的项目，也是目前持续时间最长且最庞大的项目，由于项目涉及商业相关问题，仅能展示部分页面，我先对项目做一个简单的介绍：整个RAYS系统包含5个后台、4个移动管理端、1个移动读者端、1个体验网站。整个系统都是为出版社服务，是一个B2C的生态系统，具体了解可以通过RAYS体验网站：<a className="cursor-pointer" href="https://rays.5rs.me" target="_blank">https://rays.5rs.me</a>
    </span>
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
