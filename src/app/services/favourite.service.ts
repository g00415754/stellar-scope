// Angular core dependency injection and RxJS for reactive state management
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root' // Makes this service available app-wide
})
export class FavouriteService {
  // Internal Set to track favourites (ensures uniqueness)
  private favourites = new Set<string>();

  // BehaviorSubject to allow reactive subscriptions to favourites
  private favouritesSubject = new BehaviorSubject<Set<string>>(new Set());

  // Public observable that components can subscribe to
  favourites$ = this.favouritesSubject.asObservable();

  constructor(private toastController: ToastController) {
    // Load stored favourites from localStorage when service is created
    this.loadFavourites();
  }

  /**
   * Adds or removes an item from the favourites set.
   * Also displays a toast message and persists the updated list.
   */
  async toggleFavourite(name: string) {
    if (this.favourites.has(name)) {
      this.favourites.delete(name);
      await this.showToast(`${name} removed from favourites`);
    } else {
      this.favourites.add(name);
      await this.showToast(`${name} added to favourites`);
    }
    // Save updated set and emit the new value
    this.saveFavourites();
    this.favouritesSubject.next(new Set(this.favourites));
  }

  /**
   * Checks if an item is currently in favourites.
   */
  isFavourite(name: string): boolean {
    return this.favourites.has(name);
  }

  /**
   * Returns a new Set containing the current favourites.
   * This prevents external mutation of the internal Set.
   */
  getFavourites(): Set<string> {
    return new Set(this.favourites);
  }

  /**
   * Saves the favourites set to localStorage as a JSON array.
   */
  private saveFavourites() {
    localStorage.setItem('favouriteObjects', JSON.stringify([...this.favourites]));
  }

  /**
   * Loads favourites from localStorage and updates internal state.
   */
  private loadFavourites() {
    const saved = localStorage.getItem('favouriteObjects');
    if (saved) {
      this.favourites = new Set(JSON.parse(saved));
      this.favouritesSubject.next(new Set(this.favourites));
    }
  }

  /**
   * Displays a toast message at the top of the screen.
   */
  private async showToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      cssClass: 'custom-toast',
      position: 'top'
    });
    toast.present();
  }
}
