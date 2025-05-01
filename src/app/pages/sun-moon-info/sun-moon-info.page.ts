import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCardHeader, IonButtons } from '@ionic/angular/standalone';
import { IonCard, IonCardContent, IonCardTitle, IonSpinner, IonBackButton } from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-sun-moon-info',
  templateUrl: './sun-moon-info.page.html',
  styleUrls: ['./sun-moon-info.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonCardTitle,IonBackButton, IonButtons, IonCardContent, IonSpinner, IonTitle, IonToolbar, IonCard, IonCardHeader, FormsModule, CommonModule]
})
export class SunMoonInfoPage implements OnInit {
  data: any;

  constructor(private http: HttpClient, private navCtrl: NavController) {}

  // Optionally, you can programmatically navigate back using navCtrl
  goBack() {
    this.navCtrl.back();
  }
  ngOnInit() {
    const lat = 53.2707; // Galway latitude
    const lon = -9.0568; // Galway longitude
    const apiKey = '9aa41f9521c344b889116ecee579f764'; // <-- Paste your key here

    const url = `https://api.ipgeolocation.io/astronomy?apiKey=${apiKey}&lat=${lat}&long=${lon}`;

    this.http.get(url).subscribe(
      res => this.data = res,
      err => console.error('Error fetching astronomy data:', err)
    );
  }
}
