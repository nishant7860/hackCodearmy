import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { ManageLeavesComponent } from './home-hr/manage-leaves/manage-leaves.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './services//ApiService';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeHrComponent } from './home-hr/home-hr.component';
import { HolidayListComponent } from './home-hr/holiday-list/holiday-list.component';
import { DisplayHolidayListComponent } from './display-holiday-list/display-holiday-list.component';
// import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatInputModule, MatCardModule, MatListModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ButtonsModule } from 'ngx-bootstrap';
import { BsDatepickerModule } from 'ngx-bootstrap';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
// import {DialogModule} from 'primeng/dialog';
import { AccordionModule } from 'primeng/accordion';
import { DropdownModule } from 'ngx-dropdown';
import { MultiSelectModule } from 'primeng/multiselect';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewJoineeComponent } from './home-hr/newjoinee/newjoinee.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ModalModule } from 'ngx-bootstrap';
import { DatePipe } from '@angular/common';
import { ProjectComponent } from './home-hr/project/project.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { CarouselModule } from 'ngx-bootstrap/carousel';

import { PopoverModule } from 'ngx-bootstrap/popover';


import { ReplyToRequestComponent } from './reply-to-request/reply-to-request.component';
import { AuthService } from './services/auth.service';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

import {MatSelectModule, MatTableModule} from '@angular/material';
import {MatExpansionModule} from '@angular/material/expansion';
// multislect
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MenuItem} from 'primeng/api';
// Firebase
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatMomentDateModule } from '@angular/material-moment-adapter';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { MatConfirmDialogComponent } from './mat-confirm-dialog/mat-confirm-dialog.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { DisplayResponseComponent } from './display-response/display-response.component';
import { DataTableComponent } from './data-table/data-table.component';
import { SampleTableComponent } from './sample-table/sample-table.component';
import { HomeEmpComponent } from './home-emp/home-emp.component';

import { LeaveBalanceComponent } from './home-emp/leave-balance/leave-balance.component';
import { LeaveHistoryComponent } from './home-emp/leave-history/leave-history.component';

import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { MessagingService } from './shared/messaging.service';
import { AsyncPipe } from '../../node_modules/@angular/common';

import{ToasterService} from './toster-service.service';
import { ApplyLeaveComponentComponent } from './apply-leave-component/apply-leave-component.component';
import { GivefeedbackComponent } from './home-emp/givefeedback/givefeedback.component';
import { HoomePmComponent } from './hoome-pm/hoome-pm.component';
import { CreateFeedbackComponent } from './hoome-pm/create-feedback/create-feedback.component';
import { ViewFeedbackComponent } from './home-emp/view-feedback/view-feedback.component'
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    ManageLeavesComponent,
    ContactUsComponent,
    HomeHrComponent,
    HolidayListComponent,
    NewJoineeComponent,
    ProjectComponent,
    //MatProgressSpinnerModule,
    ReplyToRequestComponent,
    DashboardComponent,
    SignInComponent,
    DisplayHolidayListComponent,
    MatConfirmDialogComponent,
    DisplayResponseComponent,
    DataTableComponent,
    SampleTableComponent,
    HomeEmpComponent,
//    TestComponent,
    LeaveBalanceComponent,
    LeaveHistoryComponent,
    ApplyLeaveComponentComponent,
    GivefeedbackComponent,
    HoomePmComponent,
    CreateFeedbackComponent,
    ViewFeedbackComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireMessagingModule,
    AngularFireModule.initializeApp(environment.firebase),
    MatSelectModule,
    MatProgressSpinnerModule,
    AngularFirestoreModule, // Only required for database features
    AngularFireAuthModule, // Only required for auth features,
    AngularFireStorageModule, // Only required for storage features
    NgMultiSelectDropDownModule,
    MatMomentDateModule,
    MatDatepickerModule,
    BrowserModule,
    CarouselModule.forRoot(),
    PopoverModule.forRoot(),
    TooltipModule.forRoot(),
    NgbModule,
    HttpClientModule,
    DropdownModule,
    MatFormFieldModule,
    AppRoutingModule,
    MatIconModule,
    //  MaterialModule,
    MatToolbarModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot(),
    ButtonsModule.forRoot(),
    ModalModule.forRoot(),
    AccordionModule,
    BrowserAnimationsModule,
    MatButtonToggleModule,
    MultiSelectModule,
    MatExpansionModule,
    MatTabsModule,
    MatInputModule, MatCardModule, MatListModule, MatPaginatorModule, MatSortModule,
    AngularFireModule.initializeApp(environment.firebase, 'Leave and Attendance Portal'),
    MatTableModule

  ],
  providers: [ToasterService, ApiService, DatePipe,MessagingService, AsyncPipe],
  bootstrap: [AppComponent],
  entryComponents: [MatConfirmDialogComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }

