/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { User } from '../../models/user';

export interface FindByPrenomAndNom$Params {
  prenom: string;
  nom: string;
}

export function findByPrenomAndNom(http: HttpClient, rootUrl: string, params: FindByPrenomAndNom$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<User>>> {
  const rb = new RequestBuilder(rootUrl, findByPrenomAndNom.PATH, 'get');
  if (params) {
    rb.path('prenom', params.prenom, {});
    rb.path('nom', params.nom, {});
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

findByPrenomAndNom.PATH = '/api/v1/admin/nom/{nom}/prenom/{prenom}';
