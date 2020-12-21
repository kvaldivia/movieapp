import { p as promiseResolve, b as bootstrapLazy } from './index-468d0917.js';
import './bootstrap-cff488e6.js';

/*
 Stencil Client Patch Browser v2.3.0 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = import.meta.url;
    const opts =  {};
    if ( importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return promiseResolve(opts);
};

patchBrowser().then(options => {
  return bootstrapLazy([["mojix-tag",[[38,"mojix-tag",{"icon":[1],"link":[1],"disable":[4]}]]]], options);
});
