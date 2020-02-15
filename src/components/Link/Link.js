/**
 *  Date    : 2019/11/9
 *  Author  : CastileMan
 *  Declare : Link
 */
import React from 'react';
import { withRouter } from 'react-router';
import { Link as ReactRouterLink } from 'react-router-dom';
import classNames from 'classnames';

import { NOOP } from '@/constants/common';
import Utils from '@/utils/utils';

@withRouter
class Link extends React.PureComponent {
  static defaultProps = {
    className: '',
    to: '',
    disabled: false,
    delay: null,
    action: 'push',
    onDisabled: NOOP,
    onBeforeRedirect: NOOP,
    query: {}
  };

  timer = null;

  _onClick = (e) => {
    const { disabled, onDisabled, delay, onBeforeRedirect } = this.props;
    if(disabled) {
      e.preventDefault();
      e.stopPropagation();
      return onDisabled();
    } else {
      onBeforeRedirect();
      if(delay > 0) {
        e.preventDefault();
        e.stopPropagation();
        this.clearTimer();
        this.timer = window.setTimeout(() => {
          this.redirect();
        }, delay);
      }
    }
  };

  redirect() {
    const { history, action } = this.props;
    history[action](this.path);
  }

  clearTimer() {
    window.clearTimeout(this.timer);
    this.timer = null;
  }

  get path() {
    const { to, query } = this.props;
    return Utils.padQuery(to, query);
  }

  componentWillUnmount() {
    this.clearTimer();
  }

  render() {
    const { className, children, action, disabled } = this.props;
    return (
      <ReactRouterLink
        className={classNames('Link', className, {
          'cursor-pointer': !disabled
        })}
        to={this.path}
        onClickCapture={this._onClick}
        replace={action === 'replace'}
      >
        {children}
      </ReactRouterLink>
    );
  }
}

export default Link;
