/**
 *  Date    : 2020/2/13
 *  Author  : CastileMan
 *  Declare : 设计规范 - 移动端
 */
import React from 'react';

import Gallery from '@/routes/gallery/components/Gallery';
import {
  GALLERY_STANDARD_MOBILE_BUTTON, GALLERY_STANDARD_MOBILE_LAYOUT
} from "@/constants/static";

export default function Mobile() {
  return (
    <Gallery
      className="Mobile"
      {...DATA}
    />
  )
}

const COMMON_PROPS = {
  display: 'block',
  className: 'mb30',
};

const DATA = {
  desc: '为什么要出移动端规范？因为目前移动端涉及的更多的是H5页面应用，虽然都是不同的应用，服务不同的场景，但是需要有统一的规范将其联通起来，有统一品牌识别度。',
  itemProps: COMMON_PROPS,
  content: [
    {
      pictureList: [{
        src: GALLERY_STANDARD_MOBILE_BUTTON,
        itemProps: {
          aspect: 1.37
        }
      }, {
        src: GALLERY_STANDARD_MOBILE_LAYOUT,
        itemProps: {
          aspect: 1.1
        }
      }],
    }
  ]
};
