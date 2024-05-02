
import { throwError as observableThrowError, Observable, from } from "rxjs";

import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { catchError, tap } from "rxjs/operators";

import { CoreHelper } from "../helpers/core.helper";
import { JsonService } from "./json.service";

@Injectable({
  providedIn: "root",
})
export class ProjectService {
 
  constructor(
    private http: HttpClient,
    private coreHelper: CoreHelper,
    private jsonService: JsonService
  ) {
  }


  errorHandler(error: HttpErrorResponse) {
    return observableThrowError(error.error || "Server Error");
  }

  onCreateProject(param: any): Observable<any> {
    const endPoint = this.coreHelper.createUrl('project/create');
    return this.http
      .post<any>(endPoint, param)
      .pipe(
        tap((data) => this.jsonService.doStringify(data)),
        catchError(this.errorHandler)
      );
  }
  onGetUserProject(param: any): Observable<any> {
    const endPoint = this.coreHelper.createUrl('project/list');
    return this.http
      .post<any>(endPoint, param)
      .pipe(
        tap((data) => this.jsonService.doStringify(data)),
        catchError(this.errorHandler)
      );
  }

  onGetWordDetail(param: any): Observable<any> {
    const endPoint = `https://wordsapiv1.p.rapidapi.com/words/${param}`;
    return this.http
      .get<any>(endPoint ,{headers: {
        'X-RapidAPI-Key': 'b0ec0f7150mshe096daa6c59b130p1fc5cbjsn08d0a775b101',
        'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
      }})
      .pipe(
        tap((data) => this.jsonService.doStringify(data)),
        catchError(this.errorHandler)
      );
  }
 
  
}
