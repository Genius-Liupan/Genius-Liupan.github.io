/**
 *  Date    : 2020/2/6
 *  Author  : CastileMan
 *  Declare : APP设计
 */
import React from 'react';

import FadeVisibilitySensor from '@/components/FadeVisibilitySensor';
import design_app_png from '@/assets/images/home/design_app.png';

import './AppDesign.scss';

export default function AppDesign() {
  return (
    <div className="AppDesign pos-rel text-center">
      <FadeVisibilitySensor>
        <h3 className="app-design-title">APP设计</h3>
      </FadeVisibilitySensor>
      <FadeVisibilitySensor>
        <div>
          <img src={design_app_png} alt=""/>
        </div>
      </FadeVisibilitySensor>
    </div>
  )
};
