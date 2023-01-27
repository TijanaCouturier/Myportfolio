import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  footerLinks = [ 
    {
      img: 'github-fill.png', 
      link: 'https://github.com/TijanaCouturier'
    },
    {
      img: 'xing-fill.png', 
      link: 'https://www.xing.com/profile/Tijana_Couturier/cv',
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

  openNewTabs(t) {
  //window.open(this.footerLinks.link[t]);
  }
  


}
