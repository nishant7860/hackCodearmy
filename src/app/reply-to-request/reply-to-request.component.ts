import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/ApiService';
import { PendingLeaves } from '../modals/pendingLeaves';
import { DialogService } from '../shared/services/dialog.service';
import { Router } from '@angular/router';
import { ClearedLeaves } from '../modals/clearedLeaves';
import { PlatformLocation } from '@angular/common';
import { AuthService } from '../services/auth.service';
import{LeaveData}from '../modals/LeaveData'
//let leavesdata;



@Component({
  selector: 'app-reply-to-request',
  templateUrl: './reply-to-request.component.html',
  styleUrls: ['./reply-to-request.component.css']
})

export class ReplyToRequestComponent implements OnInit {
 Data:LeaveData;
  show :boolean=false;
  flag=true;
  Fname?: String;
  Lname?: String;
  Clapplied?: String;
  Slapplied?: String;
  Elapplied?: String;
  FromDate?: String;
  Todate?: String;
  AppliedDate?: String;
  reason?: String;
  LID?: number;

  ListPendingLeaves: PendingLeaves[];
  ListClearedLeaves: ClearedLeaves[];
  constructor(public authService: AuthService,location: PlatformLocation, private router: Router, private _freeApiService: ApiService,
    private dialogService: DialogService) {

      // if(leavesdata.FName==null){
      //   this.router.navigate(['manage-leaves']);
      // }

    }


  response: any;
  errorMessage: any;
  ngOnInit() {
     // Storing current page in Local Variable 'current-page'
    localStorage.setItem('current-page','manage-leaves');


    this.flag=false;
    // Function call to Fetch Leaves Data of Employee
    this.Data = this._freeApiService.getData();
    this.Fname = this.Data.FName;
    this.Lname = this.Data.LName;
    this.Clapplied = this.Data.CLApplied;
    this.AppliedDate = this.Data.AppliedDate;
    this.Elapplied = this.Data.ELApplied;
    this.Slapplied = this.Data.SLApplied;
    this.FromDate = this.Data.FromDate;
    this.Todate = this.Data.ToDate;
    this.reason = this.Data.Reason;
    this.LID = this.Data.LID;
    this.show=true;



  }
 // Function to get response from HR whether Leave is Approved or not
  applyLeave(id: number, status: boolean) {
    if (status) {
      this.dialogService.openConfirmDialog('Are you sure to Approve this leave?')
        .afterClosed().subscribe(res => {
          if (res) {
           // Function call to Approve the Leave Request
            this._freeApiService.ApproveRequest(id, status).subscribe(
              response => this.response = response
            );
            // Function call to inform that Leave Request is Cleared
            this._freeApiService.requestcleared();

          }
        });

    } else {

      this.dialogService.openConfirmDialog('Are you sure to Reject this leave?')
        .afterClosed().subscribe(res => {

          if (res) {
            // Function call to Reject the Leave of Employee
            this._freeApiService.ApproveRequest(id, status).subscribe(
              response => this.response = response

              );
              // Function call to inform that Leave Request is Cleared
            this._freeApiService.requestcleared();

          }
        });
    }
  }
}
