import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-links',
  templateUrl: './menu-links.component.html',
  styleUrls: ['./menu-links.component.scss']
})
export class MenuLinksComponent implements OnInit {


  @Input() startColor = true;
  active = 0;

  constructor() { }

  ngOnInit(): void {
  
  }

  showMenu(){
   document.getElementById('menu').classList.add('show-overlay-menu');
  }
  closeMenu(){
    document.getElementById('menu').classList.remove('show-overlay-menu');
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
