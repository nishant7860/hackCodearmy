import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-home-hr',
  templateUrl: './home-hr.component.html',
  styleUrls: ['./home-hr.component.css']
})
export class HomeHrComponent implements OnInit {
flag=localStorage.getItem('flag');
  constructor( private router : Router) {
   

}




  ngOnInit() {
    console.log(localStorage.getItem('pm'))
    
     // Storing current page in Local Variable 'current-page'
    localStorage.setItem('current-page', 'home-hr');
if(this.flag!='1'){
  window.location.reload()
  localStorage.setItem('flag','1')
}
  }
  
}
