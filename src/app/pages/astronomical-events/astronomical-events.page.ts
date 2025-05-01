import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-astronomical-events',
  templateUrl: './astronomical-events.page.html',
  styleUrls: ['./astronomical-events.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class AstronomicalEventsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
