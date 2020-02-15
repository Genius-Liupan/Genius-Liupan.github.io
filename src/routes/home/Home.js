/**
 *  Date    : 2020/1/28
 *  Author  : CastileMan
 *  Declare : Home
 */
import React from 'react';

import Slider from './components/Slider/Slider';
import DesignCategory from './components/DesignCategory/DesignCategory';
import DesignStandard from './components/DesignStandard/DesignStandard';
import AppDesign from './components/AppDesign/AppDesign';
import ProjectAnalysis from './components/ProjectAnalysis/ProjectAnalysis';

import './Home.scss';

class Home extends React.PureComponent {
  render() {
    const { history } = this.props;
    return (
      <div className="Home">
        <Slider history={history} />
        <DesignCategory history={history} />
        <DesignStandard history={history} />
        <AppDesign history={history} />
        <ProjectAnalysis history={history} />
      </div>
    )
  }
}

export default Home;
