import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import{FillFeedback}from '../../modals/fillFeedback'

import { Project } from '../../modals/project';
import { EditProject } from '../../modals/EditProject';
import { ApiService } from '../../services/ApiService';
import { HttpClient } from '@angular/common/http';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { Email } from '../../modals/Email';
import { DialogService } from 'src/app/shared/services/dialog.service';
import { Router, NavigationEnd } from '@angular/router';
import { MatSelectModule } from '@angular/material';
import { AuthService } from '../../services/auth.service';
import{LiveProjects} from '../../modals/LiveProjects'
import { FormControl } from '@angular/forms';
export interface DialogData {
  name: string;
}
@Component({
  selector: 'app-givefeedback',
  templateUrl: './givefeedback.component.html',
  styleUrls: ['./givefeedback.component.css']
})
export class GivefeedbackComponent implements OnInit {
  @ViewChild('feedback') formValues;
 response;
  feedback: FillFeedback = {
    Title: null,
    Venue: null,
    Date: null,
    wqstar:null,
    comstar:null,
    tsstar:null,
    prostar:null,
    attstar:null,
    coostar:null,
    crestar:null,
    takstar:null,
    cowstar:null,
    depstar:null,
    comment:null,
    sender:null,
  employee:null };
    listEmail: Email[];
    dropdownList = [];
    selectedItems = [];
    dropdownSettings = {};
 
    public getEmails = [];  
    constructor(private _freeApiService: ApiService,  private dialogService: DialogService,
      ) { 
 // Function to Get Emails of available Developers
 this._freeApiService.empdetails().subscribe(data => {
  this.listEmail = data;
  console.log(this.listEmail);
});
        
      }

  ngOnInit() {
    
  
      }
      
      fillfeedback(feedback){
        this.dialogService
        .openConfirmDialog('Submit this Project?')
        .afterClosed()
        .subscribe(res => {
          if (res) {
            var feed=new FillFeedback();
            feed.Date=feedback.Date;
            feed.Venue=feedback.Venue;
            feed.Title=feedback.Title;
            feed.attstar=feedback.attstar
            feed.comment=feedback.comment
            feed.comstar=feedback.comstar
            feed.depstar=feedback.depstar
            feed.employee=feedback.employee
            feed.prostar=feedback.prostar
            feed.sender=localStorage.getItem('email')
            feed.coostar=feedback.coostar
            feed.crestar=feedback.crestar
            feed.takstar=feedback.takstar
            feed.tsstar=feedback.tsstar
            feed.wqstar=feedback.wqstar
            feed.cowstar=feedback.cowstar
           feedback.sender=localStorage.getItem('email')
           console.log(feed)
            // Function to Submit Project Details in the databse
            this._freeApiService.saveFeedback(feed).subscribe(data => {
              this.response = data;
            });
            // command to reset the Form
            this.formValues.resetForm();
          }
        });
      }  
     
}