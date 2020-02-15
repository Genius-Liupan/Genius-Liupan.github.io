/**
 *  Date    : 2020/2/15
 *  Author  : CastileMan
 *  Declare : IP设计
 */
import React from 'react';

import Gallery from '@/routes/gallery/components/Gallery';
import {
  GALLERY_OTHERS_IP
} from "@/constants/static";

import './IP.scss';

export default function IP() {
  return (
    <Gallery
      className="IP"
      {...DATA}
    />
  )
}

const COMMON_PROPS = {
  display: 'block',
  className: 'mb30',
};

const ASPECT_LIST = [2.44, 1.273];

const DATA = {
  desc: '由于是视觉传达专业毕业，对于平面相关的设计也会涉及到，但是这写项目占比不大，偶尔项目中也会涉及到IP形象的设计，我也比较感兴趣。',
  itemProps: COMMON_PROPS,
  content: [
    {
      pictureList: ASPECT_LIST.map((aspect, idx) => {
        return {
          src: GALLERY_OTHERS_IP[idx],
          itemProps: {
            aspect
          }
        }
      })
    }
  ]
};

