import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  aboutMe = [
    'I come from Serbia',
    'In Februar 2022 began to study Developer Akademie in Munich',
    'I live in Offenburg, Germany',
    'I am Frontend developer in Munich'
  ]
  postImg = [
    'assets/img/Portfolio-img/walk-line.png',
    'assets/img/Portfolio-img/heart-line.png',
    'assets/img/Portfolio-img/search-line.png',
    'assets/img/Portfolio-img/flight-takeoff-line.png',
    
  ]
}
