import { Component, OnInit } from '@angular/core';
import { NewJoinee } from '../../modals/newjoinee';
import { DatePipe } from '@angular/common';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Register } from 'src/app/modals/Register';
import { ApiService } from '../../services/ApiService';
import { Email } from '../../modals/Email';
import { DialogService } from 'src/app/shared/services/dialog.service';
import { ViewChild } from '@angular/core';
import{Designation} from '../../modals/Designation'
import { Router, NavigationEnd } from '@angular/router';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-newjoinee',
  templateUrl: './newjoinee.component.html',
  styleUrls: ['./newjoinee.component.css']
})
export class NewJoineeComponent implements OnInit {
  maxDate: Date;
  minDate: Date;
  designation:Designation[];
  
  
  constructor(private _freeApiService: ApiService,
    private _http: HttpClient,
    public datepipe: DatePipe,
    private dialogService: DialogService,
    private router: Router,
    public authService: AuthService
  ) {
    this.maxDate = new Date();
    this.maxDate.setDate(this.maxDate.getDate() + 0);
    this.minDate = new Date(2019, 0, 1)
  }
  @ViewChild('newjoineeForm') formValues;
  listEmail: Email[];
  flag = 0;
  public getEmail = [];
  firstname: string;
  lastname: string;
  newjoinee: NewJoinee = {
    id: null,
    firstname: null,
    lastname: null,
    gender: null,
    email: ' ',
    phonenumber: null,
    dateofjoining: new Date(),
    role: null,
  };
  objPostRegister: Register[];
  ngOnInit() {
     // Storing current page in Local Variable 'current-page'
    localStorage.setItem('current-page', 'newjoinee');
    // code to scroll the the window to top
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });

    this._freeApiService.getDesignation().subscribe(data=>{this.designation=data
    console.log(this.designation)})
    // Function call to get Email of Employees that are Regsitered in database
    }
  saveEmployee(newJoinee: NewJoinee): void {
    this.dialogService.openConfirmDialog('Submit this Employee?')
      .afterClosed().subscribe(res => {
        if (res) {
                   // If statement to check if employee already exist in database or not
          if (this.flag === 0) {
            const value = this.datepipe.transform(newJoinee.dateofjoining, 'MM-dd-yyyy');
            const oRegister = new Register();
            oRegister.FName = newJoinee.firstname;
            oRegister.LName = newJoinee.lastname;
            oRegister.Email = newJoinee.email;
            oRegister.Designation = newJoinee.role;
            oRegister.Phone = newJoinee.phonenumber.toString();
    
    
            // Function call to register the Employee Data on Database
            this._freeApiService.RegisterNewJoinee(oRegister, value).subscribe(
              data => this.objPostRegister = data
            );
            // // Command to reset form once data is submitted in database
            this.formValues.resetForm();
          } else {
             window.alert('Data already exist in Database');
          }
        }
      });
  }
}
