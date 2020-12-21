/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, NgZone } from '@angular/core';
import { ProxyCmp } from './angular-component-lib/utils';
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
    MojixTag = tslib_1.__decorate([
        ProxyCmp({
            inputs: ['disable', 'icon', 'link']
        }),
        tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
    ], MojixTag);
    return MojixTag;
}());
export { MojixTag };
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
