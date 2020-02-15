/**
 *  Date    : 2020/2/13
 *  Author  : CastileMan
 *  Declare : 编辑器
 */
import React from 'react';

import Gallery from '@/routes/gallery/components/Gallery';
import {
  GALLERY_PC_EDITOR,
  GALLERY_PC_EDITOR_LINK,
  GALLERY_PC_EDITOR_IMAGE, GALLERY_PC_EDITOR_EMOJI
} from "@/constants/static";

import './Editor.scss';

export default function Editor() {
  return (
    <Gallery
      className="Editor clearfix"
      {...DATA}
    />
  )
}

const COMMON_PROPS = {
  display: 'inline-block',
  className: 'mb30',
  aspect: 0.825
};

const DATA = {
  desc: '编辑器的设计是因为开始都是引用的第三方编辑器，但是我们的服务对象主要是编辑人员，没有一个自有的编辑系统实在是说不过去，就开创了一套自有编辑器，这是19年上半年的项目。',
  itemProps: COMMON_PROPS,
  content: [
    {
      pictureList: [GALLERY_PC_EDITOR, GALLERY_PC_EDITOR_LINK, GALLERY_PC_EDITOR_IMAGE, GALLERY_PC_EDITOR_EMOJI],
    }
  ]
};
