/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { changePassword } from '../fn/user-controller/change-password';
import { ChangePassword$Params } from '../fn/user-controller/change-password';
import { findUserById } from '../fn/user-controller/find-user-by-id';
import { FindUserById$Params } from '../fn/user-controller/find-user-by-id';
import { updateCurrent } from '../fn/user-controller/update-current';
import { UpdateCurrent$Params } from '../fn/user-controller/update-current';
import { User } from '../models/user';

@Injectable({ providedIn: 'root' })
export class UserControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `updateCurrent()` */
  static readonly UpdateCurrentPath = '/user/update';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateCurrent()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateCurrent$Response(params: UpdateCurrent$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
    return updateCurrent(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateCurrent$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateCurrent(params: UpdateCurrent$Params, context?: HttpContext): Observable<{
}> {
    return this.updateCurrent$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
}>): {
} => r.body)
    );
  }

  /** Path part for operation `changePassword()` */
  static readonly ChangePasswordPath = '/user/changepassword';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `changePassword()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  changePassword$Response(params: ChangePassword$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
    return changePassword(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `changePassword$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  changePassword(params: ChangePassword$Params, context?: HttpContext): Observable<{
}> {
    return this.changePassword$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
}>): {
} => r.body)
    );
  }

  /** Path part for operation `findUserById()` */
  static readonly FindUserByIdPath = '/user/id/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findUserById()` instead.
   *
   * This method doesn't expect any request body.
   */
  findUserById$Response(params: FindUserById$Params, context?: HttpContext): Observable<StrictHttpResponse<User>> {
    return findUserById(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findUserById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findUserById(params: FindUserById$Params, context?: HttpContext): Observable<User> {
    return this.findUserById$Response(params, context).pipe(
      map((r: StrictHttpResponse<User>): User => r.body)
    );
  }

}
