import { Component, OnInit } from '@angular/core';
import { HolidayList } from '../modals/holidaylist';
import {ApiService} from '../services/ApiService';
import { Holiday } from 'src/app/modals/Holiday';
@Component({
  selector: 'app-display-holiday-list',
  templateUrl: './display-holiday-list.component.html',
  styleUrls: ['./display-holiday-list.component.css']
})
export class DisplayHolidayListComponent implements OnInit {
  ListHoliday: Holiday[];
  public errorMsg;

  constructor(private _freeApiService: ApiService) { }

  ngOnInit() {
    // Storing current page in Local Variable 'current-page'
    localStorage.setItem('current-page', 'display');
    // Function Call to Fetch HolidayList from Database
    this._freeApiService.getHolidayList()
      .subscribe(data => this.ListHoliday = data);
  }
}
