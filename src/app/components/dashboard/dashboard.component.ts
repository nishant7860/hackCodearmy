import { Component, OnInit, NgZone } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ApiService } from '../../services/ApiService';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public detailsList;
  Email: string;
  Designation:string;
  Phone:string;
  constructor(private _freeApiService: ApiService,
    public authService: AuthService,
    public router: Router,
    public ngZone: NgZone
  ) { }

  ngOnInit() {
    // Storing current page in Local Variable 'current-page'
    localStorage.setItem('current-page', 'dashboard');
    this.Phone=localStorage.getItem('contactno');
    this.Designation=localStorage.getItem('designation')
    console.log(this.Phone)
    console.log(this.Designation)
    if(this.Designation=='1'){
      this.Designation="SDE 1"
    }
    if(this.Designation=='2'){
      this.Designation="SDE 2"
    }
    if(this.Designation=='3'){
      this.Designation="SDE 3"
    }
    if(this.Designation=='4'){
      this.Designation="HR"
    }
    if(this.Designation=='5'){
      this.Designation="Finance"
    }
    if(this.Designation=='6'){
      this.Designation="Management"
    }
  }
}


