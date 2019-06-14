import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { ApiService } from './services/ApiService';
import { Router, NavigationEnd } from '@angular/router';
import { OnDestroy} from '@angular/core';
import { MessagingService } from "./shared/messaging.service";
import {ToasterService } from './toster-service.service';
import { HostListener } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
 
})

export class AppComponent implements OnInit, OnDestroy {
  public Progress;
  title = 'NewLAP';
  public status;
  public designation;
  message;
  
  constructor(private toasterService:ToasterService, private messagingService: MessagingService,public ApiService:ApiService,public authService: AuthService, private router: Router) {
  
      }
      @HostListener('window:popstate', ['$event'])
      onPopState(event) {
        if ((localStorage.getItem('email')!=null)){

this.router.navigate(['home-hr'])
        }   }
      ngOnDestroy() { 
        console.log("distroyed")
       
     }  

// tslint:disable-next-line: use-life-cycle-interface
   ngOnInit() {
    
    if((this.authService.isLoggedIn) )
   { 
    
//this.router.navigate(['home-hr'])
window.location.reload
console.log("logged in")
this.router.navigate([localStorage.getItem('current-page')])
console.log(localStorage.getItem('current-page'))
   
}

//variable to check if data is loading or not. Used to show Spinner
   this.Progress=this.ApiService.progress;
    this.status = this.authService.LoggedInEmail;
    // If Logged in Source Object is null then add the value 'true' in
    // behavioural object. it is basically to store value of loggedinSource even on refreshing of window

    if ((this.authService.isLoggedInSource.value != null)) {
      this.authService.isLoggedInSource.next(true);
    }

    // get loggedin Email for Local Storage Variable 'email'
    const email = localStorage.getItem('email');
    // get designation of Employee from Local Storage Variable 'designation'
    this.designation = localStorage.getItem('designation');
    // If Logged in Email Object is null then add the value of Local variable 'email'
    // in behavioural object. it is basically to store value of loggedinemail even on refreshing of window
    if (!this.authService.LoggedInEmail.value) {
      this.authService.LoggedInEmail.next(email);
    }
   
  
  }
}
