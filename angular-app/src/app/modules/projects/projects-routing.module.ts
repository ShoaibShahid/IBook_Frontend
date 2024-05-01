import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectListComponent } from './project-list/project-list.component';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { ProjectCreateComponent } from './project-create/project-create.component';

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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
