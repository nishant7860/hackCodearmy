import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { ApplyLeaves } from '../../modals/applyleave';
import { Leaves } from '../../modals/leaves';
import { ApiService } from '../../services/ApiService';
import { Holiday } from 'src/app/modals/Holiday';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import{Apply} from '../../modals/apply'
import { DialogService } from 'src/app/shared/services/dialog.service';
import { Router } from '@angular/router';
import { IfStmt } from '@angular/compiler';
@Component({
  selector: 'app-leave-balance',
  templateUrl: './leave-balance.component.html',
  styleUrls: ['./leave-balance.component.css']
})
export class LeaveBalanceComponent implements OnInit {
  @ViewChild('ApplyLeaveForm') formValues;
  datePickerConfig: Partial<BsDatepickerConfig>;
  datePickerConfig1: Partial<BsDatepickerConfig>;
  ApplyLeaveForm: FormGroup;
  applyleave: ApplyLeaves = {
    FromDate: null,
    ToDate: null,
    appliedDate: null,
    reason: '',
    ClApplied: null,
    SlApplied: null,
    ElApplied: null,

  };
  public reason;
  public FromDate: Date;
  public ToDate: Date;
  public TotalApplied:number;
  leave:ApplyLeaves[];
  leavesStatus: Leaves[];
  listHoliday:Holiday[]=[];
  public CLAvailable:number;
  public ELAvailable:number;
  public SLAvailable:number;
  public Id;
  public singleday=false;
  public SLCount;
  public CLCount;
  public ELCount;
  public selectCount=0
  public show=false;
  public showProceed=true;
  public totalSelectCount=0
  public totalAvailableLeaves:number;
  public totalSelectedLeaves:number;
  public isValid=true;
  public showToDate=false;
  public isDecreaseValid=true;
  public applyDate=new Date();
  public holidayCount=0;
  public weekendCount=0;
  public bothWeekendAndHoliday=0;
  //public disabledDates:Array<string>;
  mindate = new Date();
  datectrl: FormControl;
datesDisabled = [
  ];
  
  public holidays:Array<string>;
  // tslint:disable-next-line: no-shadowed-variable
  constructor(private ApiService: ApiService,
    private datepipe:DatePipe,
    private dialogService: DialogService,
    private fb:FormBuilder,
    private router:Router  
  ) { 
  
    this.datePickerConfig = Object.assign({}, {
      containerClass: 'theme-dark-blue',
      dateInputFormat: 'DD-MM-YYYY',
      rangeSeparator: '------',
      minDate: new Date(),
      maxDate: new Date(2019, 11, 31),
      format:'yyyy-mm-dd',
    
    });
    this.datePickerConfig1 = Object.assign({}, {
      containerClass: 'theme-dark-blue',
      dateInputFormat: 'DD-MM-YYYY',
      rangeSeparator: '------',
      minDate: new Date(),
      maxDate: new Date(2019, 11, 31),
      format:'yyyy-mm-dd',
        
    });
  }
  panelOpenState = true;

