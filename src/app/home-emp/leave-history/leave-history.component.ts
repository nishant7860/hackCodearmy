import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../services/ApiService';
import {ClearedLeaves} from '../../modals/clearedLeaves';
import {PendingLeaves} from '../../modals/pendingLeaves';
@Component({
  selector: 'app-leave-history',
  templateUrl: './leave-history.component.html',
  styleUrls: ['./leave-history.component.css']
})
export class LeaveHistoryComponent implements OnInit {
  clearedLeaves:ClearedLeaves[];
  pendingLeaves:PendingLeaves[];
 public Id;
  constructor(private ApiService :ApiService) { }

  ngOnInit() {

this.Id=localStorage.getItem("ID");

//get pending Leaves for  particular employee
this.ApiService.getPendingLeavesbyId(this.Id).subscribe(
  data=>{this.pendingLeaves=data
 console.log(data);
 console.log(this.pendingLeaves);
 }

 
 
)
console.log(this.pendingLeaves)
//get cleared Leaves for  particular employee
this.ApiService.getClearedLeavesbyId(this.Id).subscribe(
  data=>{this.clearedLeaves=data
 console.log("cleared data",data)
 
 }
)

  }

}
