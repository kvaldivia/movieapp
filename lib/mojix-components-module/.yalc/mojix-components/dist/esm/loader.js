import { p as promiseResolve, b as bootstrapLazy } from './index-468d0917.js';
import './bootstrap-cff488e6.js';

/*
 Stencil Client Patch Esm v2.3.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return bootstrapLazy([["mojix-tag",[[38,"mojix-tag",{"icon":[1],"link":[1],"disable":[4]}]]]], options);
  });
};

export { defineCustomElements };
