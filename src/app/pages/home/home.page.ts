import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton } from '@ionic/angular/standalone';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonButton, CommonModule, FormsModule]
})
export class HomePage implements OnInit {

  constructor(private router: Router) { }

   // Function for navigating to Astronomical Objects page
   goToAstroObjects() {
    this.router.navigate(['/astronomical-objects']);
  }

  // Function for navigating to Astronomical Events page
  goToAstronomicalEvents() {
    this.router.navigate(['/astronomical-events']);
  }

  // Function for navigating to Sun & Moon Info page
  goToSunMoonInfo() {
    this.router.navigate(['/sun-moon-info']);
  }

  ngOnInit() {
  }

}
