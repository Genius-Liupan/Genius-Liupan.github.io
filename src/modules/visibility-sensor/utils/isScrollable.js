/**
 *  Date    : 2019/8/24
 *  Author  : CastileMan
 *  Declare : isScrollable
 */

import { OVERFLOW } from '../constants';

function canOverflow(overflow, skipOverflowHiddenElements = false) {
  if (skipOverflowHiddenElements && overflow === OVERFLOW.HIDDEN) {
    return false;
  }

  return ![OVERFLOW.VISIBLE, OVERFLOW.CLIP].includes(overflow);
}

export default function isScrollable(el, skipOverflowHiddenElements) {
  if (el.clientHeight < el.scrollHeight || el.clientWidth < el.scrollWidth) {
    const style = getComputedStyle(el, null);
    return canOverflow(style.overflowY, skipOverflowHiddenElements) || canOverflow(style.overflowX, skipOverflowHiddenElements);
  }

  return false;
}
