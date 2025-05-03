import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Location } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  imports: [IonicModule, CommonModule, FormsModule]
})
export class HomePage {

  todayDate: Date = new Date();
  eventOfTheDay!: string;
  zodiacSignOfTheDay!: string;

  // Define arrays for events and zodiac signs
  astrologicalEvents: string[] = [
    'Full Moon in Scorpio! A time for emotional breakthroughs.',
    'Mercury Retrograde ends today. Time for new beginnings.',
    'New Moon in Taurus! Perfect for setting intentions for growth.',
    'Venus enters Gemini! Expect more socializing and communication.'
  ];

  zodiacSigns: string[] = [
    'Aries - Take bold actions today, trust your instincts.',
    'Taurus - Focus on stability and practicality today.',
    'Gemini - Embrace change and new ideas today.',
    'Cancer - A good time to reflect on your emotional needs.',
    'Leo - Step into the spotlight and share your creativity.',
    'Virgo - Focus on organization and personal growth.',
    'Libra - Balance your relationships and personal needs.',
    'Scorpio - Embrace transformation and personal growth.',
    'Sagittarius - Adventure calls, take a leap of faith.',
    'Capricorn - Focus on your career and long-term goals.',
    'Aquarius - Innovation and new ideas will guide you today.',
    'Pisces - Embrace intuition and emotional clarity.'
  ];

  constructor(private navCtrl: NavController, private location: Location) {
    this.getRandomEventAndZodiac();
  }

  getTimeOfDay(): string {
    const hours = new Date().getHours();
    if (hours < 12) return 'Morning';
    else if (hours < 18) return 'Afternoon';
    else return 'Evening';
  }

  // Randomly select an event and zodiac sign
  getRandomEventAndZodiac() {
    const randomEventIndex = Math.floor(Math.random() * this.astrologicalEvents.length);
    const randomZodiacIndex = Math.floor(Math.random() * this.zodiacSigns.length);

    this.eventOfTheDay = this.astrologicalEvents[randomEventIndex];
    this.zodiacSignOfTheDay = this.zodiacSigns[randomZodiacIndex];
  }
}
