/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, NgZone } from '@angular/core';
import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import { Components } from 'mojix-components';


export declare interface MojixMovieCard extends Components.MojixMovieCard {}
@ProxyCmp({
  inputs: ['genres', 'name', 'posterUrl', 'summary']
})
@Component({
  selector: 'mojix-movie-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['genres', 'name', 'posterUrl', 'summary']
})
export class MojixMovieCard {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface MojixTag extends Components.MojixTag {}
@ProxyCmp({
  inputs: ['disable', 'icon', 'link']
})
@Component({
  selector: 'mojix-tag',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['disable', 'icon', 'link']
})
export class MojixTag {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
