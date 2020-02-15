/**
 *  Date    : 2019/8/23
 *  Author  : CastileMan
 *  Declare : Img
 */

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Image from 'react-image';

import { DISPLAY, OBJECT_FIT, NOOP, PREFIX } from './constants';
import { objectWithoutProperties } from "./utils";

class Img extends React.PureComponent {
  static defaultProps = {
    className: '',
    display: DISPLAY.INLINE_BLOCK,
    visible: true,
    decode: true,
    crossOrigin: null,
    aspect: null,
    style: {},
    objectFit: OBJECT_FIT.COVER,
    src: '',
    onClick: NOOP,
    loaderRenderer: NOOP,
    unloaderRenderer: NOOP,
    downloadable: true
  };

  static propTypes = {
    className: PropTypes.string,
    display: PropTypes.oneOf(Object.values(DISPLAY)),
    src: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
    visible: PropTypes.bool,
    decode: PropTypes.bool,
    aspect: PropTypes.number,
    style: PropTypes.object,
    objectFit: PropTypes.oneOf(Object.values(OBJECT_FIT)),
    loaderRenderer: PropTypes.func,
    unloaderRenderer: PropTypes.func,
    downloadable: PropTypes.bool,
  };

  _loaderRenderer() {
    const { loaderRenderer } = this.props;
    if(typeof loaderRenderer === 'function') {
      return loaderRenderer();
    }
    return null;
  }

  _unloaderRenderer() {
    const { unloaderRenderer } = this.props;
    if(typeof unloaderRenderer === 'function') {
      return unloaderRenderer();
    }
    return null;
  }

  _aspectWrapRenderer(children) {
    const { aspect } = this.props;
    if(aspect) {
      return (
        <div
          className={`${PREFIX}-aspect-wrap`}
          style={{
            paddingTop: `${aspect * 100}%`
          }}
        >
          {children}
        </div>
      )
    }

    return children;
  }

  render() {
    const { className, src, visible, display, objectFit, aspect, style, children, decode, crossOrigin, downloadable, onClick, ...rest } = this.props;
    const _style = {
      ...style,
      display
    };
    const props = objectWithoutProperties(rest, ['loaderRenderer', 'unloaderRenderer']);
    return (
      <div
        className={classNames(PREFIX, `${PREFIX}-${objectFit}`, className, {
          [`${PREFIX}-visible`]: visible,
          [`${PREFIX}-aspect`]: !!aspect,
        })}
        onClick={onClick}
        data-wtdc-role="img"
        style={_style}
      >
        {
          this._aspectWrapRenderer(
            <React.Fragment>
              {
                visible ?
                  <Image
                    className={`${PREFIX}-inner`}
                    src={src}
                    loader={this._loaderRenderer()}
                    unloader={this._unloaderRenderer()}
                    decode={decode}
                    crossOrigin={crossOrigin}
                    {...props}
                  />
                  :
                  this._loaderRenderer()
              }
              {children}

              {
                !downloadable &&
                <div className={`${PREFIX}-transparent-mask`} />
              }
            </React.Fragment>
          )
        }
      </div>
    )
  }
}

export default Img;

