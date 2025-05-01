import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton } from '@ionic/angular/standalone';
import { IonCard, NavController } from '@ionic/angular/standalone';
import { Location } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonButton, CommonModule, FormsModule,
  IonCard]
})
export class HomePage {
  constructor(private navCtrl: NavController, private location: Location) {}

  goBack() {
    this.location.back();
  }

  goToAstroObjects() {
    this.navCtrl.navigateForward('/astronomical-objects');
  }

  goToAstronomicalEvents() {
    this.navCtrl.navigateForward('/astronomical-events');
  }

  goToSunMoonInfo() {
    this.navCtrl.navigateForward('/sun-moon-info');
  }
}
