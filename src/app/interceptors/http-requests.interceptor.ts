import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoadingService } from '../services/loading.service';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class HttpRequestsInterceptor implements HttpInterceptor {

  constructor(
    private isLoading: LoadingService
  ) {}

  

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.isLoading.setLoading(true, request.url);
    return next.handle(request).pipe(
        catchError((err) => {
          this.isLoading.setLoading(false, request.url);
          return err;
        })
      ).pipe(
        map<HttpEvent<any>, any>((evt: HttpEvent<any>) => {
          if (evt instanceof HttpResponse) {
            this.isLoading.setLoading(false, request.url);
          }
          return evt;
        })
    );
  }
}
