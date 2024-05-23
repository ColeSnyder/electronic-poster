import { Component, OnInit, OnDestroy } from '@angular/core';
import quotes from '../../assets/quotes/quotes.json';
import { weatherCodes } from '../weather/weatherCodes';
import { Router } from '@angular/router';

interface Quote {
  quote: string,
  author: string
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
   currentTheme: string = 'classic';
   quotes: Quote[] = quotes;
   displayedQuote: string = "";
   author: string = "";
   quoteCounter: number = 0;
   codes: weatherCodes = new weatherCodes();
   videoSource: string = "./assets/photos/vids/sun.mp4";
   currentWeatherCode: number = 0;
   temperature: string = "0";
   windSpeed: string = "0";
   condition: string = "";
   time: number = 0;
   latitude: number = 0;
   longitude: number = 0;
   hour: string = "";
   minutes: string = "";
   quoteRotation: number = 0;

   classicThemeLinkText: string = 'Classic';
   cyberpunkThemeLinkText: string = 'CyberPunk';
   spaceThemeLinkText: string = 'Space';
   colorThemeLinkText: string = 'Color';

   classicThemeDeselected: string = 'Classic';
   cyberpunkThemeDeselected: string = 'CyberPunk';
   spaceThemeDeselected: string = 'Space';
   colorThemeDeselected: string = 'Color';

   classicThemeSelected: string = '> Classic';
   cyberpunkThemeSelected: string = '> CyberPunk';
   spaceThemeSelected: string = '> Space';
   colorThemeSelected: string = '> Color';


   constructor(private router: Router) {

   }

   async ngOnInit(): Promise<void> {
      this.setClassicTheme();

      this.changeQuote();

      setInterval(() => this.display_time(), 1000);
      setInterval(() => this.changeQuote(), 60000);
   }

   // ngOnDestroy(): void {
   //    this.displayedQuote = "";
   //    this.author = "";
   //    this.quoteCounter = 0;
   //    this.codes = new weatherCodes();
   //    this.videoSource = "";
   //    this.currentWeatherCode = 0;
   //    this.temperature = "0";
   //    this.windSpeed = "0";
   //    this.condition = "";
   //    this.time = 0;
   //    this.latitude = 0;
   //    this.longitude = 0;
   //    this.hour = "";
   //    this.minutes = "";
   //    this.quoteRotation = 0;
   // }

   // openai = new OpenAIApi(this.configuration);

   // async getFakeQuote(author: string) {
   //    const completion = await this.openai.createCompletion({
   //       model: "text-davinci-003",
   //       prompt: "Generate a fake " + author + " quote without the author contribution",
   //       max_tokens: 400
   //    });

   //    return completion;
   // }

