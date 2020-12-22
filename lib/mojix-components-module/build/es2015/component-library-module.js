/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { defineCustomElements } from 'mojix-components/loader';
import { MojixTag } from './directives/proxies';
import * as i0 from "@angular/core";
defineCustomElements(window);
/** @type {?} */
const DECLARATIONS = [
    // proxies
    MojixTag
];
export class ComponentLibraryModule {
}
ComponentLibraryModule.decorators = [
    { type: NgModule, args: [{
                declarations: DECLARATIONS,
                exports: DECLARATIONS,
                imports: [],
                providers: []
            },] },
];
/** @nocollapse */ ComponentLibraryModule.ɵmod = i0.ɵɵdefineNgModule({ type: ComponentLibraryModule });
/** @nocollapse */ ComponentLibraryModule.ɵinj = i0.ɵɵdefineInjector({ factory: function ComponentLibraryModule_Factory(t) { return new (t || ComponentLibraryModule)(); }, providers: [], imports: [[]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ComponentLibraryModule, { declarations: [
        // proxies
        MojixTag], exports: [
        // proxies
        MojixTag] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ComponentLibraryModule, [{
        type: NgModule,
        args: [{
                declarations: DECLARATIONS,
                exports: DECLARATIONS,
                imports: [],
                providers: []
            }]
    }], null, null); })();
