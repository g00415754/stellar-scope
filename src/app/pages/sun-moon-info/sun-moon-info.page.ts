import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NavController } from '@ionic/angular';
import { Capacitor } from '@capacitor/core';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-sun-moon-info',
  templateUrl: './sun-moon-info.page.html',
  styleUrls: ['./sun-moon-info.page.scss'],
  imports: [IonicModule, FormsModule, CommonModule]
})
export class SunMoonInfoPage implements OnInit {
  data: any;
  location: string | null = null;
  apiKey: string = '9aa41f9521c344b889116ecee579f764';

  constructor(private http: HttpClient, private navCtrl: NavController) {}

  goBack() {
    this.navCtrl.back();
  }

  ngOnInit() {
    if (Capacitor.getPlatform() === 'web') {
      navigator.geolocation.getCurrentPosition(
        position => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          this.fetchAstronomyData(lat, lon);
          this.fetchLocationName(lat, lon);
        },
        error => {
          console.error('Browser geolocation failed:', error);
          this.fetchAstronomyData(53.2707, -9.0568); // Galway fallback
          this.location = 'Galway, Ireland';
        }
      );
    } else {
      this.getNativeLocation();
    }
  }

  async getNativeLocation() {
    try {
      const permission = await Geolocation.requestPermissions();
      if (permission.location === 'granted') {
        const coords = await Geolocation.getCurrentPosition();
        const lat = coords.coords.latitude;
        const lon = coords.coords.longitude;
        this.fetchAstronomyData(lat, lon);
        this.fetchLocationName(lat, lon);
      } else {
        console.error('Location permission not granted.');
        this.fetchAstronomyData(53.2707, -9.0568);
        this.location = 'Galway, Ireland';
      }
    } catch (error) {
      console.error('Error getting geolocation:', error);
      this.fetchAstronomyData(53.2707, -9.0568);
      this.location = 'Galway, Ireland';
    }
  }

  fetchAstronomyData(lat: number, lon: number) {
    const url = `https://api.ipgeolocation.io/astronomy?apiKey=${this.apiKey}&lat=${lat}&long=${lon}`;
    this.http.get(url).subscribe(
      res => this.data = res,
      err => console.error('Error fetching astronomy data:', err)
    );
  }

  fetchLocationName(lat: number, lon: number) {
    const url = `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`;
    this.http.get<any>(url).subscribe(
      res => {
        const city = res.address.city || res.address.town || res.address.village || res.address.county;
        const country = res.address.country;
        this.location = `${city}, ${country}`;
      },
      err => {
        console.error('Error fetching location name:', err);
        this.location = 'Your Location'; // fallback label
      }
    );
  }
}
