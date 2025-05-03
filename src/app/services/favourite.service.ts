// src/app/services/favourite.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavouriteService {
  private favourites = new Set<string>();
  private favouritesSubject = new BehaviorSubject<Set<string>>(new Set());

  favourites$ = this.favouritesSubject.asObservable();

  constructor() {
    this.loadFavourites();
  }

  toggleFavourite(name: string) {
    if (this.favourites.has(name)) {
      this.favourites.delete(name);
    } else {
      this.favourites.add(name);
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
}
