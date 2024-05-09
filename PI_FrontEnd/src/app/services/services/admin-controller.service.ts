/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { AgeGroupStatisticsDto } from '../models/age-group-statistics-dto';
import { banUser } from '../fn/admin-controller/ban-user';
import { BanUser$Params } from '../fn/admin-controller/ban-user';
import { calculerAgeMoyenUsers } from '../fn/admin-controller/calculer-age-moyen-users';
import { CalculerAgeMoyenUsers$Params } from '../fn/admin-controller/calculer-age-moyen-users';
import { create2 } from '../fn/admin-controller/create-2';
import { Create2$Params } from '../fn/admin-controller/create-2';
import { debanUser } from '../fn/admin-controller/deban-user';
import { DebanUser$Params } from '../fn/admin-controller/deban-user';
import { delete2 } from '../fn/admin-controller/delete-2';
import { Delete2$Params } from '../fn/admin-controller/delete-2';
import { findByCinLike } from '../fn/admin-controller/find-by-cin-like';
import { FindByCinLike$Params } from '../fn/admin-controller/find-by-cin-like';
import { findByMatriculeFiscale } from '../fn/admin-controller/find-by-matricule-fiscale';
import { FindByMatriculeFiscale$Params } from '../fn/admin-controller/find-by-matricule-fiscale';
import { findByNom } from '../fn/admin-controller/find-by-nom';
import { FindByNom$Params } from '../fn/admin-controller/find-by-nom';
import { findByPrenom } from '../fn/admin-controller/find-by-prenom';
import { FindByPrenom$Params } from '../fn/admin-controller/find-by-prenom';
import { findByPrenomAndNom } from '../fn/admin-controller/find-by-prenom-and-nom';
import { FindByPrenomAndNom$Params } from '../fn/admin-controller/find-by-prenom-and-nom';
import { findUserById1 } from '../fn/admin-controller/find-user-by-id-1';
import { FindUserById1$Params } from '../fn/admin-controller/find-user-by-id-1';
import { GenderStatisticsDto } from '../models/gender-statistics-dto';
import { obtenirStatistiquesGenre } from '../fn/admin-controller/obtenir-statistiques-genre';
import { ObtenirStatistiquesGenre$Params } from '../fn/admin-controller/obtenir-statistiques-genre';
import { obtenirStatistiquesTranchesAge } from '../fn/admin-controller/obtenir-statistiques-tranches-age';
import { ObtenirStatistiquesTranchesAge$Params } from '../fn/admin-controller/obtenir-statistiques-tranches-age';
import { read2 } from '../fn/admin-controller/read-2';
import { Read2$Params } from '../fn/admin-controller/read-2';
import { trierUtilisateurParAge } from '../fn/admin-controller/trier-utilisateur-par-age';
import { TrierUtilisateurParAge$Params } from '../fn/admin-controller/trier-utilisateur-par-age';
import { trierUtilisateurParNom } from '../fn/admin-controller/trier-utilisateur-par-nom';
import { TrierUtilisateurParNom$Params } from '../fn/admin-controller/trier-utilisateur-par-nom';
import { trierUtilisateurParPrenom } from '../fn/admin-controller/trier-utilisateur-par-prenom';
import { TrierUtilisateurParPrenom$Params } from '../fn/admin-controller/trier-utilisateur-par-prenom';
import { trierUtilisateurParRole } from '../fn/admin-controller/trier-utilisateur-par-role';
import { TrierUtilisateurParRole$Params } from '../fn/admin-controller/trier-utilisateur-par-role';
import { trierUtilisateurParSalaireCroissant } from '../fn/admin-controller/trier-utilisateur-par-salaire-croissant';
import { TrierUtilisateurParSalaireCroissant$Params } from '../fn/admin-controller/trier-utilisateur-par-salaire-croissant';
import { trierUtilisateurParSalaireDecroissant } from '../fn/admin-controller/trier-utilisateur-par-salaire-decroissant';
import { TrierUtilisateurParSalaireDecroissant$Params } from '../fn/admin-controller/trier-utilisateur-par-salaire-decroissant';
import { update2 } from '../fn/admin-controller/update-2';
import { Update2$Params } from '../fn/admin-controller/update-2';
import { User } from '../models/user';

