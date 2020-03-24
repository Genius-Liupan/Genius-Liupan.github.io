/**
 *  Date    : 2020/2/6
 *  Author  : CastileMan
 *  Declare : AppDesign
 */
import React, { useState } from 'react';
import classNames from 'classnames';

import FadeVisibilitySensor from '@/components/FadeVisibilitySensor';
import Img from '@/components/Img';
import { HOME_DESIGN_PC, HOME_DESIGN_MOBILE } from "@/constants/static";
import PAGE from "@/constants/page";

import './DesignStandard.scss';

export default function DesignStandard(props) {
  const { history } = props;

  function handleClick(device) {
    history.push(DEVICE_LINK[device]);
  }

  return (
    <div className="DesignStandard pos-rel">
      <FadeVisibilitySensor>
        <div>
          <h3 className="design-standard-title text-white pos-abs">
            {
              new Array(8).fill('').map((_, idx) => {
                return <i className="design-standard-title-dot" key={idx} />
              })
            }
            设计规范
          </h3>
        </div>
      </FadeVisibilitySensor>

      <div
        className="design-standard-pc text-center"
      >
          <div
            className="design-standard-pc-image-wrap"
            onClick={() => handleClick(DEVICE.PC)}
          >
            <Img
              display="block"
              className="design-standard-pc-image cursor-pointer"
              src={HOME_DESIGN_PC}
              lazy={false}
            />
          </div>

          <span
            className="design-standard-preview-btn text-white cursor-pointer"
            onClick={() => handleClick(DEVICE.PC)}
          >
            PC端规范
          </span>
      </div>

      <div
        className="design-standard-mobile text-center"
      >
        <div
          className="design-standard-mobile-image-wrap"
          onClick={() => handleClick(DEVICE.MOBILE)}
        >
          <Img
            display="block"
            className="design-standard-mobile-image cursor-pointer"
            src={HOME_DESIGN_MOBILE}
            lazy={false}
          />
        </div>

        <span
          className="design-standard-preview-btn text-white cursor-pointer"
        >
          移动端规范
        </span>
      </div>
    </div>
  )
};

const DEVICE = {
  PC: 'PC',
  MOBILE: 'MOBILE'
};

const DEVICE_LINK = {
  [DEVICE.PC]: PAGE.STANDARD_PC,
  [DEVICE.MOBILE]: PAGE.STANDARD_MOBILE,
};
