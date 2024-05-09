import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, switchMap, throwError } from 'rxjs';
import { AuthenticationService } from 'src/app/services/services/Authenticate/authentication.service';
import { environment } from 'src/environments/environment';
const unallowedRequests = [
	'/auth/refresh-token',
	'/auth/register',
	'/auth/authenticate',
     '/auth/verify',
     '/auth/forgot-password',
     '/auth/set-password'
     
     
];

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

  constructor(private authService: AuthenticationService) {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<any> {
    if (!unallowedRequests.includes(request.url.substring(`${environment.BaseApiUrl}`.length))) {
      const token = localStorage.getItem('access_token');
      if (token) {
        request = request.clone({
          setHeaders: { Authorization: `Bearer ${token}` },
        });
      }
    }
    return next.handle(request).pipe(
        catchError((error) => {
          if (error instanceof HttpErrorResponse && (error.status === 401 || error.status === 403)) {
            const isWhitelisted = !unallowedRequests.includes(request.url.substring(`${environment.BaseApiUrl}`.length));
            if (isWhitelisted) {
              return this.handleUnauthorized(request, next);
            }
          }
          return throwError(error);
        })
      );
    }

    private handleUnauthorized(request: HttpRequest<any>, next: HttpHandler) {
        return this.authService.RefreshToken().pipe(
          switchMap((response : any) => {
            localStorage.setItem('access_token', response.access_token);
            console.log("from interceptor",response.access_token) ;
            return next.handle(
              request.clone({
                setHeaders: { Authorization: `Bearer ${response.access_token}` },
              })
            );
          }),
          catchError((error) => throwError(error))
        );
    

        }
}