  ngOnInit() {
   
    this.ApiService.progress.next(false);
    localStorage.setItem('current-page',"leave_balance")
    this.totalSelectedLeaves=0;
    this.SLCount=0;
    this.ELCount=0;
    this.CLCount=0;
    this.datectrl = new FormControl('', [Validators.required]);
    this.Id = localStorage.getItem('ID');
    this.ApiService.getLeavesStatusbyId(this.Id).subscribe(
      data => {
      this.leavesStatus = data;
       
        this.CLAvailable = data.CLAvailable
        this.ELAvailable = data.ELAvailable
        this.SLAvailable = data.SLAvailable
      }
      );
      if(this.SLCount==0 && this.ELCount==0 && this.CLCount==0)
      this.isDecreaseValid=false;  
      this.totalAvailableLeaves=5
  }
  increaseEL(){   if((this.ELAvailable>this.ELCount)&& (this.totalSelectedLeaves<this.selectCount))
  {
    this.ELCount+=1;
    this.totalSelectedLeaves+=1;
    this.isDecreaseValid=true;
  }

  if(this.totalSelectedLeaves==this.totalAvailableLeaves)
  this.isValid=false;

  
}
  increaseCL(){
    if((this.CLAvailable>this.CLCount)&&(this.totalSelectedLeaves<this.selectCount))
    {this.CLCount+=1;
      this.totalSelectedLeaves+=1;
      this.isDecreaseValid=true;
    }
    if(this.totalSelectedLeaves==this.totalAvailableLeaves)
this.isValid=false;

  }
  increaseSL(){
    if((this.SLAvailable>this.SLCount)&&(this.totalSelectedLeaves<this.selectCount))
  {this.SLCount+=1;
    this.totalSelectedLeaves+=1;
    this.isDecreaseValid=true;
  }
  if(this.totalSelectedLeaves==this.totalAvailableLeaves)
  this.isValid=false;
  
}
  decreaseEL(){
    if(this.ELCount>=1)
    {   this.ELCount-=1;
    this.totalSelectedLeaves-=1;
  }
  else
  this.isDecreaseValid=false;

}
  decreaseCL(){
    if(this.CLCount>=1)
    {this.CLCount-=1;
    this.totalSelectedLeaves-=1;
    
  }
  else
  this.isDecreaseValid=false;
}
  decreaseSL(){

if(this.SLCount>=1)    
{this.SLCount-=1;
    this.totalSelectedLeaves-=1;
    
  }
  else
  this.isDecreaseValid=false;
}
from(applyleave){
 
  this.showToDate=true;
 
  
}

passValue(){
  this.totalSelectCount=0;
  this.showToDate=false
  this.show=false;
  this.showProceed=true;
  this.selectCount=0;
  this.totalSelectedLeaves=0;
  this.totalSelectCount=0;
  this.holidayCount=0;
  this.weekendCount=0;
  this.bothWeekendAndHoliday=0;
  this.ELCount=0;
  this.CLCount=0;
  this.SLCount=0;
  this.formValues.resetForm();
}
onclickfrom(applyleave){
  console.log("pressed")
  this.passValue
 this.applyleave.ToDate=null
  this.formValues.resetForm();
  this.showProceed=true;
  this.show=false
  this.showToDate=false;
}
validate(applyleave)
{
  this.FromDate=applyleave.FromDate
  if(applyleave.FromDate==null)
  {window.alert("From Date cannot be null")
this.passValue()
}
  if(this.FromDate!=null)
  this.FromDate.setDate(this.FromDate.getDate() + 1);
  this.datePickerConfig1 = Object.assign({}, {
    containerClass: 'theme-dark-blue',
    dateInputFormat: 'DD-MM-YYYY',
    rangeSeparator: '------',
    minDate: new Date(this.datepipe.transform(this.FromDate, 'yyyy,MM,dd')),
    maxDate: new Date(2019, 11, 31),
    format:'yyyy-mm-dd'

  });
  if(this.FromDate!=null)
  this.FromDate.setDate(this.FromDate.getDate() - 1);
  this.show=false;
  this.showProceed=true;
  this.selectCount=0;
  this.totalSelectedLeaves=0;
  this.totalSelectCount=0;
  this.holidayCount=0;
  this.weekendCount=0;
  this.bothWeekendAndHoliday=0;
  this.ELCount=0;
  this.CLCount=0;
  this.SLCount=0;
}
submit(applyleave:ApplyLeaves){
  console.log("select count",this.selectCount);
 this.TotalApplied=this.ELCount+this.SLCount+this.CLCount;
  const apply=new Apply();
  apply.ClApplied=this.CLCount
  apply.ElApplied=this.ELCount
  apply.EID=this.Id
  apply.FromDate=this.datepipe.transform(this.FromDate, 'yyyy-MM-dd')
  apply.SlApplied=this.SLCount
  apply.ToDate=this.datepipe.transform(this.ToDate, 'yyyy-MM-dd')
  apply.appliedDate=this.datepipe.transform(this.applyDate, 'yyyy-MM-dd')
  apply.reason=this.reason;
  console.log(this.TotalApplied)
  if((this.SLCount+this.ELCount+this.CLCount)==1)
  apply.ToDate=apply.FromDate
  if(this.TotalApplied<this.selectCount){
  let message="You are Applying for "+this.selectCount.toString()+" days Leaves But you have Selected for only "+this.TotalApplied.toString()+"days. Please select correct number of days";
  window.alert(message);
  this.passValue();
  }
  else{
    this.dialogService.openConfirmDialog('Submit this Employee?')
    .afterClosed().subscribe(res => {
      if (res) { this.ApiService.ApplyLeave(apply).subscribe(data=>data=data)
         //Command to reset form once data is submitted in database
         this.show=false;
    this.showProceed=true;
    this.ELAvailable-=this.ELCount;
    this.CLAvailable-=this.CLCount;
    this.SLCount-=this.SLCount;
    this.CLCount=0;
    this.SLCount=0;
    this.ELCount=0;
   applyleave.FromDate=null
   applyleave.ToDate=null
   this.passValue()
   // this.formValues.resetForm();
 this.router.navigate(['apply-leave-response'])   
  }
    
    })
  }
   
}
  Applyleave(applyleave: ApplyLeaves): void {
    if(applyleave.FromDate==null)
    {
      window.alert("please select From Date");
      this.passValue()
     
    }
    else{
 if(applyleave.ToDate==null)
    {applyleave.ToDate=applyleave.FromDate;
    this.singleday=true;
    }
    this.reason=applyleave.reason;
    this.FromDate=applyleave.FromDate;
    this.ToDate=applyleave.ToDate;
                var is_weekend =  function(date1){
                  var dt = new Date(date1);
                   
                  if(dt.getDay() == 6 || dt.getDay() == 0)
                     {
                      return true;
                      } 
              return false;
                    }
              

                    var is_matched =  function(date,holiday){
                      if(date.toString()==holiday.toString())
                    return true
                    else 
                    return false
                        }
               

var startDate = new Date(applyleave.FromDate); //YYYY-MM-DD
var endDate = new Date(applyleave.ToDate); //YYYY-MM-DD
if(this.singleday!=true)
endDate.setDate(endDate.getDate() + 1);

console.log("start date",startDate)
console.log("end date",endDate)

var getDateArray = function(start, end) {
  
    var arr = new Array();
    var dt = new Date(start);
    while (dt <= end) {
        arr.push(new Date(dt));
        dt.setDate(dt.getDate() + 1);
    }
    return arr;
}

var dateArr = getDateArray(startDate, endDate);
 
    //get holiday list
    this.ApiService.getHolidayList().subscribe(data=>
    
      { this.totalSelectCount=0;      
        for(let date1 of dateArr){
        console.log(date1)
          this.totalSelectCount++;
          var date=this.datepipe.transform(date1, 'yyyy-MM-dd');
        var flag;
          for(let val of this.listHoliday)
         {
            flag=false;
           if((is_matched(val.Date,date))){
              flag=true
              this.holidayCount++;
       
           }
           if((is_matched(val.Date,date)&&is_weekend(date))){
          this.bothWeekendAndHoliday++;
         }
        
          
          }
          if(is_weekend(date1))
           {this.weekendCount++;
         
          }}
        this.selectCount=this.totalSelectCount-this.holidayCount-this.weekendCount+this.bothWeekendAndHoliday
          
        console.log("count ",this.selectCount)
        console.log("Select count ",this.totalSelectCount)
        console.log("holiday ",this.holidayCount)
        console.log("weekend ",this.weekendCount)
        console.log("both ", this.bothWeekendAndHoliday)
        if(this.selectCount==0)
      {
        this.showProceed=true;
        this.show=false;
        this.passValue();
        window.alert("Selected day is already a Holiday.")
      }
      
      else{

    this.show=true;
    this.showProceed=false;
    
      }
      console.log("avalibale ",this.ELAvailable+this.CLAvailable+this.SLAvailable)
      console.log("total count ",this.selectCount)
      if((this.ELAvailable+this.CLAvailable+this.SLAvailable)<this.selectCount){
        window.alert("You don't have enough Leaves to apply")
        this.showToDate=false
   this.passValue()      }
      }
      

      )

     
    }
  }

}