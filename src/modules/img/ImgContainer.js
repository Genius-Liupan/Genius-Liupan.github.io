/**
 *  Date    : 2019/8/23
 *  Author  : CastileMan
 *  Declare : ImgContainer
 */

import React from 'react';
import VisibilitySensor from '@/modules/visibility-sensor';

import Img from "./Img";
import { NOOP } from "./constants";

class ImgContainer extends React.PureComponent {
  static defaultProps = {
    lazy: true,
    forwardRef: null,
    offset: 0,
    optimizeType: 'debounce',
    showOnceVisible: true,
    partialVisibility: true
  };

  constructor(props) {
    super(props);
    this.state = {
      loaded: false
    };

    this.onLoad = ::this.onLoad;
  }

  onLoad(e) {
    const {onLoad = NOOP} = this.props;
    onLoad(e);
    this.setState({
      loaded: true
    });
  }

  render() {
    const {
      lazy, forwardRef, showOnceVisible,
      scrollCheck, resizeCheck, intervalCheck, intervalDelay, optimizeType, optimizeDelay, container, offset, skipOverflowHiddenElements, partialVisibility,
      ...props
    } = this.props;
    const { loaded } = this.state;
    const disabled = !lazy || (showOnceVisible && loaded);
    return (
      <VisibilitySensor
        disabled={disabled}
        scrollCheck={scrollCheck}
        resizeCheck={resizeCheck}
        intervalCheck={intervalCheck}
        intervalDelay={intervalDelay}
        optimizeType={optimizeType}
        optimizeDelay={optimizeDelay}
        container={container}
        offset={offset}
        skipOverflowHiddenElements={skipOverflowHiddenElements}
        partialVisibility={partialVisibility}
      >
        {
          (state) => {
            let visible = disabled || state.visible || state.partialVisible;
            return (
              <Img
                {...props}
                ref={forwardRef}
                visible={visible}
                onLoad={this.onLoad}
              />
            )
          }
        }
      </VisibilitySensor>
    );
  }
}

export default ImgContainer;
