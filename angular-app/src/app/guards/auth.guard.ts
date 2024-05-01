import { AuthService } from './../services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { ToastrNotificationService } from '../services/toastr.notification.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth : AuthService,
     private router: Router, 
     private toastrNotificationService: ToastrNotificationService,
    ){

  }
  canActivate():boolean{
    if(this.auth.isLoggedIn()){
      return true
    }else{
      this.toastrNotificationService.showError("Please Login First!");
      this.router.navigate(['login'])
      return false;
    }
  }

}
