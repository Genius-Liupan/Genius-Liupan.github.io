/**
 *  Date    : 2020/2/15
 *  Author  : CastileMan
 *  Declare : IP设计
 */
import React from 'react';

import Gallery from '@/routes/gallery/components/Gallery';
import {
  GALLERY_OTHERS_IP
} from "@/constants/static";

import './IP.scss';

export default function IP() {
  return (
    <Gallery
      className="IP"
      {...DATA}
    />
  )
}

const COMMON_PROPS = {
  display: 'block',
  className: 'mb30',
};

const ASPECT_LIST = [2.44, 1.273];

const DATA = {
  desc: (
    <React.Fragment>
      <p>IP形象的案例主要是个人号IP形象的设计，是为RAYS产品设计的一个IP形象。</p>
      <p><b>品牌背景：</b>RAYS的完整名称叫做RAYS蓝海，品牌特征从最初期开始就与海洋、蓝色所挂钩。</p>
      <p><b>设计目的：</b>个人号针对的是K12的教育人群，需要一个软萌、积极正能量的形象，小睿就诞生了。</p>
      <p><b>设计理念：</b>以海洋生物鱼为基础延伸，大眼萌、可爱、肉嘟嘟的形象特征，减少形象复杂度，增加识别度。色彩上主要以蓝色为主体色，同时在周边物品上可以加上红黄绿等少儿偏好的颜色。其次，为了烘托形象的性格特征，加入了其他关联的人物形象，从形象周边就能直观的抓住其个性特征。</p>
    </React.Fragment>
  ),
  itemProps: COMMON_PROPS,
  content: [
    {
      pictureList: ASPECT_LIST.map((aspect, idx) => {
        return {
          src: GALLERY_OTHERS_IP[idx],
          itemProps: {
            aspect
          }
        }
      })
    }
  ]
};

