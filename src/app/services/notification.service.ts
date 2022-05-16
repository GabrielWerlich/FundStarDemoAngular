import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private toastr: ToastrService) { }

  showSucess(message:string){
    this.toastr.success(message, message)
  }

  showError(message:string){
    this.toastr.error(message)
  }

  showInfo(message:string){
    this.toastr.info(message)
  }

  showWarning(message:string){
    this.toastr.warning(message)
  }  
}
