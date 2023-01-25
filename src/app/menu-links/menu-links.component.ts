import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-links',
  templateUrl: './menu-links.component.html',
  styleUrls: ['./menu-links.component.scss']
})
export class MenuLinksComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  showMenu(){
   document.getElementById('menu').classList.add('show-overlay-menu');
  }
  closeMenu(){
    document.getElementById('menu').classList.remove('show-overlay-menu');
  }
}
