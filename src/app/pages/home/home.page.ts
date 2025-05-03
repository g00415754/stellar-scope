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
  imports: [IonicModule, CommonModule, FormsModule] // Import necessary modules for Ionic and forms
})
export class HomePage {

  todayDate: Date = new Date(); // Store today's date
  eventOfTheDay!: string; // Placeholder for the event of the day
  zodiacSignOfTheDay!: string; // Placeholder for the zodiac sign of the day
  astrologyTipOfTheDay!: string; // Placeholder for the astrology tip of the day

  // Array of astrology tips to display a random tip each day
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

  // Array of astrological events to display a random event of the day
  astrologicalEvents: string[] = [
    'Full Moon in Scorpio! A time for emotional breakthroughs.',
    'Mercury Retrograde ends today. Time for new beginnings.',
    'New Moon in Taurus! Perfect for setting intentions for growth.',
    'Venus enters Gemini! Expect more socializing and communication.'
  ];

  // Array of zodiac signs and their daily advice
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
  
  // Array for quick links that provide easy navigation options
  quickLinks: Array<any> = [
    {
      title: 'Sun and Moon Info',
      subtitle: 'Learn about the sun and moon positions today.',
      link: '/sun-moon-info', // Link to the sun and moon info page
      icon: '/assets/moon.svg', // Icon for the quick link
    },
    {
      title: 'Astronomy of the Day',
      subtitle: 'Discover NASAs image of the day.',
      link: '/astronomical-objects', // Link to the astronomy page
      icon: '/assets/nasa.svg', // Icon for the quick link
    },
    {
      title: 'Explore Space',
      subtitle: 'Learn about the universe and all its many floating objects.',
      link: '/astronimical-events', // Link to the space exploration page
      icon: '/assets/space.svg', // Icon for the quick link
    },
    {
      title: 'Favourites',
      subtitle: 'View all your saved astronomical favourites.',
      link: '/favourites', // Link to the favourites page
      icon: '/assets/save.svg', // Icon for the quick link
    }
  ];

  constructor(private navCtrl: NavController, private location: Location) {
    // Call the methods to set random event and zodiac sign of the day, and astrology tip of the day
    this.getRandomEventAndZodiac();
    this.astrologyTipOfTheDay = this.getRandomTip();
  }

  // Navigate to the specified page when called
  goToPage(pageLink: string) {
    this.navCtrl.navigateForward(pageLink); // Navigate forward to the given page
  }

  // Method to get the current time of day (Morning, Afternoon, Evening)
  getTimeOfDay(): string {
    const hours = new Date().getHours(); // Get the current hour
    if (hours < 12) return 'Morning'; // Morning if before 12 PM
    else if (hours < 18) return 'Afternoon'; // Afternoon if between 12 PM and 6 PM
    else return 'Evening'; // Evening if after 6 PM
  }

  // Method to get a random tip from the astrology tips array
  getRandomTip(): string {
    const randomIndex = Math.floor(Math.random() * this.astrologyTips.length); // Get a random index
    return this.astrologyTips[randomIndex]; // Return the randomly selected tip
  }

  // Method to randomly select an event and zodiac sign from the respective arrays
  getRandomEventAndZodiac() {
    const randomEventIndex = Math.floor(Math.random() * this.astrologicalEvents.length); // Get random event index
    const randomZodiacIndex = Math.floor(Math.random() * this.zodiacSigns.length); // Get random zodiac index

    this.eventOfTheDay = this.astrologicalEvents[randomEventIndex]; // Set the event of the day
    this.zodiacSignOfTheDay = this.zodiacSigns[randomZodiacIndex]; // Set the zodiac sign of the day
  }
}
