import { DataSource } from '@angular/cdk/collections';
import { ApiService } from '../services/ApiService';
import { MatPaginator, MatSort } from '@angular/material';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge, from } from 'rxjs';
import { PendingLeaves } from '../modals/pendingLeaves';
import { OnInit } from '@angular/core';
import { DataTableComponent } from '../data-table/data-table.component';

/**
 * Data source for the DataTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */

export class SampleTableDataSource extends DataSource<PendingLeaves> {
 totalLength = 0;
 data: PendingLeaves[];
 //public data3: PendingLeaves[];

 ListClearedLeaves: PendingLeaves[];
 constructor(private paginator: MatPaginator, private sort: MatSort, private _freeApiService: ApiService) {
 super();
 this.data = this._freeApiService.getPendingLeavesData();
 this.connect();
 }

 connect(): Observable<PendingLeaves[]> {
 // Combine everything that affects the rendered data into one update
 // stream for the data-table to consume.


const dataMutations = [
 observableOf(this.data),
 this.paginator.page,
 this.sort.sortChange
 ];
 //this.paginator.length = this.data.length;
 //console.log("page", this.paginator.length);
 
 return merge(...dataMutations).pipe(map(() => {
 return this.getPagedData(this.getSortedData([...this.data]));
 }));
 }

 disconnect() { }

 private getPagedData(data: PendingLeaves[]) {
 const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
 return data.splice(startIndex, this.paginator.pageSize);
 }

 // /**
 // * Sort the data (client-side). If you're using server-side sorting,
 // * this would be replaced by requesting the appropriate data from the server.
 // */
 private getSortedData(data: PendingLeaves[]) {
 if (!this.sort.active || this.sort.direction === '') {
 return data;
 }


 }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
 return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}

