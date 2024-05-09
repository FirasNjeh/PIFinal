/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { User } from '../../models/user';

export interface FindByPrenom$Params {
  prenom: string;
}

export function findByPrenom(http: HttpClient, rootUrl: string, params: FindByPrenom$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<User>>> {
  const rb = new RequestBuilder(rootUrl, findByPrenom.PATH, 'get');
  if (params) {
    rb.path('prenom', params.prenom, {});
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<User>>;
    })
  );
}

findByPrenom.PATH = '/api/v1/admin/prenom/{prenom}';
