import { Component, OnInit , ViewChild} from '@angular/core';
// import {FormCanDeactivate} from '../../form-can-deactivate/form-can-deactivate';
import { HolidayList } from '../../modals/holidaylist';
import { ApiService } from '../../services/ApiService';
import { DialogService } from 'src/app/shared/services/dialog.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormGroup } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Holiday } from 'src/app/modals/Holiday';
import { Router, NavigationEnd } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-holiday-list',
  templateUrl: './holiday-list.component.html',
  styleUrls: ['./holiday-list.component.css']
})
export class HolidayListComponent implements OnInit {
  @ViewChild('holidaylistForm') formValues;
  datePickerConfig: Partial<BsDatepickerConfig>;

  holidayform: FormGroup;
  holidaylist: HolidayList = {
    date: new Date(),
    occasion: '',
  };
  ListHoliday: Holiday[];
  objPost: Holiday[];
  constructor(public authService: AuthService,
    private _freeApiService: ApiService,
    private _http: HttpClient,
    public datepipe: DatePipe,
    private dialogService: DialogService,
    private router: Router
  ) {
    // Storing current page in Local Variable 'current-page'
    localStorage.setItem('current-page', 'holiday-list');
    this.authService.isLoggedInSource.next(true);
    // Event call on Pressing Refresh button
    window.addEventListener('beforeunload', function (e) {
      const confirmationMessage = 'Reloading the page will loose the data from previous page';
      e.returnValue = confirmationMessage; // Gecko, Trident, Chrome 34+
      return confirmationMessage; // Gecko, WebKit, Chrome <34
    });
    // max and min date validation
    this.datePickerConfig = Object.assign({}, {
      containerClass: 'theme-dark-blue',
      showWeekNumbers: false,
      minDate: new Date(2019, 0, 1),
      maxDate: new Date(2019, 11, 31),
    });
  }
  ngOnInit() {
  }
  saveholiday(holidaylist: HolidayList): void {
    this.dialogService.openConfirmDialog('Submit this Holiday?')
      .afterClosed().subscribe(res => {
        if (res) {
          const HolidayListObject = new Holiday;
          HolidayListObject.Date = this.datepipe.transform(holidaylist.date, 'MM-dd-yyyy');
          HolidayListObject.Description = holidaylist.occasion;
          // Function call to upload Holiday List in the Database
          this._freeApiService.uploadHoliday(HolidayListObject).subscribe(
            data => this.objPost = data
          );
          // command to reset form once data is sent in the database
          this.formValues.resetForm();
        }
      });
  }
}
