import { DataSource } from '@angular/cdk/collections';
import { ApiService } from '../services/ApiService';
import { MatPaginator, MatSort } from '@angular/material';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge, from } from 'rxjs';
import { ClearedLeaves } from '../modals/clearedLeaves';


export class DataTableDataSource extends DataSource<ClearedLeaves> {

  data: ClearedLeaves[];
  public data3: ClearedLeaves[] ;
  
  
  
  ListClearedLeaves: ClearedLeaves[] ;
  constructor(private paginator: MatPaginator, private sort: MatSort, private _freeApiService: ApiService) {
    super();
    this.data = this._freeApiService.getLeavesData();
    this.connect();
   }


  connect(): Observable<ClearedLeaves[]> {

    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];
    //this.paginator.length = this.data.length;
    return merge(...dataMutations).pipe(map(() => {
    return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  disconnect() {}


  private getPagedData(data: ClearedLeaves[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }


  private getSortedData(data: ClearedLeaves[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'FName': return compare(a.FName, b.FName, isAsc);
        case 'FromDate': return compare(a.FromDate, b.FromDate, isAsc);
        default: return 0;
      }
    });
  }
}

function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
