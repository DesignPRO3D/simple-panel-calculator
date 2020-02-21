import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { InfoComponent } from './info/info.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    public modalController: ModalController
  ) {}

  async presentModal() {
    const popover = await this.modalController.create({
      component: InfoComponent
    });
    return await popover.present();
  }

  onOpenInfo() {
    this.presentModal();
  }

}
