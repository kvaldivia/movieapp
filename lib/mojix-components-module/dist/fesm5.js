import { __decorate } from 'tslib';
import { Component, ChangeDetectionStrategy, ɵɵdirectiveInject, ChangeDetectorRef as ChangeDetectorRef$1, ElementRef as ElementRef$1, NgZone as NgZone$1, ɵɵdefineComponent, ɵɵprojectionDef, ɵɵprojection, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import 'rxjs';
import { defineCustomElements } from 'mojix-components/loader';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var proxyInputs = (/**
 * @param {?} Cmp
 * @param {?} inputs
 * @return {?}
 */
function (Cmp, inputs) {
    /** @type {?} */
    var Prototype = Cmp.prototype;
    inputs.forEach((/**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        Object.defineProperty(Prototype, item, {
            get: /**
             * @return {?}
             */
            function () {
                return this.el[item];
            },
            set: /**
             * @param {?} val
             * @return {?}
             */
            function (val) {
                var _this = this;
                this.z.runOutsideAngular((/**
                 * @return {?}
                 */
                function () { return (_this.el[item] = val); }));
            },
        });
    }));
});
/** @type {?} */
var proxyMethods = (/**
 * @param {?} Cmp
 * @param {?} methods
 * @return {?}
 */
function (Cmp, methods) {
    /** @type {?} */
    var Prototype = Cmp.prototype;
    methods.forEach((/**
     * @param {?} methodName
     * @return {?}
     */
    function (methodName) {
        Prototype[methodName] = (/**
         * @return {?}
         */
        function () {
            var _this = this;
            /** @type {?} */
            var args = arguments;
            return this.z.runOutsideAngular((/**
             * @return {?}
             */
            function () { return _this.el[methodName].apply(_this.el, args); }));
        });
    }));
});
// tslint:disable-next-line: only-arrow-functions
/**
 * @param {?} opts
 * @return {?}
 */
function ProxyCmp(opts) {
    /** @type {?} */
    var decorator = (/**
     * @param {?} cls
     * @return {?}
     */
    function (cls) {
        if (opts.inputs) {
            proxyInputs(cls, opts.inputs);
        }
        if (opts.methods) {
            proxyMethods(cls, opts.methods);
        }
        return cls;
    });
    return decorator;
}

var _c0 = ["*"];
var MojixMovieCard = /** @class */ (function () {
    function MojixMovieCard(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    MojixMovieCard.decorators = [
        { type: Component, args: [{
                    selector: 'mojix-movie-card',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    inputs: ['genres', 'name', 'posterUrl', 'summary']
                },] },
    ];
    /** @nocollapse */
    MojixMovieCard.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    /** @nocollapse */ MojixMovieCard.ɵfac = function MojixMovieCard_Factory(t) { return new (t || MojixMovieCard)(ɵɵdirectiveInject(ChangeDetectorRef$1), ɵɵdirectiveInject(ElementRef$1), ɵɵdirectiveInject(NgZone$1)); };
    /** @nocollapse */ MojixMovieCard.ɵcmp = ɵɵdefineComponent({ type: MojixMovieCard, selectors: [["mojix-movie-card"]], inputs: { genres: "genres", name: "name", posterUrl: "posterUrl", summary: "summary" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function MojixMovieCard_Template(rf, ctx) { if (rf & 1) {
            ɵɵprojectionDef();
            ɵɵprojection(0);
        } }, encapsulation: 2, changeDetection: 0 });
    MojixMovieCard = __decorate([
        ProxyCmp({
            inputs: ['genres', 'name', 'posterUrl', 'summary']
        })
    ], MojixMovieCard);
    return MojixMovieCard;
}());
var MojixTag = /** @class */ (function () {
    function MojixTag(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    MojixTag.decorators = [
        { type: Component, args: [{
                    selector: 'mojix-tag',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    inputs: ['disable', 'icon', 'link']
                },] },
    ];
    /** @nocollapse */
    MojixTag.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    /** @nocollapse */ MojixTag.ɵfac = function MojixTag_Factory(t) { return new (t || MojixTag)(ɵɵdirectiveInject(ChangeDetectorRef$1), ɵɵdirectiveInject(ElementRef$1), ɵɵdirectiveInject(NgZone$1)); };
    /** @nocollapse */ MojixTag.ɵcmp = ɵɵdefineComponent({ type: MojixTag, selectors: [["mojix-tag"]], inputs: { disable: "disable", icon: "icon", link: "link" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function MojixTag_Template(rf, ctx) { if (rf & 1) {
            ɵɵprojectionDef();
            ɵɵprojection(0);
        } }, encapsulation: 2, changeDetection: 0 });
    MojixTag = __decorate([
        ProxyCmp({
            inputs: ['disable', 'icon', 'link']
        })
    ], MojixTag);
    return MojixTag;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
defineCustomElements(window);
/** @type {?} */
var DECLARATIONS = [
    // proxies
    MojixTag
];
var ComponentLibraryModule = /** @class */ (function () {
    function ComponentLibraryModule() {
    }
    ComponentLibraryModule.decorators = [
        { type: NgModule, args: [{
                    declarations: DECLARATIONS,
                    exports: DECLARATIONS,
                    imports: [],
                    providers: []
                },] },
    ];
    /** @nocollapse */ ComponentLibraryModule.ɵmod = ɵɵdefineNgModule({ type: ComponentLibraryModule });
    /** @nocollapse */ ComponentLibraryModule.ɵinj = ɵɵdefineInjector({ factory: function ComponentLibraryModule_Factory(t) { return new (t || ComponentLibraryModule)(); }, providers: [], imports: [[]] });
    return ComponentLibraryModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(ComponentLibraryModule, { declarations: [
        // proxies
        MojixTag], exports: [
        // proxies
        MojixTag] }); })();

export { ComponentLibraryModule, MojixMovieCard, MojixTag };
