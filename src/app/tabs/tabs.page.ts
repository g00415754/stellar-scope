import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  imports : [IonicModule]
})
export class TabsPage {
  activeTab!: string;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.setActiveTab();
  }

  setActiveTab() {
    // Get the current path from the router and set the active tab accordingly
    this.activeTab = this.router.url.includes('home') ? 'home' : 'astronomical-objects';  // Default to 'astronomical-objects' for non-home pages
  }
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

  goToFavourites() {
    this.router.navigate(['/favourites']);
  }
}
