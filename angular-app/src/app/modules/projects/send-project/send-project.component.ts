import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-send-project',
  templateUrl: './send-project.component.html',
  styleUrls: ['./send-project.component.scss']
})
export class SendProjectComponent implements OnInit {
  protected draftForm!: FormGroup;
  protected submitted = false;

  constructor(
   private router: Router,
   private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.draftForm = new FormGroup(
      {
        name: new FormControl("", Validators.required),
        email: new FormControl("", [Validators.email]),
        country: new FormControl("", [Validators.required]),
        city: new FormControl("", [Validators.required]),
        address: new FormControl("", [Validators.required]),
        postal_code: new FormControl(""),
      }
    );
  }

  protected get draftFormControl() {
    return this.draftForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (!this.draftForm.valid) {
      return
    }
    let detail = {...this.draftForm.value,id : this.route.snapshot.paramMap.get("projectId")};

    this.router.navigate(['project/send-detail'],{ queryParams: detail});
   
  }

  resetForm(): void {
    this.draftForm.reset();
  }
}
