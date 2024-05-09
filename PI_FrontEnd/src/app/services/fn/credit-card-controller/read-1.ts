/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CreditCard } from '../../models/credit-card';

export interface Read1$Params {
}

export function read1(http: HttpClient, rootUrl: string, params?: Read1$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<CreditCard>>> {
  const rb = new RequestBuilder(rootUrl, read1.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<CreditCard>>;
    })
  );
}

read1.PATH = '/creditcard/all';
