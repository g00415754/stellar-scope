import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton } from '@ionic/angular/standalone';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonButton, CommonModule, FormsModule]
})
export class HomePage {

  constructor(private navCtrl: NavController) {}

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
