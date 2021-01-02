import { ModalCtx } from './base.modal';

import { Presenter } from './base.presenter';

export abstract class BaseComponent {

  readonly modalCtx: ModalCtx = {
    title: '',
    message: '',
    isShowing: false
  } as ModalCtx;

  constructor(
    public presenter: Presenter
  ) {}

  openModal(): void {
    this.modalCtx.isShowing = true;
  }

  closeModal(): void {
    this.modalCtx.isShowing = false;
  }

  clickOkModal(): void {
    this.closeModal();
  }

  clickCancelModal(): void {
    this.closeModal();
  }
}
