import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { ProjectService } from 'src/app/services/project.service';
import { ToastrNotificationService } from 'src/app/services/toastr.notification.service';
import { UiBlockerService } from 'src/app/services/ui-blocker.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

  displayedColumns: string[] = ['name','published_date', 'document'];
  dataSource: MatTableDataSource<any> | any;

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator | any;
  @ViewChild(MatSort, { static: false }) sort: MatSort | any;

  constructor(
    private uiBlockerService: UiBlockerService,
    private projectService: ProjectService,
    private toastrNotificationService: ToastrNotificationService,
    private localStorageService: LocalStorageService
  ) { }

  ngOnInit(): void {
    this.loadProjects();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  loadProjects(){
    this.uiBlockerService.start();
    this.projectService
    .onGetUserProject({user_id:this.localStorageService.getUserID()})
    .pipe()
    .subscribe({
      next : (res) => {
        this.uiBlockerService.stop();
        this.initTableData(res || []);
      },
      error :(errors) => {
        this.toastrNotificationService.showError(errors);
        this.initTableData([]);
        this.uiBlockerService.stop();
      }
   });
  }

  initTableData(data :any){
    this.dataSource = new MatTableDataSource( data);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

}
