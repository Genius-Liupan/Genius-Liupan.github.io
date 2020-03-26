/**
 *  Date    : 2020/2/13
 *  Author  : CastileMan
 *  Declare : 设计规范 - 移动端
 */
import React from 'react';

import Gallery from '@/routes/gallery/components/Gallery';
import {
  GALLERY_STANDARD_MOBILE_BUTTON, GALLERY_STANDARD_MOBILE_LAYOUT
} from "@/constants/static";

export default function Mobile() {
  return (
    <Gallery
      className="Mobile"
      {...DATA}
    />
  )
}

const COMMON_PROPS = {
  display: 'block',
  className: 'mb30',
};

const DATA = {
  desc: (
    <React.Fragment>
      <p>移动端设计规范更多涉及的是H5页面应用，虽然都是不同的应用，服务不同的场景，但是需要有统一的规范将其联通起来，有统一品牌识别度。移动端规范的几个要点：</p>
      <ul>
        <li><b>友好礼貌：</b>为了避免用户在使用服务时，注意力被周围复杂环境干扰，在设计时应该注意减少无关的设计元素对用户目标的干扰，礼貌地向用户展示程序提供的服务，友好地引导用户进行操作。重点：突出重点、流程明确。</li>
        <li><b>明确清晰：</b>用户与应用交互时的阻力和困惑越少，应用被继续使用的机会就越大。一旦用户进入我们的页面，我们就有责任和义务清晰明确地告知用户身在何处、又可以往何处去，确保用户在页面中游刃有余地穿梭而不迷路，这样才能为用户提供安全且愉悦的使用体验。重点：导航明确来去自如、减少等待反馈及时、异常可控有路可退。</li>
        <li><b>便捷优雅：</b>从PC时代的物理键盘鼠标到移动端时代手指，虽然输入设备极大精简，但是手指操作的准确性却大大不如键盘鼠标精确。为了适应这个变化，需要开发者在设计过程中充分利用手机特性，让用户便捷优雅的操控界面。 重点：减少输入、避免误操作。</li>
      </ul>
    </React.Fragment>
  ),
  itemProps: COMMON_PROPS,
  content: [
    {
      pictureList: [{
        src: GALLERY_STANDARD_MOBILE_BUTTON,
        itemProps: {
          aspect: 1.37
        }
      }, {
        src: GALLERY_STANDARD_MOBILE_LAYOUT,
        itemProps: {
          aspect: 1.1
        }
      }],
    }
  ]
};
