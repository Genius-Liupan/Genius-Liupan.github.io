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
  const [device, setDevice] = useState(DEVICE.PC);

  function handleClick(event, nextDevice) {
    if(nextDevice === device) {
      history.push(DEVICE_LINK[device]);
      event.preventDefault();
    }
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
        className={classNames("design-standard-pc pos-abs cursor-pointer text-center", { active: device === DEVICE.PC })}
        onMouseEnter={() => setDevice(DEVICE.PC)}
        onClick={(event) => handleClick(event, DEVICE.PC)}
      >
        <Img
          className="design-standard-pc-image"
          src={HOME_DESIGN_PC}
          lazy={false}
        />
        <span
          className="design-standard-preview-btn text-white"
        >
          预览PC端
        </span>
      </div>

      <div
        className={classNames("design-standard-mobile pos-abs cursor-pointer text-center", { active: device === DEVICE.MOBILE })}
        onMouseEnter={() => setDevice(DEVICE.MOBILE)}
        onClick={(event) => handleClick(event, DEVICE.MOBILE)}
      >
        <Img
          className="design-standard-mobile-image"
          src={HOME_DESIGN_MOBILE}
          lazy={false}
        />
        <span className="design-standard-preview-btn text-white">预览移动端</span>
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