@Injectable({ providedIn: 'root' })
export class AdminControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `update2()` */
  static readonly Update2Path = '/api/v1/admin/update/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `update2()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  update2$Response(params: Update2$Params, context?: HttpContext): Observable<StrictHttpResponse<User>> {
    return update2(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `update2$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  update2(params: Update2$Params, context?: HttpContext): Observable<User> {
    return this.update2$Response(params, context).pipe(
      map((r: StrictHttpResponse<User>): User => r.body)
    );
  }

  /** Path part for operation `debanUser()` */
  static readonly DebanUserPath = '/api/v1/admin/deban/{userId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `debanUser()` instead.
   *
   * This method doesn't expect any request body.
   */
  debanUser$Response(params: DebanUser$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return debanUser(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `debanUser$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  debanUser(params: DebanUser$Params, context?: HttpContext): Observable<void> {
    return this.debanUser$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `create2()` */
  static readonly Create2Path = '/api/v1/admin/create';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `create2()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  create2$Response(params: Create2$Params, context?: HttpContext): Observable<StrictHttpResponse<User>> {
    return create2(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `create2$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  create2(params: Create2$Params, context?: HttpContext): Observable<User> {
    return this.create2$Response(params, context).pipe(
      map((r: StrictHttpResponse<User>): User => r.body)
    );
  }

  /** Path part for operation `banUser()` */
  static readonly BanUserPath = '/api/v1/admin/ban/{userId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `banUser()` instead.
   *
   * This method doesn't expect any request body.
   */
  banUser$Response(params: BanUser$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return banUser(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `banUser$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  banUser(params: BanUser$Params, context?: HttpContext): Observable<void> {
    return this.banUser$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `obtenirStatistiquesTranchesAge()` */
  static readonly ObtenirStatistiquesTranchesAgePath = '/api/v1/admin/stattrancheage';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `obtenirStatistiquesTranchesAge()` instead.
   *
   * This method doesn't expect any request body.
   */
  obtenirStatistiquesTranchesAge$Response(params?: ObtenirStatistiquesTranchesAge$Params, context?: HttpContext): Observable<StrictHttpResponse<AgeGroupStatisticsDto>> {
    return obtenirStatistiquesTranchesAge(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `obtenirStatistiquesTranchesAge$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  obtenirStatistiquesTranchesAge(params?: ObtenirStatistiquesTranchesAge$Params, context?: HttpContext): Observable<AgeGroupStatisticsDto> {
    return this.obtenirStatistiquesTranchesAge$Response(params, context).pipe(
      map((r: StrictHttpResponse<AgeGroupStatisticsDto>): AgeGroupStatisticsDto => r.body)
    );
  }

  /** Path part for operation `obtenirStatistiquesGenre()` */
  static readonly ObtenirStatistiquesGenrePath = '/api/v1/admin/statgenre';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `obtenirStatistiquesGenre()` instead.
   *
   * This method doesn't expect any request body.
   */
  obtenirStatistiquesGenre$Response(params?: ObtenirStatistiquesGenre$Params, context?: HttpContext): Observable<StrictHttpResponse<GenderStatisticsDto>> {
    return obtenirStatistiquesGenre(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `obtenirStatistiquesGenre$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  obtenirStatistiquesGenre(params?: ObtenirStatistiquesGenre$Params, context?: HttpContext): Observable<GenderStatisticsDto> {
    return this.obtenirStatistiquesGenre$Response(params, context).pipe(
      map((r: StrictHttpResponse<GenderStatisticsDto>): GenderStatisticsDto => r.body)
    );
  }

  /** Path part for operation `trierUtilisateurParPrenom()` */
  static readonly TrierUtilisateurParPrenomPath = '/api/v1/admin/sortbysurname';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `trierUtilisateurParPrenom()` instead.
   *
   * This method doesn't expect any request body.
   */
  trierUtilisateurParPrenom$Response(params?: TrierUtilisateurParPrenom$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<User>>> {
    return trierUtilisateurParPrenom(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `trierUtilisateurParPrenom$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  trierUtilisateurParPrenom(params?: TrierUtilisateurParPrenom$Params, context?: HttpContext): Observable<Array<User>> {
    return this.trierUtilisateurParPrenom$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<User>>): Array<User> => r.body)
    );
  }

  /** Path part for operation `trierUtilisateurParSalaireDecroissant()` */
  static readonly TrierUtilisateurParSalaireDecroissantPath = '/api/v1/admin/sortbysalairedecroissant';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `trierUtilisateurParSalaireDecroissant()` instead.
   *
   * This method doesn't expect any request body.
   */
  trierUtilisateurParSalaireDecroissant$Response(params?: TrierUtilisateurParSalaireDecroissant$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<User>>> {
    return trierUtilisateurParSalaireDecroissant(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `trierUtilisateurParSalaireDecroissant$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  trierUtilisateurParSalaireDecroissant(params?: TrierUtilisateurParSalaireDecroissant$Params, context?: HttpContext): Observable<Array<User>> {
    return this.trierUtilisateurParSalaireDecroissant$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<User>>): Array<User> => r.body)
    );
  }

  /** Path part for operation `trierUtilisateurParSalaireCroissant()` */
  static readonly TrierUtilisateurParSalaireCroissantPath = '/api/v1/admin/sortbysalairecroissant';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `trierUtilisateurParSalaireCroissant()` instead.
   *
   * This method doesn't expect any request body.
   */
  trierUtilisateurParSalaireCroissant$Response(params?: TrierUtilisateurParSalaireCroissant$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<User>>> {
    return trierUtilisateurParSalaireCroissant(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `trierUtilisateurParSalaireCroissant$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  trierUtilisateurParSalaireCroissant(params?: TrierUtilisateurParSalaireCroissant$Params, context?: HttpContext): Observable<Array<User>> {
    return this.trierUtilisateurParSalaireCroissant$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<User>>): Array<User> => r.body)
    );
  }

  /** Path part for operation `trierUtilisateurParRole()` */
  static readonly TrierUtilisateurParRolePath = '/api/v1/admin/sortbyrole';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `trierUtilisateurParRole()` instead.
   *
   * This method doesn't expect any request body.
   */
  trierUtilisateurParRole$Response(params?: TrierUtilisateurParRole$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<User>>> {
    return trierUtilisateurParRole(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `trierUtilisateurParRole$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  trierUtilisateurParRole(params?: TrierUtilisateurParRole$Params, context?: HttpContext): Observable<Array<User>> {
    return this.trierUtilisateurParRole$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<User>>): Array<User> => r.body)
    );
  }

  /** Path part for operation `trierUtilisateurParNom()` */
  static readonly TrierUtilisateurParNomPath = '/api/v1/admin/sortbyname';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `trierUtilisateurParNom()` instead.
   *
   * This method doesn't expect any request body.
   */
  trierUtilisateurParNom$Response(params?: TrierUtilisateurParNom$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<User>>> {
    return trierUtilisateurParNom(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `trierUtilisateurParNom$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  trierUtilisateurParNom(params?: TrierUtilisateurParNom$Params, context?: HttpContext): Observable<Array<User>> {
    return this.trierUtilisateurParNom$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<User>>): Array<User> => r.body)
    );
  }

  /** Path part for operation `trierUtilisateurParAge()` */
  static readonly TrierUtilisateurParAgePath = '/api/v1/admin/sortbyage';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `trierUtilisateurParAge()` instead.
   *
   * This method doesn't expect any request body.
   */
  trierUtilisateurParAge$Response(params?: TrierUtilisateurParAge$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<User>>> {
    return trierUtilisateurParAge(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `trierUtilisateurParAge$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  trierUtilisateurParAge(params?: TrierUtilisateurParAge$Params, context?: HttpContext): Observable<Array<User>> {
    return this.trierUtilisateurParAge$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<User>>): Array<User> => r.body)
    );
  }

  /** Path part for operation `findByPrenom()` */
  static readonly FindByPrenomPath = '/api/v1/admin/prenom/{prenom}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findByPrenom()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByPrenom$Response(params: FindByPrenom$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<User>>> {
    return findByPrenom(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findByPrenom$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByPrenom(params: FindByPrenom$Params, context?: HttpContext): Observable<Array<User>> {
    return this.findByPrenom$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<User>>): Array<User> => r.body)
    );
  }

  /** Path part for operation `findByNom()` */
  static readonly FindByNomPath = '/api/v1/admin/nom/{nom}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findByNom()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByNom$Response(params: FindByNom$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<User>>> {
    return findByNom(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findByNom$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByNom(params: FindByNom$Params, context?: HttpContext): Observable<Array<User>> {
    return this.findByNom$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<User>>): Array<User> => r.body)
    );
  }

  /** Path part for operation `findByPrenomAndNom()` */
  static readonly FindByPrenomAndNomPath = '/api/v1/admin/nom/{nom}/prenom/{prenom}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findByPrenomAndNom()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByPrenomAndNom$Response(params: FindByPrenomAndNom$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<User>>> {
    return findByPrenomAndNom(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findByPrenomAndNom$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByPrenomAndNom(params: FindByPrenomAndNom$Params, context?: HttpContext): Observable<Array<User>> {
    return this.findByPrenomAndNom$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<User>>): Array<User> => r.body)
    );
  }

  /** Path part for operation `findByMatriculeFiscale()` */
  static readonly FindByMatriculeFiscalePath = '/api/v1/admin/matfiscale/{matriculeFiscale}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findByMatriculeFiscale()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByMatriculeFiscale$Response(params: FindByMatriculeFiscale$Params, context?: HttpContext): Observable<StrictHttpResponse<User>> {
    return findByMatriculeFiscale(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findByMatriculeFiscale$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByMatriculeFiscale(params: FindByMatriculeFiscale$Params, context?: HttpContext): Observable<User> {
    return this.findByMatriculeFiscale$Response(params, context).pipe(
      map((r: StrictHttpResponse<User>): User => r.body)
    );
  }

  /** Path part for operation `findUserById1()` */
  static readonly FindUserById1Path = '/api/v1/admin/id/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findUserById1()` instead.
   *
   * This method doesn't expect any request body.
   */
  findUserById1$Response(params: FindUserById1$Params, context?: HttpContext): Observable<StrictHttpResponse<User>> {
    return findUserById1(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findUserById1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findUserById1(params: FindUserById1$Params, context?: HttpContext): Observable<User> {
    return this.findUserById1$Response(params, context).pipe(
      map((r: StrictHttpResponse<User>): User => r.body)
    );
  }

  /** Path part for operation `findByCinLike()` */
  static readonly FindByCinLikePath = '/api/v1/admin/cin/{cin}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findByCinLike()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByCinLike$Response(params: FindByCinLike$Params, context?: HttpContext): Observable<StrictHttpResponse<User>> {
    return findByCinLike(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findByCinLike$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByCinLike(params: FindByCinLike$Params, context?: HttpContext): Observable<User> {
    return this.findByCinLike$Response(params, context).pipe(
      map((r: StrictHttpResponse<User>): User => r.body)
    );
  }

  /** Path part for operation `read2()` */
  static readonly Read2Path = '/api/v1/admin/all';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `read2()` instead.
   *
   * This method doesn't expect any request body.
   */
  read2$Response(params?: Read2$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<User>>> {
    return read2(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `read2$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  read2(params?: Read2$Params, context?: HttpContext): Observable<Array<User>> {
    return this.read2$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<User>>): Array<User> => r.body)
    );
  }

  /** Path part for operation `calculerAgeMoyenUsers()` */
  static readonly CalculerAgeMoyenUsersPath = '/api/v1/admin/agemoyen';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `calculerAgeMoyenUsers()` instead.
   *
   * This method doesn't expect any request body.
   */
  calculerAgeMoyenUsers$Response(params?: CalculerAgeMoyenUsers$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return calculerAgeMoyenUsers(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `calculerAgeMoyenUsers$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  calculerAgeMoyenUsers(params?: CalculerAgeMoyenUsers$Params, context?: HttpContext): Observable<number> {
    return this.calculerAgeMoyenUsers$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `delete2()` */
  static readonly Delete2Path = '/api/v1/admin/delete/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `delete2()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete2$Response(params: Delete2$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return delete2(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `delete2$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete2(params: Delete2$Params, context?: HttpContext): Observable<string> {
    return this.delete2$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

}