   async changeQuote() {
      var author = document.getElementById("authorBoxx");

      // if (this.quoteRotation == 5) {
      //    var authorList = ["Terrance Mckenna", "Alan Watts", "Jack London", "Cixin Liu"];
      //    var selectedAuthor = authorList[authorList.length * Math.random() | 0]
      //    var fakeQuote = (await this.getFakeQuote(selectedAuthor)).data.choices[0].text!;
      //    this.displayedQuote = fakeQuote.substring(3, fakeQuote.length-1);
      //    this.author = "AI " + selectedAuthor;
      //    author!.style.backgroundImage = "url('./assets/photos/fakebotboi.jpg')";
      //    this.quoteRotation = 0;
      //    return;
      // }

      var newQuoteIndex = Math.floor((Math.random() * this.quotes.length));
      this.displayedQuote = this.quotes[newQuoteIndex].quote;
      this.author = this.quotes[newQuoteIndex].author;
      this.quoteCounter++;

      if(this.currentTheme == 'classic') {
      switch (this.quotes[newQuoteIndex].author) {
         case "Alan Watts": {
            author!.style.backgroundImage = "url('./assets/photos/alanWatts.jpg')";
            break;
         }
         case "Terrance Mckenna": {
            author!.style.backgroundImage = "url('./assets/photos/terranceMckenna.jpg')";
            break;
         }
         case "Carl Sagan": {
            author!.style.backgroundImage = "url('./assets/photos/carl-sagan.png')";
            break;
         }
         case "Isaac Asimov": {
            author!.style.backgroundImage = "url('./assets/photos/isaac-asimov.png')";
            break;
         }
         default: {
            author!.style.backgroundImage = "url('./assets/photos/fakebotboi.jpg')";
            break;
         }
      }
      } else if(this.currentTheme == 'cyberpunk') {
         switch (this.quotes[newQuoteIndex].author) {
            case "Alan Watts": {
               author!.style.backgroundImage = "url('./assets/photos/cyberpunk-alan-watts.png')";
               break;
            }
            case "Terrance Mckenna": {
               author!.style.backgroundImage = "url('./assets/photos/cyberpunk-terrance-mckenna.png')";
               break;
            }
            case "Carl Sagan": {
               author!.style.backgroundImage = "url('./assets/photos/cyberpunk-carl-sagan.png')";
               break;
            }
            case "Isaac Asimov": {
               author!.style.backgroundImage = "url('./assets/photos/cyberpunk-isaac-asimov.png')";
               break;
            }
            default: {
               author!.style.backgroundImage = "url('./assets/photos/fakebotboi.jpg')";
               break;
            }
         }
      } else if(this.currentTheme == 'space') {
         switch (this.quotes[newQuoteIndex].author) {
            case "Alan Watts": {
               author!.style.backgroundImage = "url('./assets/photos/space-alan-watts.png')";
               break;
            }
            case "Terrance Mckenna": {
               author!.style.backgroundImage = "url('./assets/photos/space-terrance-mckenna.png')";
               break;
            }
            case "Carl Sagan": {
               author!.style.backgroundImage = "url('./assets/photos/space-carl-sagan.png')";
               break;
            }
            case "Isaac Asimov": {
               author!.style.backgroundImage = "url('./assets/photos/space-isaac-asimov.png')";
               break;
            }
            default: {
               author!.style.backgroundImage = "url('./assets/photos/fakebotboi.jpg')";
               break;
            }
         }
      } else if(this.currentTheme == 'color') {
         switch (this.quotes[newQuoteIndex].author) {
            case "Alan Watts": {
               author!.style.backgroundImage = "url('./assets/photos/color-alan-watts.png')";
               break;
            }
            case "Terrance Mckenna": {
               author!.style.backgroundImage = "url('./assets/photos/color-terrance-mckenna.png')";
               break;
            }
            case "Carl Sagan": {
               author!.style.backgroundImage = "url('./assets/photos/color-carl-sagan.png')";
               break;
            }
            case "Isaac Asimov": {
               author!.style.backgroundImage = "url('./assets/photos/color-isaac-asimov.png')";
               break;
            }
            default: {
               author!.style.backgroundImage = "url('./assets/photos/fakebotboi.jpg')";
               break;
            }
         }
      }
   }

   checkCurrentWeather() {
      fetch("https://api.openweathermap.org/data/2.5/weather?lat=" + this.latitude + "&lon=" + this.longitude + "&units=imperial&appid=c5c5544ec740f0c9a05f7e006a5381ff")
         .then(res => res.json())
         .then(data => this.setBackgroundBasedOnWeatherCode(data))
   }

