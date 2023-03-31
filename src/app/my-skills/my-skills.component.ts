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
      img: './assets/img/Portfolio-img/java script.png',
      title: 'JavaScript',
    },
    {
      img: './assets/img/Portfolio-img/angular.png',
      title: 'Angular',
    },
    {
      img: './assets/img/Portfolio-img/Group 205.png',
      title: 'HTML/CSS',
    },
    {
      img: './assets/img/Portfolio-img/Group 226.png',
      title: 'SCRUM',
    },
    {
      img: './assets/img/Portfolio-img/Git-Icon.png',
      title: 'Git',
    },
    {
      img: './assets/img/Portfolio-img/Group 20.png',
      title: 'Design Thinking',
    },
    {
      img: './assets/img/Portfolio-img/api.png',
      title: 'Rest API',
    },
    {
      img: './assets/img/Portfolio-img/thinking.png',
      title: 'Test Automation',
    },
    {
      img: './assets/img/Portfolio-img/database.png',
      title: 'Databases',
    },
    {
      img: './assets/img/Portfolio-img/bootstrap.png',
      title: 'Bootstrap',
    }
  ];

  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }

}
