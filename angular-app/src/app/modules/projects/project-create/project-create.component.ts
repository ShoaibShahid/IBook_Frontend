import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CoreHelper } from 'src/app/helpers/core.helper';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { ProjectService } from 'src/app/services/project.service';
import { ToastrNotificationService } from 'src/app/services/toastr.notification.service';
import { UiBlockerService } from 'src/app/services/ui-blocker.service';

@Component({
  selector: 'app-project-create',
  templateUrl: './project-create.component.html',
  styleUrls: ['./project-create.component.scss']
})
export class ProjectCreateComponent implements OnInit {

  projectForm = new FormGroup({
    name: new FormControl('',[Validators.required]),
    document: new FormControl('',[Validators.required]),
  });
  formSubmitted : boolean = false;
  lookUpWordObj:any = {};

  constructor(
    public coreHelper: CoreHelper,
    private uiBlockerService: UiBlockerService,
    private projectService: ProjectService,
    private router: Router,
    private toastrNotificationService: ToastrNotificationService,
    private localStorageService: LocalStorageService
  ) { }
  ngOnInit(): void {
  }

  onSubmit(){
    this.formSubmitted = true;
    if (this.projectForm.invalid) {
      return;
    }

    this.uiBlockerService.start();
    this.projectService
    .onCreateProject({...this.projectForm.value,user:this.localStorageService.getUserID()})
    .pipe()
    .subscribe({
      next : (res) => {
        this.uiBlockerService.stop();
        this.router.navigate(["project/list"]);
      },
      error :(errors) => {
        this.toastrNotificationService.showError(errors);
        this.uiBlockerService.stop();
      }
   });

  }

  isOpen = false;

  openOverlay(event:any) {
    let selectedText = event.editor.selection.getContent({format:'text'});
    this.getLookUpWord(selectedText);
  }

  closeOverlay() {
    this.isOpen = false;
  }

  getLookUpWord(word :string) {
    this.uiBlockerService.start();
    this.projectService
    .onGetWordDetail(word)
    .pipe()
    .subscribe({
      next : (res) => {
        this.uiBlockerService.stop();
        this.lookUpWordObj = res;
        this.isOpen = true;
      },
      error :(errors) => {
        this.toastrNotificationService.showError(errors.message);
        this.uiBlockerService.stop();
      }
   });
  }

  getObjectKeys(obj :any) {
    return Object.keys(obj);
  }
}
