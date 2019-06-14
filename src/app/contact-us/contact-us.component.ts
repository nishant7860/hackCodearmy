import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../services/ApiService';
import { Contact } from 'src/app/modals/Contact';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  @ViewChild('contactForm') formValues;
  Name: string;
  _Email: string;
  Subject: string;
  Message: string;

  contact: Contact = {
    Name: null,
    _Email: null,
    Message: null,
    Subject: null,
  };
  objPostContact: Contact[];
  constructor(private _freeApiService: ApiService) { }
  ngOnInit() {
  // Storing current page in Local Variable 'current-page'
    localStorage.setItem('current-page', 'contact-us');
  }

  saveContact(ctc: Contact): void {
    // Function call to submit Contact Form data in the Database
        this._freeApiService.SubmitContactForm(ctc).subscribe(
      data => this.objPostContact = data
    );
    // Command to reset form once data is submitted in the database
    this.formValues.resetForm();
  }

}
