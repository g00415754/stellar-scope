import { Component, OnInit } from '@angular/core';      // Import Angular Component and OnInit lifecycle hook
import { CommonModule } from '@angular/common';          // Import CommonModule for common Angular features
import { IonicModule } from '@ionic/angular';            // Import IonicModule to use Ionic UI components
import { HttpClient } from '@angular/common/http';       // Import HttpClient for making HTTP requests
import { NavController } from '@ionic/angular';          // Import NavController for navigation


@Component({
  selector: 'app-astronomical-events',          // The component's selector used in HTML templates
  standalone: true,                             // This component is standalone and does not require an NgModule
  imports: [CommonModule, IonicModule],          // The modules required for this component
  templateUrl: './astronomical-events.page.html', // Path to the HTML template file
  styleUrls: ['./astronomical-events.page.scss'],// Path to the SCSS style file
})
export class AstronomicalEventsPage implements OnInit {

  apod: any;               // Holds the fetched APOD data (image/video, title, explanation)
  error: string | null = null;  // Holds any error message if the data fetch fails


  constructor(private http: HttpClient, private navCtrl: NavController) {}

  goBack() {
    this.navCtrl.back(); // Navigates back to the previous page
  }
  
  ngOnInit() {
    this.fetchAstronomyPicture(); // Fetches the APOD data when the component is initialized
  }
  fetchAstronomyPicture() {
    const apiKey = 'BhwdkJ9OphobLdTAAF8Uum1o8WQ5IY1oTzyrNJXT';  // API key for NASA API
    const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`; // Construct the API URL

    this.http.get(url).subscribe({
      next: (data) => {   // On successful API response
        this.apod = data; // Store the fetched data in 'apod' property
        this.error = null; // Clear any previous error messages
      },
      error: (err) => {   // On API error response
        this.error = 'Failed to load data from NASA API.';  // Set the error message
        console.error(err); // Log the error for debugging purposes
      }
    });
  }
}
