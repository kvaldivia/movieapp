import { ChangeDetectorRef, ElementRef, NgZone } from '@angular/core';
import { Components } from 'mojix-components';
export declare interface MojixMovieCard extends Components.MojixMovieCard {
}
export declare class MojixMovieCard {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface MojixTag extends Components.MojixTag {
}
export declare class MojixTag {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
