/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CreditCard } from '../../models/credit-card';

export interface Create1$Params {
      body: CreditCard
}

export function create1(http: HttpClient, rootUrl: string, params: Create1$Params, context?: HttpContext): Observable<StrictHttpResponse<CreditCard>> {
  const rb = new RequestBuilder(rootUrl, create1.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<CreditCard>;
    })
  );
}

create1.PATH = '/creditcard/create';
