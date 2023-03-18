import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  images = [ 'github-fill.png', 'xing-fill.png'];

  footerLinks = [ 
   'https://github.com/TijanaCouturier',
   'https://www.xing.com/profile/Tijana_Couturier/cv',
  
  ];

  constructor() { }

  ngOnInit(): void {
  }

  openLink(f) {
  window.open(this.footerLinks[f]);
  }

}
