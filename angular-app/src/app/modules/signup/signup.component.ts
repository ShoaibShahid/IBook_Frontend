import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomvalidationService } from 'src/app/services/customvalidation.service';
import { UiBlockerService } from 'src/app/services/ui-blocker.service';
import { UserService } from 'src/app/services/user.service';
import { ToastrNotificationService } from 'src/app/services/toastr.notification.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  protected registerForm!: FormGroup;
  protected submitted = false;

  constructor(
    private readonly customValidator: CustomvalidationService,
    private userService: UserService,
    private uiBlockerService: UiBlockerService,
    private router: Router,
    private ToastrNotificationService: ToastrNotificationService
  ) {}

  ngOnInit(): void {
    this.registerForm = new FormGroup(
      {
        first_name: new FormControl("", Validators.required),
        last_name: new FormControl(""),
        email: new FormControl("", [Validators.required, Validators.email]),
        username: new FormControl("", [Validators.required]),
        password: new FormControl("", [
          Validators.required,
          this.customValidator.patternValidator(),
        ]),
        password2: new FormControl("", [Validators.required]),
      },
      {
        validators: [
          this.customValidator.matchPassword("password", "password2"),
        ],
      }
    );
  }

  protected get registerFormControl() {
    return this.registerForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (!this.registerForm.valid) {
      return
    }

    this.uiBlockerService.start();

    this.userService
    .onCreateUser(this.registerForm.value)
    .pipe()
    .subscribe({
      next : (data) => {
        this.uiBlockerService.stop();
        this.router.navigate(["/"]);
        this.ToastrNotificationService.showSuccess("Account Created Successfully");
      },
      error :(errors) => {
        for (const key in errors) {
          this.ToastrNotificationService.showError(errors[key][0]);
        }
        this.uiBlockerService.stop();
      }
   });
  }

  resetForm(): void {
    this.registerForm.reset();
  }

}
