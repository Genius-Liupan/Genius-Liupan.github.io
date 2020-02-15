/**
 *  Date    : 2020/2/12
 *  Author  : CastileMan
 *  Declare : GalleryHome
 */
import React from 'react';

import './GalleryHome.scss';

class GalleryHome extends React.PureComponent {
  render() {
    return (
      <div className="GalleryHome">
        <div className="website-center-container">
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default GalleryHome;
