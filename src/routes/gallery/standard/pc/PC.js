/**
 *  Date    : 2020/2/13
 *  Author  : CastileMan
 *  Declare : 设计规范 - PC
 */
import React from 'react';

import Gallery from '@/routes/gallery/components/Gallery';
import {
  GALLERY_PC_EDITOR,
  GALLERY_PC_EDITOR_LINK,
  GALLERY_PC_EDITOR_IMAGE,
  GALLERY_PC_EDITOR_EMOJI,
  GALLERY_STANDARD_PC_RAYS,
  GALLERY_STANDARD_PC_RECON,
  GALLERY_STANDARD_PC_ERP
} from "@/constants/static";

export default function PC() {
  return (
    <Gallery
      className="PC"
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
      <p>设计规范的存在，需要能最大程度的保证设计的一致性，即可以提高设计师之间的合作效率，也方便开发后期迭代与复用。同时能最大限度的避免用户对产品产生不必要的认知。统一性有四个方面：</p>
      <ul>
        <li><b>交互操作的统一：</b>比如确定按钮统一放在左侧，取消按钮放在右侧。返回按钮统一放在左上角等。</li>
        <li><b>视觉元素的统一：</b>比如弹窗中，红色为警示色、绿色为完成色。</li>
        <li><b>整体设计风格统一：</b>一款产品需要有自己的调性，要传达整个产品的设计理念与态度，设计规范可以最大限度的保证设计师在大的框架中，根据功能的不同，设计出体验完整风格统一的产品。</li>
        <li><b>文案的统一：</b>语言风格的统一，也是在帮助用户降低与你的产品的沟通成本。</li>
      </ul>
    </React.Fragment>
  ),
  itemProps: COMMON_PROPS,
  content: [
    {
      title: 'RAYS',
      pictureList: [GALLERY_STANDARD_PC_RAYS],
      itemProps: {
        aspect: 1.81
      }
    },
    {
      title: '重构系统',
      pictureList: [GALLERY_STANDARD_PC_RECON],
      itemProps: {
        aspect: 0.85
      }
    },
    {
      title: 'ERP项目管理系统',
      pictureList: [GALLERY_STANDARD_PC_ERP],
      itemProps: {
        aspect: 0.91
      }
    }
  ]
};
