import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-sun-moon-info',
  templateUrl: './sun-moon-info.page.html',
  styleUrls: ['./sun-moon-info.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class SunMoonInfoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
