import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectListComponent } from './project-list/project-list.component';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { ProjectCreateComponent } from './project-create/project-create.component';
import { SendProjectComponent } from './send-project/send-project.component';
import { SendProjectDetailComponent } from './send-project-detail/send-project-detail.component';

const routes: Routes = [
  {
    path: "list",
    canActivate:[AuthGuard],
    component: ProjectListComponent,
  },
  {
    path: "create",
    canActivate:[AuthGuard],
    component: ProjectCreateComponent,
  },
  {
    path: "send/:projectId",
    canActivate: [AuthGuard],
    component: SendProjectComponent,
  },
  {
    path: "send-detail",
    canActivate: [AuthGuard],
    component: SendProjectDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
