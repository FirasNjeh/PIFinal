/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { AgeGroupStatisticsDto } from '../../models/age-group-statistics-dto';

export interface ObtenirStatistiquesTranchesAge$Params {
}

export function obtenirStatistiquesTranchesAge(http: HttpClient, rootUrl: string, params?: ObtenirStatistiquesTranchesAge$Params, context?: HttpContext): Observable<StrictHttpResponse<AgeGroupStatisticsDto>> {
  const rb = new RequestBuilder(rootUrl, obtenirStatistiquesTranchesAge.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<AgeGroupStatisticsDto>;
    })
  );
}

obtenirStatistiquesTranchesAge.PATH = '/api/v1/admin/stattrancheage';
