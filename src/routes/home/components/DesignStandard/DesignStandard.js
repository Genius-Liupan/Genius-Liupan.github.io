/**
 *  Date    : 2020/2/6
 *  Author  : CastileMan
 *  Declare : AppDesign
 */
import React, { useState } from 'react';
import classNames from 'classnames';

import FadeVisibilitySensor from '@/components/FadeVisibilitySensor';
import Img from '@/components/Img';
import Link from '@/components/Link';
import { HOME_DESIGN_PC, HOME_DESIGN_MOBILE } from "@/constants/static";

import './DesignStandard.scss';
import PAGE from "@/constants/page";

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
        <Img
          className="design-standard-pc-image"
          src={HOME_DESIGN_PC}
          onClick={() => setDevice(DEVICE.PC)}
          lazy={false}
        />
        <Link to={PAGE.STANDARD_PC}>
          <span
            className="design-standard-preview-btn fade-in text-white"
          >
            预览PC端
          </span>
        </Link>

      </div>

      <div
        className={classNames("design-standard-mobile pos-abs cursor-pointer text-center", { active: device === DEVICE.MOBILE })}
      >
        <Img
          className="design-standard-mobile-image"
          src={HOME_DESIGN_MOBILE}
          onClick={() => setDevice(DEVICE.MOBILE)}
          lazy={false}
        />
        <Link to={PAGE.STANDARD_MOBILE}>
          <span className="design-standard-preview-btn fade-in text-white">预览移动端</span>
        </Link>
      </div>
    </div>
  )
};

const DEVICE = {
  PC: 'PC',
  MOBILE: 'MOBILE'
};
