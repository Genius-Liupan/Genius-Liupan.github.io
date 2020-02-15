/**
 *  Date    : 2020/2/7
 *  Author  : CastileMan
 *  Declare : Footer
 */

'use strict';
import React from 'react';

import './Footer.scss';

class Footer extends React.PureComponent {
  render() {
    return (
      <div className="Footer text-center text-white">
        此网站展示作品版权归个人所有，仅为求职与商务合作
      </div>
    )
  }
}

export default Footer;
