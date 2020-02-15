/**
 *  Date    : 2019/11/5
 *  Author  : CastileMan
 *  Declare : Img
 */
import React, { useMemo } from 'react';

import WTDCImg from '@/modules/img';
import Utils from '@/utils/utils';
import { getFileExt } from '@/utils/file';

// import { loader, unLoader } from './loaders';

import './Img.scss';

export default function Img(props) {
  const { src, effect, compressScaleRatio, compressWidthRatio, style: { width }} = props;
  const _props = Utils.omit(props, ['src', 'effect', 'compressScaleRatio', 'compressWidthRatio']);

  const _src = useMemo(() => {
    let _effect = effect;
    // 若未传递图片处理参数，默认进行一些压缩操作
    if(effect === void 0) {
      _effect = {};

      // 图片旋转
      _effect['auto-orient'] = 0;

      // webp处理
      if(Utils.isSupportWebp()) {
        _effect['format'] = 'webp';
      } else {
        // 没有设置图片宽度，将图片按比例进行压缩
        if(Number.isNaN(+width)) {
          _effect.resize = `p_${compressScaleRatio * 100}`;
        } else {      // 若设置了图片的宽度，则
          _effect.resize = `w_${width * compressWidthRatio}`;
        }
      }
    }
    const srcArray = [];
    []
      .concat(src)
      .filter(v => !!v)
      .forEach((imageURL) => {
        // 将oss处理的图片加入（GIF动图不做处理，否则将失去动图效果）
        if(_effect && getFileExt(imageURL).toLowerCase() !== 'gif') {
          srcArray.push(Utils.getImg(imageURL, null, _effect));
        }
        // 将原图随后加入
        srcArray.push(imageURL);
      });

    return srcArray;
  }, [src]);

  return (
    <WTDCImg
      {..._props}
      src={_src}
    />
  );
}

Img.defaultProps = {
  downloadable: false,
  style: {},
  compressScaleRatio: 0.8,      // 按比例压缩时，图片的压缩比例
  compressWidthRatio: 2,        // 按宽度压缩时，图片宽度为展示宽度的倍数
  // loaderRenderer: () => <div className="loading fadeIn" dangerouslySetInnerHTML={{ __html: loader }} />,
  // unloaderRenderer: () => <div className="load-error fadeIn" dangerouslySetInnerHTML={{ __html: unLoader }} />,
  effect: undefined   // 图片处理参数，传null即无处理
};
