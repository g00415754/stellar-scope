import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCardHeader, IonButtons } from '@ionic/angular/standalone';
import { IonCard, IonCardContent, IonCardTitle, IonSpinner, IonBackButton } from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NavController } from '@ionic/angular';
import { Capacitor } from '@capacitor/core';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-sun-moon-info',
  templateUrl: './sun-moon-info.page.html',
  styleUrls: ['./sun-moon-info.page.scss'],
  imports: [
    IonContent, IonHeader, IonTitle, IonToolbar, IonCardTitle,
    IonBackButton, IonButtons, IonCardContent, IonSpinner, IonCard,
    IonCardHeader, FormsModule, CommonModule
  ]
})
export class SunMoonInfoPage implements OnInit {
  data: any;
  apiKey: string = '9aa41f9521c344b889116ecee579f764';

  constructor(private http: HttpClient, private navCtrl: NavController) {}

  goBack() {
    this.navCtrl.back();
  }

  ngOnInit() {
    if (Capacitor.getPlatform() === 'web') {
      // Browser geolocation
      navigator.geolocation.getCurrentPosition(
        position => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          this.fetchAstronomyData(lat, lon);
        },
        error => {
          console.error('Browser geolocation failed:', error);
          // Optionally fallback to default coordinates
          this.fetchAstronomyData(53.2707, -9.0568); // Galway
        }
      );
    } else {
      // Native (iOS/Android) geolocation
      this.getNativeLocation();
    }
  }

  async getNativeLocation() {
    try {
      const permission = await Geolocation.requestPermissions();
      if (permission.location === 'granted') {
        const coords = await Geolocation.getCurrentPosition();
        this.fetchAstronomyData(coords.coords.latitude, coords.coords.longitude);
      } else {
        console.error('Location permission not granted.');
        this.fetchAstronomyData(53.2707, -9.0568); // Fallback
      }
    } catch (error) {
      console.error('Error getting geolocation:', error);
      this.fetchAstronomyData(53.2707, -9.0568); // Fallback
    }
  }

  fetchAstronomyData(lat: number, lon: number) {
    const url = `https://api.ipgeolocation.io/astronomy?apiKey=${this.apiKey}&lat=${lat}&long=${lon}`;
    this.http.get(url).subscribe(
      res => this.data = res,
      err => console.error('Error fetching astronomy data:', err)
    );
  }
}
