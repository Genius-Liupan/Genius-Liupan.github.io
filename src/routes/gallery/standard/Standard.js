/**
 *  Date    : 2020/2/12
 *  Author  : CastileMan
 *  Declare : PC
 */

'use strict';
import React from 'react';

class PC extends React.PureComponent {
  render() {
    return (
      <div className="PC">
        {this.props.children}
      </div>
    )
  }
}

export default PC;
