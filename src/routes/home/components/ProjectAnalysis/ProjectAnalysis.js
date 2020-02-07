/**
 *  Date    : 2020/2/7
 *  Author  : CastileMan
 *  Declare : ProjectAnalysis
 */

'use strict';
import React from 'react';

import FadeVisibilitySensor from '@/components/FadeVisibilitySensor';
import analysis_pie_png from "@/assets/images/home/analysis_pie.png";

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
              <img src={analysis_pie_png} alt=""/>
            </div>
          </div>
        </FadeVisibilitySensor>
      </div>
    )
  }
}

export default ProjectAnalysis;
