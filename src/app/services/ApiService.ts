import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ApplyLeaves } from '../modals/applyleave';
import { Holiday } from '../modals/Holiday';
import { Register } from '../modals/Register';
import { Project } from '../modals/project';
import { HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Contact } from 'src/app/modals/Contact';
import { catchError } from 'rxjs/operators';
import { Email } from '../modals/Email';
import { Router } from '@angular/router';
import { ClearedLeaves } from '../modals/clearedLeaves';
import { PendingLeaves } from '../modals/pendingLeaves';
import { BehaviorSubject } from 'rxjs';
import{Feedback} from '../modals/feedback'
import{FillFeedback}from '../modals/fillFeedback'
import{EditProject}from '../modals/EditProject'
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
@Injectable()


export class ApiService {
    constructor(private httpclient: HttpClient, private router: Router) { }
    public outputData=null;

    public listEmail1: Email[];
    ListPendingLeaves: PendingLeaves[];
    ListClearedLeaves: ClearedLeaves[];
    PendingLeavesData: PendingLeaves[];
    LeavesData: ClearedLeaves[];

    public progress = new BehaviorSubject<boolean>(false);
  

    passLeavesData(data) {
        this.LeavesData = data;
    }
    getLeavesData() {
        return this.LeavesData;
    }
    passPendingLeavesData(data) {
        this.PendingLeavesData = data;
    }
    getPendingLeavesData() {
        return this.PendingLeavesData;
    }
// implementing post method for an employee to Apply Leave
ApplyLeave(applyleave): Observable<any> {
    const url = environment.apiBaseUrl + '/ProjectDataBase/api/ApplyLeave';
    return this.httpclient.post(url, applyleave).pipe(
        catchError(this.handleError));

}

// implementing get method to check Available  Leave Status of particular employee by passing ID

getDesignation(): Observable<any> {

    const url = environment.apiBaseUrl + '/Hackathon/api/Designations';
    return this.httpclient.get(url);
}

    // implementing get method to check Available  Leave Status of particular employee by passing ID

    getLeavesStatusbyId(id): Observable<any> {

        const url = environment.apiBaseUrl + '/ProjectDataBase/api/LeavesBalance/' + id;
        return this.httpclient.get(url);
    }
    // implementing get method to get total count  of pending Leaves and Cleared Leaves
    getLeavesCount(): Observable<any> {

        const url = environment.apiBaseUrl + '/ProjectDataBase/api/LeavesCount';
        return this.httpclient.get(url);
    }
  
  
  
    // implementing get method to get cleared leave of particular employee by passing ID
    getClearedLeavesbyId(id): Observable<any> {

        const url = environment.apiBaseUrl + '/ProjectDataBase/api/ClearedLeaves/' + id;
        return this.httpclient.get(url);
    }
    // implementing get method to get cleared leave of particular employee by passing ID
    getPendingLeavesbyId(id): Observable<any> {

        const url = environment.apiBaseUrl + '/ProjectDataBase/api/AppliedLeaveById/' + id;
        return this.httpclient.get(url);
    }

    // Function to Save Pending Leaves
    SavePendingLeaves(data) {
        this.ListPendingLeaves = data;
    }
    // Function to Save Cleared Leaves
    SaveClearedLeaves(data) {
        this.ListClearedLeaves = data;
    }
    // Function that return Cleared Leaves
    displayclearedLeaves() {
        return this.ListClearedLeaves;
    }
    // Function to return Pending Leaves
    displayPendingLeaves() {
        return this.ListPendingLeaves;
    }
    // Function to save a Leave Data of employee
    passData(reply) {
        this.outputData = reply;
    }
    /// Function to return Leave Data of employee
    getData() {
        return this.outputData;
    }
    getProject(): Observable<any> {
        const url = environment.apiBaseUrl + '/ProjectDataBase/api/ProjectDetails';
        return this.httpclient.get(url).pipe(
            catchError(this.handleError));
    }


