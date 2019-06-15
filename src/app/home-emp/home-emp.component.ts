import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-emp',
  templateUrl: './home-emp.component.html',
  styleUrls: ['./home-emp.component.css']
})
export class HomeEmpComponent implements OnInit {
 flag=false; 
  constructor() { }

  ngOnInit() {
  }
  Check(feed){
    this.flag=true
    console.log(feed.Title);
    
  }
}
