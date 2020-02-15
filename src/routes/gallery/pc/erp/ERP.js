/**
 *  Date    : 2020/2/13
 *  Author  : CastileMan
 *  Declare : Editor
 */
import React from 'react';

import Gallery from '@/routes/gallery/components/Gallery';
import {
  GALLERY_PC_ERP_LOGIN, GALLERY_PC_ERP_HOME, GALLERY_PC_ERP_PROJECT
} from "@/constants/static";

export default function ERP() {
  return (
    <Gallery
      className="ERP"
      {...DATA}
    />
  )
}

const COMMON_PROPS = {
  display: 'block',
  className: 'mb30'
};

const DATA = {
  desc: 'ERP项目是19年下半年的一个项目，主要是给内部服务的后台系统，以下是个别页面。',
  itemProps: COMMON_PROPS,
  content: [
    {
      title: 'ERP项目管理系统',
      pictureList: [{
        src: GALLERY_PC_ERP_LOGIN,
        itemProps: {
          aspect: 0.56
        }
      }, {
        src: GALLERY_PC_ERP_HOME,
        itemProps: {
          aspect: 0.58
        }
      }, {
        src: GALLERY_PC_ERP_PROJECT,
        itemProps: {
          aspect: 0.96
        }
      }],
    }
  ]
};
