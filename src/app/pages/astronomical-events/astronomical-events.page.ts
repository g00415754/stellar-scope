import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-astronomical-events',
  standalone: true,
  imports: [CommonModule, IonicModule],
  templateUrl: './astronomical-events.page.html',
  styleUrls: ['./astronomical-events.page.scss'],
})
export class AstronomicalEventsPage implements OnInit {
  apod: any;
  error: string | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchAstronomyPicture();
  }

  fetchAstronomyPicture() {
    const apiKey = 'BhwdkJ9OphobLdTAAF8Uum1o8WQ5IY1oTzyrNJXT';
    const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

    this.http.get(url).subscribe({
      next: (data) => {
        this.apod = data;
        this.error = null;
      },
      error: (err) => {
        this.error = 'Failed to load data from NASA API.';
        console.error(err);
      }
    });
  }
}
