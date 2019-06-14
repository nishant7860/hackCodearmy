import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ReplyToRequestComponent} from './reply-to-request/reply-to-request.component';
import {NavComponent} from './nav/nav.component';
import {FooterComponent} from './footer/footer.component';
import {ContactUsComponent} from './contact-us/contact-us.component';
import { HomeHrComponent } from './home-hr/home-hr.component';
import { HolidayListComponent } from './home-hr/holiday-list/holiday-list.component';
import { NewJoineeComponent } from './home-hr/newjoinee/newjoinee.component';
import { ProjectComponent } from './home-hr/project/project.component';
import { ManageLeavesComponent } from './home-hr/manage-leaves/manage-leaves.component';
import { SignInComponent } from '../app/components/sign-in/sign-in.component';
import {DisplayResponseComponent} from './display-response/display-response.component';
import { AuthGuard } from '../app/shared/guard/auth.guard';
import { HomeGuard } from '../app/shared/guard/home.guard';
import { SecureInnerPagesGuard } from '../app/shared/guard/secure-inner-pages.guard';
import {DisplayHolidayListComponent} from './display-holiday-list/display-holiday-list.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import { HoomePmComponent } from './hoome-pm/hoome-pm.component';
import{GivefeedbackComponent} from '../app/home-emp/givefeedback/givefeedback.component'
import {ViewFeedbackComponent} from './home-emp/view-feedback/view-feedback.component'
import{ApplyLeaveComponentComponent}from './apply-leave-component/apply-leave-component.component'
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LeaveBalanceComponent } from './home-emp/leave-balance/leave-balance.component';
import { LeaveHistoryComponent} from './home-emp/leave-history/leave-history.component';
import{HomeEmpComponent} from './home-emp/home-emp.component'
import{CreateFeedbackComponent} from './hoome-pm/create-feedback/create-feedback.component'
const routes: Routes = [
  
  { path: '', redirectTo: '/sign-in', pathMatch: 'full', canActivate: [SecureInnerPagesGuard]},
  { path: 'sign-in', component: SignInComponent,canActivate: [HomeGuard]},
  { path: 'home-pm/createfeedback', component: CreateFeedbackComponent},
  { path: 'feedback', component: GivefeedbackComponent},
  { path: 'view-feedback', component: ViewFeedbackComponent},
 
  { path: 'home-hr', component: HomeHrComponent, canActivate: [AuthGuard]},
  { path: 'home-emp', component: HomeEmpComponent, canActivate: [AuthGuard]},
  { path: 'home-pm', component: HoomePmComponent},
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  { path: 'newjoinee', component: NewJoineeComponent },
  { path: 'display', component: DisplayHolidayListComponent },
  { path: 'nav', component: NavComponent , canActivate: [SecureInnerPagesGuard] },
  { path: 'holiday-list', component: HolidayListComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'contact-us', component: ContactUsComponent, canActivate: [AuthGuard] },
  { path: 'project' , component: ProjectComponent  },
  { path: 'manage-leaves', component: ManageLeavesComponent  },
  { path: 'reply', component: ReplyToRequestComponent  },
  { path: 'display-response', component: DisplayResponseComponent  },
  { path: 'leave_balance', component: LeaveBalanceComponent},
  { path: 'leave_history', component: LeaveHistoryComponent},
  {path: 'apply-leave-response', component:ApplyLeaveComponentComponent}
  
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes, {useHash: true})],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppRoutingModule { }
