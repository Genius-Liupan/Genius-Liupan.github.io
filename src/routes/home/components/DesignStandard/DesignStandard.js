/**
 *  Date    : 2020/2/6
 *  Author  : CastileMan
 *  Declare : AppDesign
 */
import React, { useState } from 'react';
import classNames from 'classnames';

import FadeVisibilitySensor from '@/components/FadeVisibilitySensor';
import design_pc_png from '@/assets/images/home/design_pc.png';
import design_mobile_png from '@/assets/images/home/design_mobile.png';

import './DesignStandard.scss';

export default function DesignStandard() {
  const [device, setDevice] = useState(DEVICE.PC);
  return (
    <div className="DesignStandard pos-rel">
      <FadeVisibilitySensor>
        <div>
          <h3 className="design-standard-title text-white pos-abs">设计规范</h3>
        </div>
      </FadeVisibilitySensor>

      <div
        className={classNames("design-standard-pc pos-abs cursor-pointer text-center", { active: device === DEVICE.PC })}
      >
        <img
          className="design-standard-pc-image"
          src={design_pc_png}
          onClick={() => setDevice(DEVICE.PC)}
          alt=""
        />
        <span className="design-standard-preview-btn fade-in text-white">预览PC端</span>
      </div>

      <div
        className={classNames("design-standard-mobile pos-abs cursor-pointer text-center", { active: device === DEVICE.MOBILE })}
      >
        <img
          className="design-standard-mobile-image"
          src={design_mobile_png}
          onClick={() => setDevice(DEVICE.MOBILE)}
          alt=""
        />
        <span className="design-standard-preview-btn fade-in text-white">预览移动端</span>
      </div>
    </div>
  )
};

const DEVICE = {
  PC: 'PC',
  MOBILE: 'MOBILE'
};
