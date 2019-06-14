import { Component, OnInit } from '@angular/core';
import { PlatformLocation } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
@Component({
selector: 'app-sign-in',
templateUrl: './sign-in.component.html',
styleUrls: ['./sign-in.component.css']
})

export class SignInComponent implements OnInit {
constructor(
public authService: AuthService,
public router: Router,
location: PlatformLocation
) {
}

ngOnInit() { }
}

