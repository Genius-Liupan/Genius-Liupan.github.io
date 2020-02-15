/**
 *  Date    : 2020/2/12
 *  Author  : CastileMan
 *  Declare : Others
 */
import React from 'react';

class Others extends React.PureComponent {
  render() {
    return (
      <div className="Others">
        {this.props.children}
      </div>
    )
  }
}

export default Others;
