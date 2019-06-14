import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ApiService} from '../services/ApiService';

@Component({
  selector: 'app-apply-leave-component',
  templateUrl: './apply-leave-component.component.html',
  styleUrls: ['./apply-leave-component.component.css']
})
export class ApplyLeaveComponentComponent implements OnInit {

  constructor(private apiservice: ApiService,private router :Router) { }

  
    ngOnInit() {
      this.apiservice.progress.next(true);
      // function to set 3 seconds time  to redirect page automatically after 3 seconds to 'manage-leaves' page
      setTimeout(() => {
        this.apiservice.progress.next(true);
        this.router.navigate(['leave_balance']);
    }, 3000);  // 5s
  }

}
