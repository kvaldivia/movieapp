import { LoadingController } from "@ionic/angular";

import { BaseComponent } from "./base.component";

export abstract class Presenter {
  constructor(private loadCtrl: LoadingController) {}

  abstract bind<T extends BaseComponent>(comp: T): void;

  public async showLoading(
    task?: () => Promise<any>,
    options: any = {}
  ): Promise<void> {
    const loader = await this.loadCtrl.create(options);
    await loader.present();
    if (task) {
      await task();
      loader.dismiss();
    }
  }
  
  public hideLoading() {
    this.loadCtrl.dismiss();
  }
}
