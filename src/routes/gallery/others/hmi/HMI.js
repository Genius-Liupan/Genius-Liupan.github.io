/**
 *  Date    : 2020/2/15
 *  Author  : CastileMan
 *  Declare : HMI设计
 */
import React from 'react';

import Gallery from '@/routes/gallery/components/Gallery';
import {
  GALLERY_OTHERS_HMI
} from "@/constants/static";

import './HMI.scss';

export default function HMI() {
  return (
    <Gallery
      className="HMI"
      {...DATA}
    />
  )
}

const COMMON_PROPS = {
  display: 'block',
  className: 'mb30',
};

const ASPECT_LIST = [3.21];

const DATA = {
  itemProps: COMMON_PROPS,
  content: [
    {
      pictureList: ASPECT_LIST.map((aspect, idx) => {
        return {
          src: GALLERY_OTHERS_HMI[idx],
          itemProps: {
            aspect
          }
        }
      })
    }
  ]
};