   setBackgroundBasedOnWeatherCode(weather: any) {
      this.setWeatherUnits(weather);
      var isDaytime: boolean = true;

      this.currentWeatherCode = weather.weather[0].id;
      var currentTime = new Date();
      if (currentTime.getHours() < 7 || currentTime.getHours() > 20)
      {
         isDaytime = false;
      }

      if (this.codes.clearSky.includes(weather.weather[0].id)) {
         this.videoSource = isDaytime ? "./assets/photos/vids/sun.mp4" : "./assets/photos/vids/nightsky.mp4";
      } else if (this.codes.drizzle.includes(weather.weather[0].id)) {
         this.videoSource = isDaytime ? "./assets/photos/vids/drizzle.mp4" : "./assets/photos/vids/nightrain.mp4";
      } else if (this.codes.fog.includes(weather.weather[0].id)) {
         this.videoSource = "./assets/photos/vids/fog.mp4";
      } else if (this.codes.freezingRain.includes(weather.weather[0].id)) {
         this.videoSource = "./assets/photos/vids/freezingrain.mp4";
      } else if (this.codes.partlyCloudy.includes(weather.weather[0].id)) {
         this.videoSource = isDaytime ? "./assets/photos/vids/partlyCloudy.mp4" : "./assets/photos/vids/nightcloudy.mp4";
      } else if (this.codes.rain.includes(weather.weather[0].id)) {
         this.videoSource = isDaytime ? "./assets/photos/vids/rain.mp4" : "./assets/photos/vids/nightlightning.mp4";
      } else if (this.codes.snow.includes(weather.weather[0].id)) {
         this.videoSource = isDaytime ? "./assets/photos/vids/snow.mp4" : "./assets/photos/vids/nightsnow.mp4";
      }
   }

   setWeatherUnits(weather: any) {
      this.temperature = this.roundedToFixed(weather.main.temp, 1);
      this.windSpeed = weather.wind.speed;
      switch (weather.weather[0].id) {
         case 800: {
            this.condition = "Clear Sky"
            break;
         }
         case 801:
         case 802:
         case 803:
         case 804: {
            this.condition = "Partly Cloudy"
            break;
         }
         case 741:
         case 701: {
            this.condition = "Fog"
            break;
         }
         case 300:
         case 301:
         case 302:
         case 310:
         case 311:
         case 312:
         case 313:
         case 314:
         case 321: {
            this.condition = "Drizzle"
            break;
         }
         case 200:
         case 201:
         case 202:
         case 210:
         case 211:
         case 212:
         case 221:
         case 230:
         case 231:
         case 232:
         case 500:
         case 501:
         case 502:
         case 503:
         case 504:
         case 520:
         case 521:
         case 522:
         case 531: {
            this.condition = "Rain"
            break;
         }
         case 511: {
            this.condition = "Freezing Rain"
            break;
         }
         case 600:
         case 601:
         case 602:
         case 611:
         case 612:
         case 613:
         case 615:
         case 616:
         case 620:
         case 621:
         case 622: {
            this.condition = "snow"
            break;
         }
         default: {
            this.condition = "Unknown"
            break;
         }
      }
   }

   display_time() {
      var currentTime = new Date();
      this.hour = currentTime.getHours().toString().length == 2 ? currentTime.getHours().toString() : "0" + currentTime.getHours().toString()
      this.minutes = currentTime.getMinutes().toString().length == 2 ? currentTime.getMinutes().toString() : "0" + currentTime.getMinutes().toString();
   }

   roundedToFixed(input: number, digits: number) {
      var rounder = Math.pow(10, digits);
      return (Math.round(input * rounder) / rounder).toFixed(digits).toString();
   }

   setClassicTheme(){
      if (navigator.geolocation) {
         navigator.geolocation.getCurrentPosition((position) => {
            this.latitude = position.coords.latitude;
            this.longitude = position.coords.longitude;

            var weatherData = this.checkCurrentWeather();
         });

      } else {
         console.log("Geolocation is not available for user");
      }

      this.currentTheme = 'classic'; 
      var x = "";
      this.resetTheme();
      this.classicThemeLinkText = this.classicThemeSelected;

      //set styling on timebox
      var timeBox = document.getElementById('timeBox');
      timeBox?.classList.add('timeBoxClassic');
      //set styling on weatherbox
      var weatherBox = document.getElementById('weatherBox');
      weatherBox?.classList.add('weatherBoxClassic');
      //set styling on quote
      var quoteBox = document.getElementById('quoteBox');
      quoteBox?.classList.add('quoteBoxClassic');
      //set styling on authorBox
      var authorBox = document.getElementById('authorBoxx');
      authorBox?.classList.add('authorBoxClassic');
      //set list of background videos available

      this.changeQuote();
   }

