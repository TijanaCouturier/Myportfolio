import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-links',
  templateUrl: './menu-links.component.html',
  styleUrls: ['./menu-links.component.scss']
})
export class MenuLinksComponent implements OnInit {

  @Input() startColor = true;
  public isClicked: boolean = true;
  public mobile: boolean = true;
  active = 0;

  constructor() { }

  ngOnInit(): void {
  
  }
  public openMenu() {
    this.isClicked = false;
  }

  
  public closeMenu() {
    this.isClicked = true;
  }


  oK(active){
    if (this.active == active){
      this.active = 0;
    }
    else {
      this.active = active;
      this.startColor = false;
    }
  }
}
