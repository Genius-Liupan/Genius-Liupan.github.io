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
  desc: (
    <React.Fragment>
      <p><b>项目背景：</b>ERP项目项目管理系统，主要为监测与跟进项目而服务，减少中间沟通成本保证项目按时落地。</p>
      <p><b>服务人群：</b>角色分为项目经理、上传组、策划组、质检组等，为方便不同角色间的高效沟通，须以功能与内容为主。</p>
      <p><b>视觉风格：</b>严谨、时尚简约、统一的视觉规范。</p>
    </React.Fragment>
  ),
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
