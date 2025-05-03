import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { FavouriteService } from 'src/app/services/favourite.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  imports : [IonicModule, CommonModule]
})
export class TabsPage {
  activeTab!: string;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private favouriteService: FavouriteService) {
    this.setActiveTab();
  }

  favouriteCount: number = 0; // Track the number of favourites

  ngOnInit() {
    // Listen to the favourite items and update the count
    this.favouriteService.favourites$.subscribe(favSet => {
      this.favouriteCount = favSet.size; // The size of the set gives the number of favourites
    });
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
