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

@NgModule({
  declarations: [
    ProjectListComponent,
    ProjectCreateComponent
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
