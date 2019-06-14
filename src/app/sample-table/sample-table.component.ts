import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { SampleTableDataSource } from './sample-table-datasource';
import { PendingLeaves } from '../modals/pendingLeaves';
import { ApiService } from '../services/ApiService';
import { Router } from '@angular/router';
import { PlatformLocation } from '@angular/common';



@Component({
  selector: 'app-sample-table',
  templateUrl: './sample-table.component.html',
  styleUrls: ['./sample-table.component.css']
})
export class SampleTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  data: SampleTableDataSource;
  dataSource: PendingLeaves[];
  child: any = [];
  public count=localStorage.getItem('pendingLeaveCount')
  displayedColumns = ['Request', 'Response'];
  public array: PendingLeaves[];
  constructor(private _freeApiService: ApiService, private router: Router, location: PlatformLocation) {
    this.getPendingLeave();
  }


  getPendingLeave() {
    this._freeApiService.GetPendingLeaves().subscribe(
      (data: any[]) => {
        this._freeApiService.passPendingLeavesData(this.dataSource = data);
        this.child = new SampleTableDataSource(this.paginator, this.sort, this._freeApiService);
      });
  }

  ngOnInit() {
    this.data = new SampleTableDataSource(this.paginator, this.sort, this._freeApiService);

    this._freeApiService.progress.next(true);
    this.dataSource = this._freeApiService.ListPendingLeaves;

    // this.array= this._freeApiService.getLeavesData();
    this._freeApiService.SavePendingLeaves(this.dataSource);
    this.dataSource = this._freeApiService.displayPendingLeaves();
    this._freeApiService.progress.next(false);

  }
  ManageLeaves(reply: any) {
    this._freeApiService.passData(reply);
    this.dataSource = [];
    this.router.navigateByUrl('reply');
  }
}
