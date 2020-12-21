declare const Context: any;
const userAgent = navigator.userAgent;

if(/windows phone/i.test(userAgent)) {
  Context.mode = 'android';
} else if (/android/i.test(userAgent)) {
  Context.mode = 'android';
} else if (/iPad|iPhone|iPod/.test(userAgent)) {
  Context.mode = 'ios';
} else {
  Context.mode = 'web';
}

import { setMode } from '@stencil/core';

setMode(elm => {
  return (elm as any).mode || elm.getAttribute('mode') || Context.mode;
});
