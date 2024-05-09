/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { sayHello } from '../fn/demo-controller/say-hello';
import { SayHello$Params } from '../fn/demo-controller/say-hello';

@Injectable({ providedIn: 'root' })
export class DemoControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `sayHello()` */
  static readonly SayHelloPath = '/api/v1/demo-controller';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `sayHello()` instead.
   *
   * This method doesn't expect any request body.
   */
  sayHello$Response(params?: SayHello$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return sayHello(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `sayHello$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  sayHello(params?: SayHello$Params, context?: HttpContext): Observable<string> {
    return this.sayHello$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

}
