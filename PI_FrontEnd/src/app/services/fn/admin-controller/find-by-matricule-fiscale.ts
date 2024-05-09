/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { User } from '../../models/user';

export interface FindByMatriculeFiscale$Params {
  matriculeFiscale: number;
}

export function findByMatriculeFiscale(http: HttpClient, rootUrl: string, params: FindByMatriculeFiscale$Params, context?: HttpContext): Observable<StrictHttpResponse<User>> {
  const rb = new RequestBuilder(rootUrl, findByMatriculeFiscale.PATH, 'get');
  if (params) {
    rb.path('matriculeFiscale', params.matriculeFiscale, {});
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<User>;
    })
  );
}

findByMatriculeFiscale.PATH = '/api/v1/admin/matfiscale/{matriculeFiscale}';
