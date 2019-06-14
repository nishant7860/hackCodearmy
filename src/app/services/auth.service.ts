import { Injectable, NgZone } from '@angular/core';
import { User } from '../shared/services/user';
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import{ApiService} from './ApiService';
import{MessagingService}from '../shared/messaging.service';
@Injectable({
  providedIn: 'root'
})


export class AuthService {
  userData: any; // Save logged in user data
  public detailsList;
  public response: any;
  public isLoggedInSource = new BehaviorSubject<boolean>(false); // Behaviour Object to store whether user is logged in or not
  public Employeedesignation = new BehaviorSubject<string>(''); // Behaviour object to store the designation of Loggged in User
  public LoggedInEmail = new BehaviorSubject<string>(''); // Behaviour Object to store Logged in Email
  public email;
  message;
  public UserDesignation;
  constructor(private messagingService: MessagingService, private _freeApiService: ApiService,
    public afs: AngularFirestore,   // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public router: Router,
    public authService: AuthService,
    public ngZone: NgZone // NgZone service to remove outside scope warning
  ) {
    /* Saving user data in localstorage when
    logged in and setting up null when logged out */
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user'));
      } else {
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
      }
    });
  }


ngOnInit() {

}


  // Sign in with email/password
  SignIn(email, password) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.ngZone.run(() => {
          this.router.navigate(['dashboard']);
        });
        this.SetUserData(result.user);
      }).catch((error) => {
        window.alert(error.message);
      });
  }
  // Returns true when user is looged in and email is verified
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    let flag = (user !== null && user.emailVerified !== false) ? true : false;
    this.isLoggedInSource.next(flag);

    return (user !== null && user.emailVerified !== false) ? true : false;
  }

  // Sign in with Google
  GoogleAuth() {

    return this.AuthLogin(new auth.GoogleAuthProvider());
  }

  // Auth logic to run auth providers
  AuthLogin(provider) {
    return this.afAuth.auth.signInWithPopup(provider)
    .then((result) => {

      this.SetUserData(result.user);
      this.ngZone.run(() => {
        this._freeApiService.CheckProjectManager(result.user.email).subscribe(
          data => { localStorage.setItem('pm', data)
          console.log(data);
         
        }
           );
      this.SetUserData(result.user);
     this.email = localStorage.getItem('email');

  console.log(localStorage.getItem('pm'))
    this._freeApiService.getFullDetails(result.user.email).subscribe(

      data => { localStorage.setItem('designation', data.Designation);
        localStorage.setItem('ID', data.EID);
        localStorage.setItem('flag', '0');

        localStorage.setItem('contactno', data.Phone);
      this.UserDesignation = localStorage.getItem('designation');
     console.log(data.Designation)
      if ((this.UserDesignation) == '4') {
console.log("hr reached")
  // this.messagingService.requestPermission(localStorage.getItem('ID'));
  // this.messagingService.receiveMessage();
  // this.message = this.messagingService.currentMessage;


 localStorage.setItem('current-page', 'home-hr');
  this.LoggedInEmail.next(result.user.email);
      localStorage.setItem('email', result.user.email);
//  this._freeApiService.progress.next(false);

  this.router.navigate(['home-hr']);
}
else if((localStorage.getItem('pm')=='true')|| localStorage.getItem('pm')==null){ 
  localStorage.setItem('current-page', 'home-pm');
  this.router.navigate(['home-pm']);}
else if ((this.UserDesignation) == '2'){
console.log(this.UserDesignation)
console.log("sde reached")
  this.messagingService.requestPermission(localStorage.getItem('ID'));
  this.messagingService.receiveMessage();
  this.message = this.messagingService.currentMessage;


//    localStorage.setItem('current-page', 'home-hr');
  this.LoggedInEmail.next(result.user.email);
      localStorage.setItem('email', result.user.email);
  this._freeApiService.progress.next(false);

  this.router.navigate(['home-emp']);
}

else {
            localStorage.removeItem('email');
            this.LoggedInEmail.next('');
            window.alert('You are  not previleged user to excess Portal . Contact HR');


      this.SignOut;
           }


    }

    );


  });

}).catch((error) => {}

);

} // end Auth login



/* Setting up user data when sign in with username/password,
  sign up with username/password and sign in with social auth
  provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
  SetUserData(user) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified
    };
    return userRef.set(userData, {
      merge: true
    });
  }

  // Sign out function
  SignOut() {
    return this.afAuth.auth.signOut().then(() => {
      localStorage.removeItem('user');
      localStorage.removeItem('designation');
      localStorage.removeItem('contactno')
      localStorage.removeItem('email');
      localStorage.removeItem('current-page');
    localStorage.removeItem('pendingLeaveCount')
    localStorage.removeItem('ClearedLeaveCount')
      this.isLoggedInSource.next(false);
      this.LoggedInEmail.next('');
      this.Employeedesignation.next('');
      this._freeApiService.progress.next(false);
     this._freeApiService.DeleteToken(Number(localStorage.getItem('ID'))).subscribe(
      response => this.response = response

      );
localStorage.removeItem('flag')
  this.router.navigate(['sign-in']);
    });
  }

}
