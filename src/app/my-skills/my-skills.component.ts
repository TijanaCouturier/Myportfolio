import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-my-skills',
  templateUrl: './my-skills.component.html',
  styleUrls: ['./my-skills.component.scss']
})
export class MySkillsComponent implements OnInit {

  skills = [
    {
      img: './assets/img/Portfolio-img/html.png',
      title: 'HTML/CSS',
    },
    {
      img: './assets/img/Portfolio-img/java script.png',
      title: 'JavaScript',
    },
    {
      img: './assets/img/Portfolio-img/api.png',
      title: 'Rest API',
    },

    {
      img: './assets/img/Portfolio-img/angular.png',
      title: 'Angular',
    },
    {
      img: './assets/img/Portfolio-img/typescript.svg',
      title: 'Typscript',
    },
    {
      img: './assets/img/Portfolio-img/firebase.svg',
      title: 'Firebase',
    },
    {
      img: './assets/img/Portfolio-img/materialdesign.svg',
      title: 'Material Design',
    },
    {
      img: './assets/img/Portfolio-img/Git-Icon.png',
      title: 'Git',
    },
    {
      img: './assets/img/Portfolio-img/scrum.png',
      title: 'SCRUM',
    }
  ];

  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }

}
