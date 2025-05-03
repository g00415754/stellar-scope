import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  imports : [IonicModule]
})
export class TabsPage {
  constructor(private router: Router) {}

  goToAstroObjects() {
    this.router.navigate(['/astronomical-objects']);
  }

  goToAstronomicalEvents() {
    this.router.navigate(['/astronomical-events']);
  }

  goToHome() {
    this.router.navigate(['/']);
  }

  goToSunMoonInfo() {
    this.router.navigate(['/sun-moon-info']);
  }
}
