import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavController } from '@ionic/angular/standalone';
import { Location } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,
]
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
