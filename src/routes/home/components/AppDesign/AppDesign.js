/**
 *  Date    : 2020/2/6
 *  Author  : CastileMan
 *  Declare : APP设计
 */
import React from 'react';

import FadeVisibilitySensor from '@/components/FadeVisibilitySensor';
import Img from '@/components/Img';
import Link from '@/components/Link';
import { HOME_DESIGN_APP } from "@/constants/static";
import PAGE from "@/constants/page";

import './AppDesign.scss';

export default function AppDesign() {
  return (
    <div className="AppDesign pos-rel text-center">
      <FadeVisibilitySensor>
        <h3 className="app-design-title">APP设计</h3>
      </FadeVisibilitySensor>
      <FadeVisibilitySensor>
        <div>
          <Link to={PAGE.APP}>
            <Img
              display="block"
              src={HOME_DESIGN_APP}
              aspect={1.29}
              lazy={false}
            />
          </Link>
        </div>
      </FadeVisibilitySensor>
    </div>
  )
};
