/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { create1 } from '../fn/credit-card-controller/create-1';
import { Create1$Params } from '../fn/credit-card-controller/create-1';
import { CreditCard } from '../models/credit-card';
import { delete1 } from '../fn/credit-card-controller/delete-1';
import { Delete1$Params } from '../fn/credit-card-controller/delete-1';
import { findById1 } from '../fn/credit-card-controller/find-by-id-1';
import { FindById1$Params } from '../fn/credit-card-controller/find-by-id-1';
import { read1 } from '../fn/credit-card-controller/read-1';
import { Read1$Params } from '../fn/credit-card-controller/read-1';
import { update1 } from '../fn/credit-card-controller/update-1';
import { Update1$Params } from '../fn/credit-card-controller/update-1';

@Injectable({ providedIn: 'root' })
export class CreditCardControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `update1()` */
  static readonly Update1Path = '/creditcard/update/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `update1()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  update1$Response(params: Update1$Params, context?: HttpContext): Observable<StrictHttpResponse<CreditCard>> {
    return update1(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `update1$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  update1(params: Update1$Params, context?: HttpContext): Observable<CreditCard> {
    return this.update1$Response(params, context).pipe(
      map((r: StrictHttpResponse<CreditCard>): CreditCard => r.body)
    );
  }

  /** Path part for operation `create1()` */
  static readonly Create1Path = '/creditcard/create';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `create1()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  create1$Response(params: Create1$Params, context?: HttpContext): Observable<StrictHttpResponse<CreditCard>> {
    return create1(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `create1$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  create1(params: Create1$Params, context?: HttpContext): Observable<CreditCard> {
    return this.create1$Response(params, context).pipe(
      map((r: StrictHttpResponse<CreditCard>): CreditCard => r.body)
    );
  }

  /** Path part for operation `findById1()` */
  static readonly FindById1Path = '/creditcard/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findById1()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById1$Response(params: FindById1$Params, context?: HttpContext): Observable<StrictHttpResponse<CreditCard>> {
    return findById1(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findById1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById1(params: FindById1$Params, context?: HttpContext): Observable<CreditCard> {
    return this.findById1$Response(params, context).pipe(
      map((r: StrictHttpResponse<CreditCard>): CreditCard => r.body)
    );
  }

  /** Path part for operation `read1()` */
  static readonly Read1Path = '/creditcard/all';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `read1()` instead.
   *
   * This method doesn't expect any request body.
   */
  read1$Response(params?: Read1$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<CreditCard>>> {
    return read1(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `read1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  read1(params?: Read1$Params, context?: HttpContext): Observable<Array<CreditCard>> {
    return this.read1$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<CreditCard>>): Array<CreditCard> => r.body)
    );
  }

  /** Path part for operation `delete1()` */
  static readonly Delete1Path = '/creditcard/delete/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `delete1()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete1$Response(params: Delete1$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return delete1(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `delete1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete1(params: Delete1$Params, context?: HttpContext): Observable<string> {
    return this.delete1$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

}
