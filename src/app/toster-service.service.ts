import { Injectable } from '@angular/core';
// variable hold global toast value
declare var toastr: any;
@Injectable({
  providedIn: 'root'
})

export class ToasterService {
public toastr:any;
  constructor() {
   }
  Success(title: string, message?: string) {
    toastr.success(title, message);
  }
  Warning(title: string, message?: string) {
    toastr.warning(title, message);
  }
  Info(message: string) {
    toastr.info(message);
  }
  Error(title: string, message?: string) {
    toastr.error(title, message);
  }
setting() {

  toastr.options = {
    'closeButton': true,
    'debug': false,
    'newestOnTop': false,
    'progressBar': false,
    'positionClass': 'toast-bottom-right',
    'preventDuplicates': false,
    'showDuration': '300',
    'hideDuration': '1000',
    'timeOut': '5000',
    'extendedTimeOut': '1000',
    'showEasing': 'swing',
    'hideEasing': 'swing'
  };
  
}
NgOnInit(){
  this.setting()
}
}
