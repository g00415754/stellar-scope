import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { IonCardContent, IonCardTitle, IonCardHeader, IonCard } from '@ionic/angular/standalone';

@Component({
  selector: 'app-astronomical-objects',
  templateUrl: './astronomical-objects.page.html',
  styleUrls: ['./astronomical-objects.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonCardContent,IonCardTitle,IonCardHeader,IonCard, CommonModule, FormsModule]
})
export class AstronomicalObjectsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
