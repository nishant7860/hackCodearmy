import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { DataTableDataSource } from './data-table-datasource';
import { ClearedLeaves } from '../modals/clearedLeaves';
import { ApiService } from '../services/ApiService';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})


export class DataTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  data: DataTableDataSource;
  dataSource: ClearedLeaves[];
  child: any = [];
  public count=localStorage.getItem('ClearedLeaveCount')
  displayedColumns = ['FName', 'LName', 'ClApproved', 'SlApproved', 'ElApproved', 'FromDate', 'ToDate', 'AppliedDate', 'Reason', 'Status'];

  public array: ClearedLeaves[];
  constructor(private _freeApiService: ApiService) {
    this.getClearedLeave();
  }

  getClearedLeave() {
    this._freeApiService.GetClearedLeaves().subscribe(
      data => {
        this._freeApiService.passLeavesData(this.dataSource = data);
        this.child = new DataTableDataSource(this.paginator, this.sort, this._freeApiService);

      });
  }
  ngOnInit() {
    this.data = new DataTableDataSource(this.paginator, this.sort, this._freeApiService);
    this._freeApiService.progress.next(true);
    this.dataSource = this._freeApiService.ListClearedLeaves;
    this._freeApiService.SaveClearedLeaves(this.dataSource);
    this.dataSource = this._freeApiService.displayclearedLeaves();
    this._freeApiService.progress.next(false);
  }
}