   setCyberPunkTheme(){
      this.currentTheme = 'cyberpunk';
      this.resetTheme();
      this.cyberpunkThemeLinkText = this.cyberpunkThemeSelected;

      //set styling on timebox
      var timeBox = document.getElementById('timeBox');
      timeBox?.classList.add('timeBoxCyberpunk');
      //set styling on weatherbox
      var weatherBox = document.getElementById('weatherBox');
      weatherBox?.classList.add('weatherBoxCyberpunk');
      //set styling on quote
      var quoteBox = document.getElementById('quoteBox');
      quoteBox?.classList.add('quoteBoxCyberpunk');
      //set styling on authorBox
      var authorBox = document.getElementById('authorBoxx');
      authorBox?.classList.add('authorBoxCyberpunk');
      //set list of background videos available
      this.videoSource = "./assets/photos/cyberpunk-vids/cyberpunk-rain.mp4";

      this.changeQuote();
   }

   setSpaceTheme(){
      this.currentTheme = 'space';
      this.resetTheme();
      this.spaceThemeLinkText = this.spaceThemeSelected;

      //set styling on timebox
      var timeBox = document.getElementById('timeBox');
      timeBox?.classList.add('timeBoxSpace');
      //set styling on weatherbox
      var weatherBox = document.getElementById('weatherBox');
      weatherBox?.classList.add('weatherBoxSpace');
      //set styling on quote
      var quoteBox = document.getElementById('quoteBox');
      quoteBox?.classList.add('quoteBoxSpace');
      //set styling on authorBox
      var authorBox = document.getElementById('authorBoxx');
      authorBox?.classList.add('authorBoxSpace');
      //set list of background videos available
      this.videoSource = "./assets/photos/space-vids/space-planet.mp4";

      this.changeQuote();
   }

   setColorTheme(){
      this.currentTheme = 'color';
      this.resetTheme();
      this.colorThemeLinkText = this.colorThemeSelected;

      //set styling on timebox
      var timeBox = document.getElementById('timeBox');
      timeBox?.classList.add('timeBoxColor');
      //set styling on weatherbox
      var weatherBox = document.getElementById('weatherBox');
      weatherBox?.classList.add('weatherBoxColor');
      //set styling on quote
      var quoteBox = document.getElementById('quoteBox');
      quoteBox?.classList.add('quoteBoxColor');
      //set styling on authorBox
      var authorBox = document.getElementById('authorBoxx');
      authorBox?.classList.add('authorBoxColor');
      //set list of background videos available
      this.videoSource = "./assets/photos/color-vids/color.mp4";

      this.changeQuote();
   }

   resetTheme() {
      var timeBox = document.getElementById('timeBox');
      timeBox?.classList.remove('timeBoxClassic');
      timeBox?.classList.remove('timeBoxSpace');
      timeBox?.classList.remove('timeBoxCyberpunk');
      timeBox?.classList.remove('timeBoxColor');

      var weatherBox = document.getElementById('weatherBox');
      weatherBox?.classList.remove('weatherBoxClassic');
      weatherBox?.classList.remove('weatherBoxSpace');
      weatherBox?.classList.remove('weatherBoxCyberpunk');
      weatherBox?.classList.remove('weatherBoxColor');

      var quoteBox = document.getElementById('quoteBox');
      quoteBox?.classList.remove('quoteBoxClassic');
      quoteBox?.classList.remove('quoteBoxSpace');
      quoteBox?.classList.remove('quoteBoxCyberpunk');
      quoteBox?.classList.remove('quoteBoxColor');

      var authorBox = document.getElementById('authorBoxx');
      authorBox?.classList.remove('authorBoxClassic');
      authorBox?.classList.remove('authorBoxSpace');
      authorBox?.classList.remove('authorBoxCyberpunk');
      authorBox?.classList.remove('authorBoxColor');

      this.classicThemeLinkText = this.classicThemeDeselected;
      this.cyberpunkThemeLinkText = this.cyberpunkThemeDeselected;
      this.spaceThemeLinkText = this.spaceThemeDeselected;
      this.colorThemeLinkText = this.colorThemeDeselected;
   }
}