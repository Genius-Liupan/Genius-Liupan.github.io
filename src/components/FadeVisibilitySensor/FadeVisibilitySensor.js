/**
 *  Date    : 2020/2/6
 *  Author  : CastileMan
 *  Declare : FadeVisibilitySensor
 */
import React from 'react';
import classNames from 'classnames';

import VisibilitySensor from '@/components/visibility-sensor';

export default function FadeVisibilitySensor(props) {
  const {children, animationName} = props;
  return (
    <VisibilitySensor
      partialVisibility
    >
      {
        ({ visible, partialVisible, onceVisible }) => {
          const isVisible = onceVisible || visible || partialVisible;
          return React.cloneElement(
            children,
            {
              ...children.props,
              className: classNames(children.props.className, {
                [`${animationName}-enter`]: !isVisible,
                [`${animationName}-entered`]: isVisible,
              }),
            }
          )
        }
      }
    </VisibilitySensor>
  )
};

FadeVisibilitySensor.defaultProps = {
  animationName: 'fade-in-move'
};