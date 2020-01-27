/**
 *  Date    : 2019/8/24
 *  Author  : CastileMan
 *  Declare : findScrollFrame
 */
import isScrollable from "./isScrollable";

export default function findScrollFrames(el, options = {}) {
  const { skipOverflowHiddenElements } = options;
  if(typeof el !== 'object' || !el instanceof Element) {
    return [];
  }

  let documentEl = document.scrollingElement || document.documentElement;
  let scrollFrames = [DEFAULT_SCROLL_FRAME];
  let cursor = el;
  while(!!(cursor = cursor.parentElement)) {
    if(cursor === documentEl) {
      break;
    }

    if(isScrollable(cursor, skipOverflowHiddenElements)) {
      scrollFrames.push(cursor);
    }
  }

  return scrollFrames;
}

const DEFAULT_SCROLL_FRAME = window;