    // function to implement put method to Delete FCM Token in Database to send push Notifications
    DeleteToken(id: number): Observable<void> {

        const url = `${environment.apiBaseUrl + '/ProjectDataBase/api/DeleteEmployeeToken/'}${id}`;


        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'my-auth-token'
                
            })
        };

        return this.httpclient.put<void>(url, JSON.stringify('1'), httpOptions).pipe(
            catchError(this.handleError));
    }

    // function to implement put method to update FCM Token in Database to send push Notifications
    UpdateToken(id: number, Token: string): Observable<void> {

        const url = `${environment.apiBaseUrl + '/ProjectDataBase/api/UpdateEmployeeToken/'}${id}` + `${'?appType=1'}`;
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',

            })
        };

        return this.httpclient.put<void>(url, JSON.stringify(Token), httpOptions).pipe(
            catchError(this.handleError));
    }

    // function to implement put method to approve pending Leave of employee in the database
    ApproveRequest(id: number, status: boolean): Observable<void> {

        const url = `${environment.apiBaseUrl + '/ProjectDataBase/api/ProcessLeave/'}${id}`;


        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'my-auth-token'
            })
        };

        return this.httpclient.put<any>(url, JSON.stringify(status), httpOptions).pipe(
            catchError(this.handleError));
    }
    // function definition to display that Leave is approved
    requestcleared() {

        this.router.navigate(['display-response']);


    }
    // Function to handle error returned by server on API server call
    handleError(error) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // client-side error
            errorMessage = `Error: ${error.error.message}`;
        } else {
            // server-side error
            if (error.status === 400) {
                errorMessage = `Error Code: ${error.status}\nMessage: Data already exist on database`;
                window.alert(errorMessage);

                return throwError(errorMessage);
            }

            if (error.status === 0) {
                errorMessage = `Error Code: ${error.status}\nMessage: Unable to connect to network`;
                window.alert(errorMessage);
                return throwError(errorMessage);
            }
            if (error.status === 404) {
                errorMessage = `Error Code: ${error.status}\nMessage: Data does not exist on database`;

                return throwError(errorMessage);
            }
            errorMessage = `Error Code: ${error.status}`;
        }


        return throwError(errorMessage);
    }
    // Function definition to implement post method to  submit a Contact Form Data in the database
    SubmitContactForm(oContact: Contact): Observable<any> {
        const url = environment.apiBaseUrl + '/Hackathon/api/EmailService';
        return this.httpclient.post(url, oContact).pipe(
            catchError(this.handleError));
    }

    // Function definition to implement post method using Id Parameter to postLeaves of particular Employee in Database
    getLeavesbyId(opost1: ApplyLeaves): Observable<any> {
        const url = environment.apiBaseUrl + '/ProjectDataBase/api/AppliedLeaveById';
        return this.httpclient.post(url, opost1).pipe(
            catchError(this.handleError));
    }

    // Function definition to implement post method to Upload Holiday data in the Database
    uploadHoliday(HolidayListObject: Holiday): Observable<any> {
        const url = environment.apiBaseUrl + '/ProjectDataBase/api/AddHoliday';
        return this.httpclient.post(url, HolidayListObject).pipe(
            catchError(this.handleError));
    }


    // Function definition to implement post method to Update project data in the Database
    updateProject(editProject:EditProject): Observable<any> {
        const url = environment.apiBaseUrl + '/ProjectDataBase/api/UpdateProject';
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'my-auth-token'
            })
        };

        return this.httpclient.put<any>(url, editProject, httpOptions).pipe(
            catchError(this.handleError));
    }

    // Function definition to implement get method to get the list of Available Developers from Database
    getEmail(): Observable<any> {
        const url = environment.apiBaseUrl + '/hackathon/api/AvailableDevelopersEmail';
        return this.httpclient.get(url).pipe(
            catchError(this.handleError));
    }

    empdetails(): Observable<any> {
        const url = environment.apiBaseUrl + '/hackathon/api/DevelopersEmail';
        return this.httpclient.get(url).pipe(
            catchError(this.handleError));
    }
    getTeam(team): Observable<any> {
        const url = environment.apiBaseUrl + '/hackathon/api/GetProjectMembers/'+ team
        return this.httpclient.get(url).pipe(
            catchError(this.handleError));
    }
    // Function definition to implement get method by using email parameter to fetch Full Details of Employee from Database
    getFullDetails(email: string): Observable<any> {
        const param1 = new HttpParams().set('email', email);
        const url = environment.apiBaseUrl + '/Hackathon/api/GetDesignationId';
        
        return this.httpclient.get(url, {params:param1}).pipe(
            catchError(this.handleError));
    }

    getProjectTeam(data):Observable<any>{
        const param1 = new HttpParams().set('id', data);
        const url = environment.apiBaseUrl + '/ProjectDataBase/api/EmployeeEmailsWithProject/'+data.toString();
        return this.httpclient.get(url).pipe(
            catchError(this.handleError)); 
    }
    getFreeProjectTeam(data):Observable<any>{
        const param1 = new HttpParams().set('id', data);
        const url = environment.apiBaseUrl + '/ProjectDataBase/api/EmployeeEmailsWithoutProject/'+data.toString();
        return this.httpclient.get(url).pipe(
            catchError(this.handleError)); 
    }

    // getFullDetails(email: string): Observable<any> {
    //     const param1 = new HttpParams().set('email', email);
    //     const url = environment.apiBaseUrl + '/ProjectDataBase/api/Employee';
    //     var headers = new HttpHeaders().set("Token",localStorage.getItem('token') );
    //     const httpOptions = {
    //         headers: headers,
    //         params:param1
    //       };
    //     return this.httpclient.get(url, httpOptions).pipe(
    //         catchError(this.handleError));
    // }
    // // Function definition to implement get  method to fetch Holiday List from Database
    getHolidayList(): Observable<any> {
        const url = environment.apiBaseUrl + '/ProjectDataBase/api/HolidaysList';
        return this.httpclient.get(url).pipe(
            catchError(this.handleError));
    }
   
    CheckProjectManager(email): Observable<any> {
        const url = environment.apiBaseUrl + '/Hackathon/api/CheckManager'+'?email=' + email;
        return this.httpclient.get(url).pipe(
            catchError(this.handleError));
    }
   
   
    // Function definition to implement post method to save Employee Registration in the Database
   
    RegisterNewJoinee(oRegister: Register, value: string): Observable<any> {
        const url = environment.apiBaseUrl + '//Hackathon/api/AddEmployee' + '?date=' + value;
        return this.httpclient.post(url, oRegister).pipe(
            catchError(this.handleError));
    }
    // Function definition to implement post to upload Project Details in the Database
    UploadProjectDetails(project: Project): Observable<any> {
        const url = environment.apiBaseUrl + '/hackathon/api/AddProject';
        return this.httpclient.post(url, project).pipe(
            catchError(this.handleError));
    }
    // Function definiton to implement get method to fetch all the Pending Leaves from Database
    GetPendingLeaves(): Observable<any> {

        const url = environment.apiBaseUrl + '/ProjectDataBase/api/AppliedLeaves';
        return this.httpclient.get(url).pipe(
            catchError(this.LeavesHandler));
    }

    CreateFeedback(feedback: Feedback): Observable<any> {
        const url = environment.apiBaseUrl + '/hackathon/api/CreateMeetingFeedback';
        return this.httpclient.post(url, feedback).pipe(
            catchError(this.handleError));
    }
    // Function to Handle Errors sent by database server
    LeavesHandler(error) {

        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // client-side error
            errorMessage = `Error: ${error.error.message}`;
            // window.alert(errorMessage);
        } else {
            // server-side error


            if (error.status === 404) {
                errorMessage = `Error Code: ${error.status}\nMessage: Data does not exist on database`;

            }
        }

        return throwError(errorMessage);
    }
    
    // Function definition to implement post method to save Employee Registration in the Database
   
    saveFeedback(feedback: FillFeedback): Observable<any> {
        const url = environment.apiBaseUrl + '/Hackathon/api/GivePeerFeedback';
        return this.httpclient.post(url, feedback).pipe(
            catchError(this.handleError));
    }
    // Function to save Project Team Members
    saveProjectdata(data) {
        this.listEmail1 = data;
    }
    // Function to return Project Team Members
    sendProjectTeamMembers() {
        return this.listEmail1;
    }

    getFeedbackDetails(email: string): Observable<any> {
        const param1 = new HttpParams().set('email', email);
        const url = environment.apiBaseUrl + '/Hackathon/api/GetPeerFeedbacks';
        
        return this.httpclient.get(url, {params:param1}).pipe(
            catchError(this.handleError));
    }


    // Function to implement Get method to Fetch Cleared Leaves from the Database
    GetClearedLeaves(): Observable<any> {
        const url = environment.apiBaseUrl + '/ProjectDataBase/api/ClearedLeaves';

        return this.httpclient.get(url).pipe(
            catchError(this.LeavesHandler));

    }
}
