import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-send-project-detail',
  templateUrl: './send-project-detail.component.html',
  styleUrls: ['./send-project-detail.component.scss']
})
export class SendProjectDetailComponent implements OnInit {

  senderDetail:any = {};

  constructor(
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params : any) => {
      this.senderDetail = params;
    });
  }

}
