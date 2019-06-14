import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/ApiService';
import { Router } from '@angular/router';
import { ClearedLeaves } from '../../modals/clearedLeaves';
import { PendingLeaves } from '../../modals/pendingLeaves';
import { PlatformLocation } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import{LeaveCount}from '../../modals/LeaveCount'
@Component({
  selector: 'app-manage-leaves',
  templateUrl: './manage-leaves.component.html',
  styleUrls: ['./manage-leaves.component.css']
})
export class ManageLeavesComponent implements OnInit {
  ListPendingLeaves: PendingLeaves[];
  ListClearedLeaves: ClearedLeaves[];
  Leavecount:LeaveCount[];
  constructor(public authService: AuthService, private _freeApiService: ApiService, private router: Router, location: PlatformLocation) {

  }
  ngOnInit() {
    // Function call to get Leave Count of Pending and Cleared Leaves
    this._freeApiService.getLeavesCount().subscribe(data=>{this.Leavecount=data
     
    localStorage.setItem('pendingLeaveCount',data.pendingLeaves)
    localStorage.setItem('ClearedLeaveCount',data.clearedLeaves)
  });

   
 
    // Storing current page in Local Variable 'current-page'
    localStorage.setItem('current-page', 'manage-leaves');

    this._freeApiService.progress.next(true);
    // Function call to get data of Employees whose List iis Pending
  this._freeApiService.GetPendingLeaves().subscribe(

  data =>
this.ListPendingLeaves = data
);
// Function call to save Pending Leaves Data of employee
this._freeApiService.SavePendingLeaves(this.ListPendingLeaves);
// Function call to get Pending Leaves Data
this.ListPendingLeaves = this._freeApiService.displayPendingLeaves();
// Function call to Fetch Cleared Leaves data of Employee
this._freeApiService.GetClearedLeaves().subscribe(
  data => this.ListClearedLeaves = data
);
// Function call to save Cleared Leaves
this._freeApiService.SaveClearedLeaves(this.ListClearedLeaves);
// Function call to get Cleared Leaves Data
this.ListClearedLeaves = this._freeApiService.displayclearedLeaves();
this._freeApiService.progress.next(false);
}
  ManageLeaves(reply) {
    // Function call to save Leaves data of particular employee so that it can be used in next component
    this._freeApiService.passData(reply);
    this.ListPendingLeaves = [];
    // command to navigate to 'reply' Coomponent
    this.router.navigateByUrl('reply');
  }
}
