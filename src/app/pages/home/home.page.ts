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
  astrologyTipOfTheDay!: string;

  // Array of astrology tips
  astrologyTips: string[] = [
    "Focus on grounding activities today, especially for earth signs.",
    "It's a good day to start new projects, especially for fire signs.",
    "Meditate and reflect on your goals today.",
    "Avoid impulsive decisions, especially if you're a water sign.",
    "Today is a great day for self-care and introspection.",
    "Look for balance in your relationships today, especially for air signs.",
    "Take time to recharge today, especially if you're an earth sign.",
    "Trust your intuition today, especially for water signs."
  ];


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
  
  // Array for Quick Links
  quickLinks: Array<any> = [
    {
      title: 'Sun and Moon Info',
      subtitle: 'Learn about the sun and moon positions today.',
      link: '/sun-moon-info',
      icon: '/assets/moon.svg',
    },
    {
      title: 'Astronomy of the Day',
      subtitle: 'Discover NASAs image of the day.',
      link: '/astronomical-objects',
      icon: '/assets/nasa.svg',
    },
    {
      title: 'Explore Space',
      subtitle: 'Learn about the universe and all its many floating objects.',
      link: '/astronimical-events',
      icon: '/assets/space.svg',
    },
    {
      title: 'Favourites',
      subtitle: 'View all your saved astronomical favourites.',
      link: '/favourites',
      icon: '/assets/save.svg',
    }
  ];
  constructor(private navCtrl: NavController, private location: Location) {
    this.getRandomEventAndZodiac();
    this.astrologyTipOfTheDay = this.getRandomTip();
  }

  // Navigate to the link
  goToPage(pageLink: string) {
    this.navCtrl.navigateForward(pageLink);
  }

  getTimeOfDay(): string {
    const hours = new Date().getHours();
    if (hours < 12) return 'Morning';
    else if (hours < 18) return 'Afternoon';
    else return 'Evening';
  }

   // Method to get a random tip from the array
   getRandomTip(): string {
    const randomIndex = Math.floor(Math.random() * this.astrologyTips.length);
    return this.astrologyTips[randomIndex];
  }
  // Randomly select an event and zodiac sign
  getRandomEventAndZodiac() {
    const randomEventIndex = Math.floor(Math.random() * this.astrologicalEvents.length);
    const randomZodiacIndex = Math.floor(Math.random() * this.zodiacSigns.length);

    this.eventOfTheDay = this.astrologicalEvents[randomEventIndex];
    this.zodiacSignOfTheDay = this.zodiacSigns[randomZodiacIndex];
  }
}
