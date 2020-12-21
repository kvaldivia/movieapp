import { NgModule } from '@angular/core';
import { defineCustomElements } from 'mojix-components/loader';

import { MojixTag } from './directives/proxies';

defineCustomElements(window);

const DECLARATIONS = [
  // proxies
  MojixTag
];

@NgModule({
  declarations: DECLARATIONS,
  exports: DECLARATIONS,
  imports: [],
  providers: []
})
export class ComponentLibraryModule {}
