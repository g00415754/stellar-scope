// Angular and Ionic module imports
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { FavouriteService } from 'src/app/services/favourite.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tabs', // Component selector for use in HTML
  templateUrl: 'tabs.page.html', // HTML template for this component
  styleUrls: ['tabs.page.scss'], // SCSS styling
  imports : [IonicModule, CommonModule] // Required modules for the template
})
export class TabsPage {
  activeTab!: string; // Tracks the currently active tab
  favouriteCount: number = 0; // Track the number of favourite items

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private favouriteService: FavouriteService
  ) {
    this.setActiveTab(); // Determine initial active tab on load
  }

  ngOnInit() {
    // Subscribe to favourite service updates and update the favourite count accordingly
    this.favouriteService.favourites$.subscribe(favSet => {
      this.favouriteCount = favSet.size;
    });
  }

  /**
   * Sets the active tab based on the current route URL.
   * Defaults to 'astronomical-objects' if not on home route.
   */
  setActiveTab() {
    this.activeTab = this.router.url.includes('home') ? 'home' : 'astronomical-objects';
  }

  /**
   * Navigation methods for each tab button.
   */
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
