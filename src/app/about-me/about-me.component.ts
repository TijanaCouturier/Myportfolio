import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

aboutMe = [
  {
    img: './assets/img/Portfolio-img/walk-line.png',
    title: 'MY JOURNEY BEGAN',
    post: 'I come from Serbia',
  },
  {
    img: './assets/img/Portfolio-img/heart-line.png',
    title:  'FIRST EXPERIENCES',
    post: 'In Februar 2022 began to study Developer Akademie in Munich',
  },
  {
    img: './assets/img/Portfolio-img/search-line.png',
    title: 'MY SEARCH',
    post: 'At Developer Akademie, I coded several websites and apps, alone and in teams.',
  },
  {
    img: './assets/img/Portfolio-img/flight-takeoff-line.png',
    title: 'NEW CHALLENGES',
    post:  'Now I am eager to apply my experience with JavaScript, HTML/CSS, and Angular as a junior developer.'
  }

];
 
  constructor() { }

  ngOnInit(): void {
  }

}