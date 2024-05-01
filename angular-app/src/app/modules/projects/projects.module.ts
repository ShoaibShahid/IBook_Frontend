import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectListComponent } from './project-list/project-list.component';
import { SharedModulesModule } from 'src/app/shared-modules/shared-modules.module';
import { ProjectCreateComponent } from './project-create/project-create.component';


@NgModule({
  declarations: [
    ProjectListComponent,
    ProjectCreateComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    SharedModulesModule
  ]
})
export class ProjectsModule { }
