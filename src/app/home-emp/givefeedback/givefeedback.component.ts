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
@Component({
  selector: 'app-givefeedback',
  templateUrl: './givefeedback.component.html',
  styleUrls: ['./givefeedback.component.css']
})
export class GivefeedbackComponent implements OnInit {
  @ViewChild('feedback') formValues;
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
  employee:null };
    fillfeedback(feedback){
      console.log(feedback.wqstar)
      console.log("hello");
      console.log(feedback)
      console.log(feedback.formValues)
      
    }  
    constructor() { }

  ngOnInit() {
    
  
      }
      
   
}