/**
 *  Date    : 2020/1/28
 *  Author  : CastileMan
 *  Declare : Home
 */
import React from 'react';

import Header from './components/Header/Header';
import Slider from './components/Slider/Slider';
import DesignCatalog from './components/DesignCategory/DesignCategory';

import './Home.scss';

class Home extends React.PureComponent {
  render() {
    return (
      <div className="Dashboard">
        <Header />

        <Slider />

        <DesignCatalog />
      </div>
    )
  }
}

export default Home;
