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
  desc: '有着20年的绘画基础，走上UI设计这个行列也要锻炼自己的基础功夫，在闲暇时也会记录下灵感，保持着对世界的好奇心与创造力，多练习才能将感性的思维表达得更加具体。',
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
