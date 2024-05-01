import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { ToastrNotificationService } from 'src/app/services/toastr.notification.service';
import { UiBlockerService } from 'src/app/services/ui-blocker.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    username: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required, Validators.minLength(8)]),
  });
  loginFormSubmitted : boolean = false;

  constructor(
    private uiBlockerService: UiBlockerService,
    private userService: UserService,
    private router: Router,
    private toastrNotificationService: ToastrNotificationService,
    private auth: AuthService,
    private localStorageService: LocalStorageService
  ) { }

  ngOnInit(): void {
  }

  onLoginSubmit() {
    this.loginFormSubmitted = true;
    if (this.loginForm.invalid) {
      return;
    }

    this.uiBlockerService.start();

    this.userService
    .onLoginUser(this.loginForm.value)
    .pipe()
    .subscribe({
      next : (res) => {
        this.uiBlockerService.stop();
        this.auth.storeToken(res.access);
        this.auth.storeRefreshToken(res.refresh);
        const tokenPayload = this.auth.decodedToken();
        this.localStorageService.setUserData(tokenPayload);
        this.router.navigate(["project/list"]);
      },
      error :(errors) => {
        this.toastrNotificationService.showError(errors);
        this.uiBlockerService.stop();
      }
   });
  }

  

}
