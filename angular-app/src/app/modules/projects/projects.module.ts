import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectListComponent } from './project-list/project-list.component';
import { SharedModulesModule } from 'src/app/shared-modules/shared-modules.module';
import { ProjectCreateComponent } from './project-create/project-create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditorModule } from "@tinymce/tinymce-angular";
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from "@angular/material/input";
import { SendProjectComponent } from './send-project/send-project.component';
import { SendProjectDetailComponent } from './send-project-detail/send-project-detail.component';

@NgModule({
  declarations: [
    ProjectListComponent,
    ProjectCreateComponent,
    SendProjectComponent,
    SendProjectDetailComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    SharedModulesModule,
    ReactiveFormsModule,
    EditorModule,
    MatFormFieldModule, 
    MatInputModule, 
    MatTableModule, 
    MatSortModule, 
    MatPaginatorModule
  ]
})
export class ProjectsModule { }
