/**
 *  Date    : 2020/2/15
 *  Author  : CastileMan
 *  Declare : 插画
 */
import React from 'react';

import Gallery from '@/routes/gallery/components/Gallery';
import {
  GALLERY_PC_EDITOR,
  GALLERY_PC_EDITOR_LINK,
  GALLERY_PC_EDITOR_IMAGE, GALLERY_PC_EDITOR_EMOJI, GALLERY_OTHERS_INBETWEENING, GALLERY_OTHERS_IP
} from "@/constants/static";

import './Inbetweening.scss';

export default function Inbetweening() {
  return (
    <Gallery
      className="Inbetweening"
      {...DATA}
    />
  )
}

const COMMON_PROPS = {
  display: 'block',
  className: 'mb30',
};

const ASPECT_LIST = [1, 0.8125, 0.625, 1.096, 1];

const DATA = {
  desc: '从小就开始学绘画，热爱艺术，慢慢走向设计的道路，让我觉得更加有成就感，因为可以服务和帮助到更多的人，发挥更大的价值。在家闲暇时也会自己练习手绘，不能完全就荒废了。以下仅展示几种不同风格的插画类型。',
  itemProps: COMMON_PROPS,
  content: [
    {
      pictureList: ASPECT_LIST.map((aspect, idx) => {
        return {
          src: GALLERY_OTHERS_INBETWEENING[idx],
          itemProps: {
            aspect
          }
        }
      })
    }
  ]
};
