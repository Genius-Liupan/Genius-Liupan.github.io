/**
 *  Date    : 2020/1/28
 *  Author  : CastileMan
 *  Declare : Home
 */
import React from 'react';

import Header from './components/Header/Header';
import Slider from './components/Slider/Slider';
import DesignCatalog from './components/DesignCategory/DesignCategory';
import DesignStandard from './components/DesignStandard/DesignStandard';
import AppDesign from './components/AppDesign/AppDesign';
import ProjectAnalysis from './components/ProjectAnalysis/ProjectAnalysis';
import Footer from './components/Footer/Footer';

import './Home.scss';

class Home extends React.PureComponent {
  render() {
    return (
      <div className="Dashboard">
        <Header />
        <Slider />
        <DesignCatalog />
        <DesignStandard />
        <AppDesign />
        <ProjectAnalysis />
        <Footer />
      </div>
    )
  }
}

export default Home;
