import { Component, OnInit } from '@angular/core';
import{ApiService}from '../../services/ApiService'
import{FillFeedback} from '../../modals/fillFeedback'
@Component({
  selector: 'app-view-feedback',
  templateUrl: './view-feedback.component.html',
  styleUrls: ['./view-feedback.component.css']
})
export class ViewFeedbackComponent implements OnInit {
Feedback:FillFeedback[]
flag=false;
Title: string;
    Venue: string;
    Date: Date;
    wqstar:number;
    comstar:number;
    tsstar:number;
    prostar:number;
    attstar:number;
    coostar:number;
    crestar:number;
    takstar:number;
    cowstar:number;
    depstar:number;
    comment:string;
    employee:string;
    sender:string;
  constructor(private ApiService:ApiService) { }

  ngOnInit() {
    this.ApiService.getFeedbackDetails(localStorage.getItem('email')).subscribe(

      data =>
    this.Feedback = data
    
  );
console.log(this.Feedback);


}

 Check(feed){
   this.flag=true
   console.log(feed);
   this.coostar=feed.coostar
   this.cowstar=feed.cowstar
   this.crestar=feed.crestar
   this.depstar=feed.depstar
   this.prostar=feed.prostar
   this.takstar=feed.takstar
   this.tsstar=feed.tsstar
   this.wqstar=feed.wqstar
   this.Date=feed.Date
   this.Title=feed.Title
   this.comstar=feed.comstar
   this.comment=feed.comment
   this.attstar=feed.attstar
   this.Venue=feed.Venue
   
 } 

}
