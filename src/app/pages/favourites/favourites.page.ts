import { Component, OnDestroy } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FavouriteService } from 'src/app/services/favourite.service';  // Importing the service for managing favourites
import { Subscription } from 'rxjs';  // Subscription to manage the observable

// Interface defining the structure of an Astronomical Object
interface AstronomicalObject {
  name: string;  // Name of the celestial object
  type: string;  // Type (e.g., planet, star, galaxy, etc.)
  viewTime: string;  // Best time to view the object
  description: string;  // Description of the object
  imageUrl: string;  // Image URL for the object
  link: string;  // Wikipedia link or detailed link for the object
}

@Component({
  selector: 'app-favourites',  // Component selector for the template
  templateUrl: './favourites.page.html',  // The HTML template for the page
  styleUrls: ['./favourites.page.scss'],  // The styles for the page
  standalone: true,  // Mark the component as standalone for independent module
  imports: [IonicModule, CommonModule],  // Import necessary modules
})
export class FavouritesPage implements OnDestroy {
  private favSub: Subscription | undefined;  // Subscription to manage the favourites observable

  // Predefined list of featured astronomical objects
  featuredObjects: AstronomicalObject[] = [
      {
        name: 'Saturn',
        type: 'Planet',
        viewTime: 'Just after sunset',
        description: 'Known for its stunning rings, Saturn is clearly visible in the southern sky this month.',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/c7/Saturn_during_Equinox.jpg',
        link: 'https://en.wikipedia.org/wiki/Saturn'
      },
      {
        name: 'Andromeda Galaxy',
        type: 'Galaxy',
        viewTime: 'Late evening',
        description: 'The nearest major galaxy to the Milky Way. Spot it with binoculars in dark skies.',
        imageUrl: 'assets/Andromeda.jpeg',
        link: 'https://en.wikipedia.org/wiki/Andromeda_Galaxy'
      },
      {
        name: 'Vega',
        type: 'Star',
        viewTime: 'All night',
        description: 'One of the brightest stars in the summer sky and part of the Lyra constellation.',
        imageUrl: 'assets/Star-Vega.png',
        link: 'https://en.wikipedia.org/wiki/Vega'
      },{
        name: 'Jupiter',
        type: 'Planet',
        viewTime: 'Evening',
        description: 'The largest planet in the solar system, often visible with its moons.',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/e2/Jupiter.jpg',
        link: 'https://en.wikipedia.org/wiki/Jupiter'
      },
      {
        name: 'Betelgeuse',
        type: 'Star',
        viewTime: 'Early morning',
        description: 'A red supergiant in Orion, famous for its brightness and variability.',
        imageUrl: 'assets/Betelgeuse.jpeg',
        link: 'https://en.wikipedia.org/wiki/Betelgeuse'
      },
      {
        name: 'Mars',
        type: 'Planet',
        viewTime: 'Pre-dawn',
        description: 'The red planet, currently visible in the early morning hours.',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/02/OSIRIS_Mars_true_color.jpg',
        link: 'https://en.wikipedia.org/wiki/Mars'
      },
      {
        name: 'Orion Nebula',
        type: 'Nebula',
        viewTime: 'Late night',
        description: 'A beautiful star-forming region visible in the Orion constellation.',
        imageUrl: 'assets/Orion Nebula.jpeg',
        link: 'https://en.wikipedia.org/wiki/Orion_Nebula'
      },
      {
        name: 'Polaris',
        type: 'Star',
        viewTime: 'All night',
        description: 'Also known as the North Star, it helps with celestial navigation.',
        imageUrl: 'assets/Polaris.jpeg',
        link: 'https://en.wikipedia.org/wiki/Polaris'
      },
      {
        name: 'The Pleiades',
        type: 'Star Cluster',
        viewTime: 'Early evening',
        description: 'Also known as the Seven Sisters, it’s a dazzling open star cluster.',
        imageUrl: 'assets/Pleiades.jpeg',
        link: 'https://en.wikipedia.org/wiki/Pleiades'
      }
    ];
  ;

  favouriteObjects: AstronomicalObject[] = [];  // Array to store the user's favourite objects

  constructor(private favouriteService: FavouriteService) {}  // Inject the FavouriteService

  // Lifecycle hook triggered when the view is about to enter
  ionViewWillEnter() {
    // Subscribe to the favourites observable from the FavouriteService
    this.favSub = this.favouriteService.favourites$.subscribe((favSet) => {
      // Filter the featuredObjects array to only show those that are in the user's favourites
      this.favouriteObjects = this.featuredObjects.filter((obj) =>
        favSet.has(obj.name)  // Only include objects whose names are in the favourites set
      );
    });
  }

  // Getter to check if there are no favourite objects saved
  get isEmpty(): boolean {
    return this.favouriteObjects.length === 0;  // If the array is empty, return true
  }
  
  // Check if a particular object is marked as a favourite
  isFavourite(name: string): boolean {
    return this.favouriteService.isFavourite(name);  // Use the service to check if the object is a favourite
  }

  // Toggle the favourite status of an object
  toggleFavourite(name: string): void {
    this.favouriteService.toggleFavourite(name);  // Call the service to toggle the favourite status
  }

  // Cleanup the subscription when the component is destroyed
  ngOnDestroy() {
    this.favSub?.unsubscribe();  // Unsubscribe to avoid memory leaks
  }
}