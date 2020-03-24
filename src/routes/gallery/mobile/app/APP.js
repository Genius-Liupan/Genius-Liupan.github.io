/**
 *  Date    : 2020/2/13
 *  Author  : CastileMan
 *  Declare : APP
 */
import React from 'react';

import Gallery from '@/routes/gallery/components/Gallery';
import {
  GALLERY_MOBILE_APP_BASE,
  GALLERY_MOBILE_APP_READER,
  GALLERY_MOBILE_APP_EDITOR,
  GALLERY_MOBILE_APP_BASE_DETAIL
} from "@/constants/static";

import './APP.scss';

export default function APP() {
  return (
    <Gallery
      className="APP"
      {...RAYS_DATA}
    />
  )
}

const COMMON_PROPS = {
  display: 'inline-block',
  className: 'mb30',
  aspect: 1.78
};

const RAYS_DATA = {
  desc: '除第一个是未上线，其他两款APP已上线。分别是编辑APP是toB的，读者APP是toC。仅展示部分页面，两款APP目前均在迭代更新中。',
  itemProps: COMMON_PROPS,
  content: [
    {
      title: '基建ONLINE',
      pictureList: GALLERY_MOBILE_APP_BASE,
      itemProps: {
        aspect: 2.165
      },
      // extra: () => (
      //   <a
      //     className="block text-center" href={GALLERY_MOBILE_APP_BASE_DETAIL}
      //     target="_blank"
      //     style={{
      //       margin: '.5rem auto 1rem'
      //     }}
      //   >
      //     <span
      //       className="btn btn-primary f16"
      //       style={{
      //         padding: ".12rem .3rem",
      //         borderRadius: 0
      //       }}
      //     >
      //       查看完整展示图，效果更佳
      //     </span>
      //   </a>
      // )
    },
    {
      title: '读者APP',
      pictureList: GALLERY_MOBILE_APP_READER
    },
    {
      title: '编辑APP',
      pictureList: GALLERY_MOBILE_APP_EDITOR
    }
  ]
};
