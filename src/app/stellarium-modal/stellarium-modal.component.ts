import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular'; 
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-stellarium-modal',
  templateUrl: './stellarium-modal.component.html',
  styleUrls: ['./stellarium-modal.component.scss'],
  imports: [IonicModule]
})
export class StellariumModalComponent {

  constructor(private modalController: ModalController) {}

  // Dismiss the modal
  dismiss() {
    this.modalController.dismiss();
  }
}
