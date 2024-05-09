/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CreditCard } from '../../models/credit-card';

export interface FindById1$Params {
  id: number;
}

export function findById1(http: HttpClient, rootUrl: string, params: FindById1$Params, context?: HttpContext): Observable<StrictHttpResponse<CreditCard>> {
  const rb = new RequestBuilder(rootUrl, findById1.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
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

findById1.PATH = '/creditcard/{id}';
