import { Component, OnInit } from '@angular/core'; // Importing Angular core module for component functionality
import { CommonModule } from '@angular/common'; // Importing the common module to access common Angular features
import { FormsModule } from '@angular/forms'; // Importing the forms module to handle form data
import { ModalController } from '@ionic/angular'; // Importing ModalController from Ionic for modal functionalities
import { IonicModule } from '@ionic/angular'; // Importing IonicModule for Ionic components
import { Location } from '@angular/common'; // Importing Location for navigation functionalities
import { FavouriteService } from 'src/app/services/favourite.service'; // Importing a custom service for managing favourites
import { StellariumModalComponent } from '../../stellarium-modal/stellarium-modal.component'; // Importing a component for the Stellarium modal

@Component({
  selector: 'app-astronomical-objects', // Selector to identify the component
  templateUrl: './astronomical-objects.page.html', // Template for the component
  styleUrls: ['./astronomical-objects.page.scss'], // Stylesheet for the component
  standalone: true, // Indicates that this is a standalone component
  imports: [IonicModule, CommonModule, FormsModule] // Specifies imported modules for the component
})
export class AstronomicalObjectsPage implements OnInit { // Class definition for the component

  // Constructor to inject services for modal, location, and favourites management
  constructor(private modalController: ModalController, private location: Location, private favouriteService: FavouriteService) {}

  // Function to navigate back to the previous page
  goBack() {
    this.location.back();
  }

  // On initialization, load saved favourites
  ngOnInit() {
    this.loadFavourites();
  }

  // Function to open the Stellarium modal
  async openStellariumModal() {
    const modal = await this.modalController.create({
      component: StellariumModalComponent, // Specify which component to display inside the modal
      cssClass: 'large-modal' // Custom CSS class for modal styling
    });
    return await modal.present(); // Display the modal
  }

  // Array holding featured astronomical objects with their details
  featuredObjects = [
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
  
  selectedType: string = ''; // Initially no type is selected for filtering

  // Getter to filter featured objects based on selected type
  get filteredObjects() {
    if (!this.selectedType) return this.featuredObjects; // If no type is selected, return all objects
    return this.featuredObjects.filter(obj => obj.type === this.selectedType); // Filter based on selected type
  }

  favourites: Set<string> = new Set(); // Set to store favourite astronomical objects

  // Toggle function to add/remove objects from favourites
  toggleFavourite(name: string) {
    this.favouriteService.toggleFavourite(name); // Call service to toggle favourite status
  }

  // Check if an object is a favourite
  isFavourite(name: string): boolean {
    return this.favouriteService.isFavourite(name); // Call service to check favourite status
  }

  // Save favourites to localStorage
  saveFavourites() {
    localStorage.setItem('favouriteObjects', JSON.stringify([...this.favourites])); // Save favourites to localStorage
  }

  // Load favourites from localStorage
  loadFavourites() {
    const saved = localStorage.getItem('favouriteObjects'); // Retrieve saved favourites
    if (saved) {
      this.favourites = new Set(JSON.parse(saved)); // Parse and load favourites if present
    }
  }

}