import { __decorate } from "tslib";
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ProxyCmp } from './angular-component-lib/utils';
import * as i0 from "@angular/core";
const _c0 = ["*"];
let MojixMovieCard = class MojixMovieCard {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
MojixMovieCard.decorators = [
    { type: Component, args: [{
                selector: 'mojix-movie-card',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['genres', 'name', 'posterUrl', 'summary']
            },] },
];
/** @nocollapse */
MojixMovieCard.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
/** @nocollapse */ MojixMovieCard.ɵfac = function MojixMovieCard_Factory(t) { return new (t || MojixMovieCard)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
/** @nocollapse */ MojixMovieCard.ɵcmp = i0.ɵɵdefineComponent({ type: MojixMovieCard, selectors: [["mojix-movie-card"]], inputs: { genres: "genres", name: "name", posterUrl: "posterUrl", summary: "summary" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function MojixMovieCard_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
MojixMovieCard = __decorate([
    ProxyCmp({
        inputs: ['genres', 'name', 'posterUrl', 'summary']
    })
], MojixMovieCard);
export { MojixMovieCard };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(MojixMovieCard, [{
        type: Component,
        args: [{
                selector: 'mojix-movie-card',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['genres', 'name', 'posterUrl', 'summary']
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; }, null); })();
if (false) {
    /**
     * @type {?}
     * @protected
     */
    MojixMovieCard.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    MojixMovieCard.prototype.z;
}
let MojixTag = class MojixTag {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
MojixTag.decorators = [
    { type: Component, args: [{
                selector: 'mojix-tag',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['disable', 'icon', 'link']
            },] },
];
/** @nocollapse */
MojixTag.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
/** @nocollapse */ MojixTag.ɵfac = function MojixTag_Factory(t) { return new (t || MojixTag)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
/** @nocollapse */ MojixTag.ɵcmp = i0.ɵɵdefineComponent({ type: MojixTag, selectors: [["mojix-tag"]], inputs: { disable: "disable", icon: "icon", link: "link" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function MojixTag_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
MojixTag = __decorate([
    ProxyCmp({
        inputs: ['disable', 'icon', 'link']
    })
], MojixTag);
export { MojixTag };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(MojixTag, [{
        type: Component,
        args: [{
                selector: 'mojix-tag',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['disable', 'icon', 'link']
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; }, null); })();
if (false) {
    /**
     * @type {?}
     * @protected
     */
    MojixTag.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    MojixTag.prototype.z;
}
