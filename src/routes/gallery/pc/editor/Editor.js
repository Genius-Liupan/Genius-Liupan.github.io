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
  aspect: 0.821
};

const DATA = {
  desc: (
    <React.Fragment>
      <p><b>项目背景：</b>产品服务对象主要是以内容生产者而服务，而编辑器作为最常用的编辑工具，须要有一套代表的原生编辑器。</p>
      <p><b>产品定位：</b>功能涵盖全面，操作直观简单易用。</p>
      <p><b>视觉风格：</b>与系统统一的视觉语言。</p>
    </React.Fragment>
  ),
  itemProps: COMMON_PROPS,
  content: [
    {
      pictureList: [GALLERY_PC_EDITOR, GALLERY_PC_EDITOR_LINK, GALLERY_PC_EDITOR_IMAGE, GALLERY_PC_EDITOR_EMOJI],
    }
  ]
};
