import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  pages = [
    {
      title: 'First page blank',
      icon: 'cafe-outline',
      url: '/menu/first'
    },
    {
      title: 'Second page blank',
      icon: 'water-outline',
      url: '/menu/second'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
