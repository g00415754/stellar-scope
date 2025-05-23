// Angular and Ionic core imports
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NavController } from '@ionic/angular';

// Capacitor plugins for cross-platform support
import { Capacitor } from '@capacitor/core';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-sun-moon-info', // Component selector used in routing
  templateUrl: './sun-moon-info.page.html',
  styleUrls: ['./sun-moon-info.page.scss'],
  imports: [IonicModule, FormsModule, CommonModule] // Required modules
})
export class SunMoonInfoPage implements OnInit {
  data: any; // Holds the astronomy API data
  location: string | null = null; // User-friendly location name
  apiKey: string = '9aa41f9521c344b889116ecee579f764'; // API key for ipgeolocation.io

  constructor(private http: HttpClient, private navCtrl: NavController) {}

  // Navigate back to previous page
  goBack() {
    this.navCtrl.back();
  }

  // Called when component is initialized
  ngOnInit() {
    // Handle web geolocation
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
          // Fallback to Galway if geolocation fails
          this.fetchAstronomyData(53.2707, -9.0568);
          this.location = 'Galway, Ireland';
        }
      );
    } else {
      // Native platform (iOS/Android)
      this.getNativeLocation();
    }
  }

  // Gets device location using Capacitor Geolocation plugin
  async getNativeLocation() {
    try {
      const permission = await Geolocation.requestPermissions(); // Ask for permission
      if (permission.location === 'granted') {
        const coords = await Geolocation.getCurrentPosition(); // Get coordinates
        const lat = coords.coords.latitude;
        const lon = coords.coords.longitude;
        this.fetchAstronomyData(lat, lon);
        this.fetchLocationName(lat, lon);
      } else {
        // Fallback if permission denied
        console.error('Location permission not granted.');
        this.fetchAstronomyData(53.2707, -9.0568);
        this.location = 'Galway, Ireland';
      }
    } catch (error) {
      // Handle geolocation plugin errors
      console.error('Error getting geolocation:', error);
      this.fetchAstronomyData(53.2707, -9.0568);
      this.location = 'Galway, Ireland';
    }
  }

  // Fetches sunrise/sunset and moon data using ipgeolocation.io API
  fetchAstronomyData(lat: number, lon: number) {
    const url = `https://api.ipgeolocation.io/astronomy?apiKey=${this.apiKey}&lat=${lat}&long=${lon}`;
    this.http.get(url).subscribe(
      res => this.data = res, // Store the data
      err => console.error('Error fetching astronomy data:', err)
    );
  }

  // Fetches human-readable location using OpenStreetMap's reverse geocoding
  fetchLocationName(lat: number, lon: number) {
    const url = `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`;
    this.http.get<any>(url).subscribe(
      res => {
        // Get best-available location name from response
        const city = res.address.city || res.address.town || res.address.village || res.address.county;
        const country = res.address.country;
        this.location = `${city}, ${country}`;
      },
      err => {
        console.error('Error fetching location name:', err);
        this.location = 'Your Location'; // Generic fallback
      }
    );
  }
}
