/**
 *  Date    : 2020/2/7
 *  Author  : CastileMan
 *  Declare : ProjectAnalysis
 */

'use strict';
import React from 'react';

import FadeVisibilitySensor from '@/components/FadeVisibilitySensor';
import Img from '@/components/Img';
import { HOME_PROJECT_ANALYSIS } from "@/constants/static";

import './ProjectAnalysis.scss';

class ProjectAnalysis extends React.PureComponent {
  render() {
    return (
      <div className="ProjectAnalysis">
        <FadeVisibilitySensor>
          <h3 className="project-analysis-title text-center">项目分析</h3>
        </FadeVisibilitySensor>

        <FadeVisibilitySensor>
          <div>
            <div className="analysis-pie-container pos-rel">
              <Img src={HOME_PROJECT_ANALYSIS} aspect={0.75}/>
            </div>
          </div>
        </FadeVisibilitySensor>
      </div>
    )
  }
}

export default ProjectAnalysis;
