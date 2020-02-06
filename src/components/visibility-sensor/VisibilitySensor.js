/**
 *  Date    : 2019/8/24
 *  Author  : CastileMan
 *  Declare : VisibilitySensor
 */

import React from '_react@16.12.0@react';
import PropTypes from 'prop-types';
import { findDOMNode } from '_react-dom@16.12.0@react-dom';
import Visibility from 'visibilityjs';

import { throttle, debounce } from './utils/optimize';
import findScrollFrames from './utils/findScrollFrames';
import getBoundingClientRect from './utils/getBoundingClientRect';
import offsetFormatter from './utils/offsetFormatter';
import { OPTIMIZE_TYPE } from './constants';

class VisibilitySensor extends React.PureComponent {
  static defaultProps = {
    disabled: false,
    scrollCheck: true,
    resizeCheck: true,
    intervalCheck: false,
    intervalDelay: 500,
    optimizeType: OPTIMIZE_TYPE.THROTTLE,
    optimizeDelay: 100,
    container: window,
    offset: null,
    skipOverflowHiddenElements: false,
    partialVisibility: false
  };

  constructor(props) {
    super(props);
    this.state = {
      visible: props.disabled,     // 整体可见，disabled的时候默认为可见
      partialVisible: false, // 只有部分可见
      visibilityRect: {},
      onceVisible: false
    };

    this.unmounted = false;
    this._unlisteners = [];
  }

  get dom() {
    if(this.unmounted) {
      return null;
    }
    return findDOMNode(this);
  }

  _init() {
    const { disabled, optimizeType, optimizeDelay } = this.props;

    // add optimize for check
    if(optimizeType === OPTIMIZE_TYPE.DEBOUNCE) {
      this.checkWithOptimize = debounce(this.check.bind(this), optimizeDelay);
    } else {
      this.checkWithOptimize = throttle(this.check.bind(this), optimizeDelay);
    }

    if(!disabled) {
      this.check();
      this.startWatching();
    }
  }

  check() {
    if(!this.dom) return;

    const { container, offset: propsOffset, partialVisibility } = this.props;
    const rect = getBoundingClientRect(this.dom);

    let containerEl = container;
    if(typeof container === 'string') {
      containerEl = this._cacheQuerySelector(container);
    }

    // format offset with child dom size
    const offset = offsetFormatter(propsOffset, rect);

    // get bounding rect of container with offset
    const containmentRect = getBoundingClientRect(containerEl, offset);

    // calculate visible
    const visibilityRect = {
      top: rect.top >= containmentRect.top,
      left: rect.left >= containmentRect.left,
      bottom: rect.bottom <= containmentRect.bottom,
      right: rect.right <= containmentRect.right
    };

    const visible = (
      visibilityRect.top &&
      visibilityRect.left &&
      visibilityRect.bottom &&
      visibilityRect.right
    );

    const state = {
      visible,
      visibilityRect,
      onceVisible: visible || this.state.onceVisible
    };

    if(partialVisibility) {
      state.partialVisible = (
        !visible &&
        rect.top <= containmentRect.bottom &&
        rect.bottom >= containmentRect.top &&
        rect.left <= containmentRect.right &&
        rect.right >= containmentRect.left
      );
    }

    this.setState(state)
  }

  _cacheQuerySelector(selector = '') {
    if(!selector) return null;

    if(this._queryCache) {
      this._queryCache = {};
    }

    // get el from cache
    let el = this._queryCache[selector];
    // if el is not exist in the cache, call document.querySelector
    if(!el) {
      el = document.querySelector(selector);
      // cache when existed
      if(el) {
        this._queryCache[selector] = el;
      }
    }

    return el;
  }

  startWatching() {
    const { skipOverflowHiddenElements, scrollCheck, resizeCheck, intervalCheck, intervalDelay } = this.props;

    // add scroll listeners
    if(scrollCheck) {
      const scrollFrames = findScrollFrames(this.dom, { skipOverflowHiddenElements });
      scrollFrames.forEach((frame) => {
        frame.addEventListener('scroll', this.checkWithOptimize, false);
        this._unlisteners.push(() => {
          frame.removeEventListener('scroll', this.checkWithOptimize, false);
        });
      });
    }

    // add window resize listeners
    if(resizeCheck) {
      window.addEventListener('resize', this.checkWithOptimize, false);
      this._unlisteners.push(() => {
        window.removeEventListener('resize', this.checkWithOptimize, false);
      });
    }

    // add interval check
    if(intervalCheck) {
      // only check when the page/tab is visible
      const id = Visibility.every(intervalDelay, this.checkWithOptimize);
      this._unlisteners.push(() => {
        Visibility.stop(id);
      });
    }
  }

  stopWatching() {
    this._unlisteners.forEach((unlisten) => unlisten());
    this._unlisteners = [];
  }

  componentDidMount() {
    window.setTimeout(() => {
      this._init();
    }, 0);
  }

  componentDidUpdate(prevProps) {
    const { disabled } = this.props;
    if(disabled !== prevProps.disabled) {
      if(disabled) {
        this.stopWatching();
      } else {
        this._init();
      }
    }
  }

  componentWillUnmount() {
    this.stopWatching();
    this.unmounted = true;
  }

  render() {
    const { children } = this.props;
    const props = this.state;
    if(typeof children === 'function') {
      return children(props);
    } else {
      return React.cloneElement(
        React.Children.only(children),
        props
      );
    }
  }
}

VisibilitySensor.propTypes = {
  optimizeType: PropTypes.oneOf([OPTIMIZE_TYPE.THROTTLE, OPTIMIZE_TYPE.DEBOUNCE]),
  optimizeDelay: PropTypes.number,
};

export default VisibilitySensor;
