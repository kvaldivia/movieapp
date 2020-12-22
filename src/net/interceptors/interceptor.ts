import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from "@angular/common/http";
import { Observable } from "rxjs";

/*
  Generated class for the InterceptorProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class InterceptorProvider implements HttpInterceptor {
  constructor(public http: HttpClient) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const req = request.clone({
      setParams: { api_key: 'asdfasdfasdfasdfasdf' },
    });

    return next.handle(req);
  }
}
