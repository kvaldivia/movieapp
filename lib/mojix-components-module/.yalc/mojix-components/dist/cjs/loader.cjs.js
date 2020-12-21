'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-eb9f49e2.js');
require('./bootstrap-ce705e22.js');

/*
 Stencil Client Patch Esm v2.3.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return index.promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return index.bootstrapLazy([["mojix-tag.cjs",[[38,"mojix-tag",{"icon":[1],"link":[1],"disable":[4]}]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
