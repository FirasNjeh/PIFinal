/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { create } from '../fn/portefeuille-controller/create';
import { Create$Params } from '../fn/portefeuille-controller/create';
import { delete$ } from '../fn/portefeuille-controller/delete';
import { Delete$Params } from '../fn/portefeuille-controller/delete';
import { findById } from '../fn/portefeuille-controller/find-by-id';
import { FindById$Params } from '../fn/portefeuille-controller/find-by-id';
import { Portefeuille } from '../models/portefeuille';
import { read } from '../fn/portefeuille-controller/read';
import { Read$Params } from '../fn/portefeuille-controller/read';
import { update } from '../fn/portefeuille-controller/update';
import { Update$Params } from '../fn/portefeuille-controller/update';

@Injectable({ providedIn: 'root' })
export class PortefeuilleControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `update()` */
  static readonly UpdatePath = '/portefeuille/update/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `update()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  update$Response(params: Update$Params, context?: HttpContext): Observable<StrictHttpResponse<Portefeuille>> {
    return update(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `update$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  update(params: Update$Params, context?: HttpContext): Observable<Portefeuille> {
    return this.update$Response(params, context).pipe(
      map((r: StrictHttpResponse<Portefeuille>): Portefeuille => r.body)
    );
  }

  /** Path part for operation `create()` */
  static readonly CreatePath = '/portefeuille/create';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `create()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  create$Response(params: Create$Params, context?: HttpContext): Observable<StrictHttpResponse<Portefeuille>> {
    return create(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `create$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  create(params: Create$Params, context?: HttpContext): Observable<Portefeuille> {
    return this.create$Response(params, context).pipe(
      map((r: StrictHttpResponse<Portefeuille>): Portefeuille => r.body)
    );
  }

  /** Path part for operation `findById()` */
  static readonly FindByIdPath = '/portefeuille/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findById()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById$Response(params: FindById$Params, context?: HttpContext): Observable<StrictHttpResponse<Portefeuille>> {
    return findById(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById(params: FindById$Params, context?: HttpContext): Observable<Portefeuille> {
    return this.findById$Response(params, context).pipe(
      map((r: StrictHttpResponse<Portefeuille>): Portefeuille => r.body)
    );
  }

  /** Path part for operation `read()` */
  static readonly ReadPath = '/portefeuille/all';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `read()` instead.
   *
   * This method doesn't expect any request body.
   */
  read$Response(params?: Read$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Portefeuille>>> {
    return read(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `read$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  read(params?: Read$Params, context?: HttpContext): Observable<Array<Portefeuille>> {
    return this.read$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Portefeuille>>): Array<Portefeuille> => r.body)
    );
  }

  /** Path part for operation `delete()` */
  static readonly DeletePath = '/portefeuille/delete/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `delete()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete$Response(params: Delete$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return delete$(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `delete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete(params: Delete$Params, context?: HttpContext): Observable<string> {
    return this.delete$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

}
