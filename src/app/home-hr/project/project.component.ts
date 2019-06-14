import { Component, OnInit, Inject } from '@angular/core';
import { Project } from '../../modals/project';
import { EditProject } from '../../modals/EditProject';
import { ApiService } from '../../services/ApiService';
import { HttpClient } from '@angular/common/http';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { Email } from '../../modals/Email';
import { ViewChild } from '@angular/core';
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
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
@NgModule({
  imports: [NgMultiSelectDropDownModule.forRoot(), MatSelectModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class ProjectComponent implements OnInit {
  @ViewChild('projectForm') formValues;
  @ViewChild('editprojectForm') form;
  disableSelect = new FormControl(true);
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};
  dropdownSettings1 = {};
  listEmail: Email[];
  listproject: LiveProjects;
  projectname1: string;
  listEmail1: Email[] = [];
  listEmail2: Email[];
  team?: SelectItem[];
  selectedmembers: string[] = [];
  projectname: string;
  projectmanager: string;
  teammembers: [];
  public getEmails = [];
  project: Project = {
    projectname: null,
    projectmanager: null,
    teammembers: null
  };
  editproject: EditProject = {
    ProjectId: null,
    ExistingMembers: null,
    NewMembers: null,
  };
  lstProjectDetails: Project[];
  selectedValue: any;
  flag = false;
  show=false
  constructor(
    public authService: AuthService,
    private _freeApiService: ApiService,
    private _http: HttpClient,
    private dialogService: DialogService,
    private router: Router
  ) {
      // Function to Get Emails of available Developers
      this._freeApiService.getEmail().subscribe(data => {
        this.listEmail = data;
        console.log(this.listEmail);
      });

      // Function to Get Emails of available Developers
      this._freeApiService.getProject().subscribe(data => {
        this.listproject = data;
        console.log(this.listproject);
      });

      // function to detect if page is Refereshed
      window.addEventListener('beforeunload', function(e) {
        const confirmationMessage =
          'Reloading the page will loose the data from previous page';
        e.returnValue = confirmationMessage; // Gecko, Trident, Chrome 34+
        return confirmationMessage; // Gecko, WebKit, Chrome <34
      });
    }

  ngOnInit() {
    // Storing current page in Local Variable 'current-page'
    localStorage.setItem('current-page', 'project');
    // code to scroll winndow at the top of page
    this.router.events.subscribe(evt => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
    // making Dropdown Settings
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'Email',
      textField: 'Email',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 10,
      allowSearchFilter: true
    };
  }
  // function to select Items
  onItemSelect(item: any) {}
  // Function too Select all  Items
  onSelectAll(items: any) {}
  // Function to get form Data
  saveProject(project: Project) {
    this.dialogService
      .openConfirmDialog('Submit this Project?')
      .afterClosed()
      .subscribe(res => {
        if (res) {
          // Function to Submit Project Details in the databse
          this._freeApiService.UploadProjectDetails(project).subscribe(data => {
            this.lstProjectDetails = data;
          });
          // command to reset the Form
          this.formValues.resetForm();
        }
      });
  }

  fetchEmail() {
    // Function call to Fetch emails of available developers
    this.listEmail1 = this._freeApiService.sendProjectTeamMembers();
  }

  // fetchEmail1() {
  //   // Function call to Fetch emails of available developers
    
  //   this.listEmail2 = this._freeApiService.getProjectTeam(data);
  // }
  focusOut(data) {
    this.flag = false;
    this.selectedValue = data;
    this.flag = true;
    this.listEmail1 = [];
    // adding the avaialble developers in List which is not a Selected Project Manager
    for (const email of this.listEmail) {
      if (email !== this.selectedValue) {
        this.listEmail1.push(email);
      }
    }
    // Function call to save Project Data
    this._freeApiService.saveProjectdata(this.listEmail1);
    // Function to Fetch List of avaialble Employee that doesnot include selected Project Manager
    this.listEmail1 = this._freeApiService.sendProjectTeamMembers();
  }
  focusOut1(data) {
  this.show=true; 
  this.dropdownSettings;
    console.log(data);
     this._freeApiService.getProjectTeam(data).subscribe(data=>{this.listEmail1=data;
    console.log(data)});

    this._freeApiService.getFreeProjectTeam(data).subscribe(data=>{this.listEmail=data;
      console.log(data)});
  
  }

  EditProject(){
    console.log("edit");
    this.form.resetForm();
      
  }
  updateProject(editproject){
    console.log(editproject)
    console.log(editproject.ProjectId)
    console.log(editproject.ExistingMembers)
    console.log(editproject.NewMembers)
    this.dialogService
    .openConfirmDialog('Submit this Project?')
    .afterClosed()
    .subscribe(res => {
      if (res) {
        // Function to Submit Project Details in the databse
        this._freeApiService.updateProject(editproject).subscribe(data => {
          this.lstProjectDetails = data;
        });
        // command to reset the Form
        this.form.resetForm();
      this.show=false;
      console.log("submitted")
      }
    });
  }
  
}