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
  desc: '目前如需要开启一个后台项目就要先出规范，不仅可以提高设计师之间的合作效率，还能方便开发人员构建组件及后期延展性。在后台规范这方面做的会比较多，规范也会在后期迭代中不断更新。下方仅展示部分规范内容。',
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
