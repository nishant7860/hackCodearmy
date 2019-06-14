import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ApiService} from '../services/ApiService';
@Component({
  selector: 'app-display-response',
  templateUrl: './display-response.component.html',
  styleUrls: ['./display-response.component.css']
})
export class DisplayResponseComponent implements OnInit {

  constructor(private router: Router, private apiservice: ApiService) { }

  ngOnInit() {
    this.apiservice.progress.next(true);
    // function to set 3 seconds time  to redirect page automatically after 3 seconds to 'manage-leaves' page
    setTimeout(() => {
      this.apiservice.progress.next(true);
      this.router.navigate(['manage-leaves']);
  }, 7000);  // 5s
}

}
