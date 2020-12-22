import { BaseComponent } from './base.component';


export interface Presenter {
  bind(comp: BaseComponent): void;
}
