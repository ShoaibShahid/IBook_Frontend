
import { throwError as observableThrowError, Observable, from } from "rxjs";

import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { catchError, tap } from "rxjs/operators";

import { CoreHelper } from "../helpers/core.helper";
import { JsonService } from "./json.service";

@Injectable({
  providedIn: "root",
})
export class UserService {
 
  constructor(
    private http: HttpClient,
    private coreHelper: CoreHelper,
    private jsonService: JsonService
  ) {
  }

  // login(
  //   subdomain = null,
  //   email_id = null,
  //   password = null,
  //   timezone = null,
  //   authToken = null
  // ): Observable<any> {
  //   let body;
  //   if (authToken) {
  //     body = { timezone: timezone, token: authToken };
  //   } else {
  //     body = { subdomain, email_id, password, timezone };
  //   }

  //   return this.http.post<any>(this._url, body).pipe(
  //     map((user) => {
  //       if (user) {
  //         this.currentUser.setAll(user);
  //         if (user.domain_labeling_popup) {
  //           this.currentUser.setAlertNotification(user.domain_labeling_popup);
  //         }
  //       }
  //       return user;
  //     })
  //   );
  // }
  errorHandler(error: HttpErrorResponse) {
    return observableThrowError(error.error || "Server Error");
  }

  onCreateUser(param: any): Observable<any> {
    const endPoint = this.coreHelper.createUrl('user/create');
    return this.http
      .post<any>(endPoint, param)
      .pipe(
        tap((data) => this.jsonService.doStringify(data)),
        catchError(this.errorHandler)
      );
  }
  onLoginUser(param: any): Observable<any> {
    const endPoint = this.coreHelper.createUrl('user/login');
    return this.http
      .post<any>(endPoint, param)
      .pipe(
        tap((data) => this.jsonService.doStringify(data)),
        catchError(this.errorHandler)
      );
  }
  
}
