import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonBackButton } from '@ionic/angular/standalone';
import { IonCard, IonCardContent, IonCardTitle, IonCardHeader, IonCol, IonRow, IonGrid  } from '@ionic/angular/standalone';

@Component({
  selector: 'app-astronomical-objects',
  templateUrl: './astronomical-objects.page.html',
  styleUrls: ['./astronomical-objects.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle,IonCol, IonRow, IonGrid, IonToolbar, IonBackButton, IonCard,IonCardTitle,IonCardHeader,  IonCardContent, CommonModule, FormsModule]
})
export class AstronomicalObjectsPage {
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
  
}