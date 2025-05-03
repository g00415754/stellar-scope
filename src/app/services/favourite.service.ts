import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class FavouriteService {
  private favourites = new Set<string>();
  private favouritesSubject = new BehaviorSubject<Set<string>>(new Set());

  favourites$ = this.favouritesSubject.asObservable();

  constructor(private toastController: ToastController) {
    this.loadFavourites();
  }

  async toggleFavourite(name: string) {
    if (this.favourites.has(name)) {
      this.favourites.delete(name);
      await this.showToast(`${name} removed from favourites`);
    } else {
      this.favourites.add(name);
      await this.showToast(`${name} added to favourites`);
    }
    this.saveFavourites();
    this.favouritesSubject.next(new Set(this.favourites));
  }
  

  isFavourite(name: string): boolean {
    return this.favourites.has(name);
  }

  getFavourites(): Set<string> {
    return new Set(this.favourites);
  }

  private saveFavourites() {
    localStorage.setItem('favouriteObjects', JSON.stringify([...this.favourites]));
  }

  private loadFavourites() {
    const saved = localStorage.getItem('favouriteObjects');
    if (saved) {
      this.favourites = new Set(JSON.parse(saved));
      this.favouritesSubject.next(new Set(this.favourites));
    }
  }

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
