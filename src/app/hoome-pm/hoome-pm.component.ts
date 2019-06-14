import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hoome-pm',
  templateUrl: './hoome-pm.component.html',
  styleUrls: ['./hoome-pm.component.css']
})
export class HoomePmComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    localStorage.setItem('current-page', 'home-pm');
  }

}
