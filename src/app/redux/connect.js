/**
 *  Date    : 2019/4/26
 *  Author  : CastileMan
 *  Declare : connect redux to react
 */
import React from 'react';
import {connect as reduxConnect} from 'react-redux';

import Context from './context';

export default function connect(mapStateToProps, mergeProps = null, opts = {}) {

  // accessing the wrapped instance is allowed through props.ref
  opts.forwardRef = true;

  return (component) => {
    const Component = reduxConnect(
      mapStateToProps,
      null,
      mergeProps,
      opts
    )(component);

    return React.forwardRef((props, ref) => (
        <Context.Consumer>
          {
            (actions) => (
              <Component
                {...props}
                actions={actions}
                ref={ref}
              />
            )
          }
        </Context.Consumer>
      )
    )
  }
};
