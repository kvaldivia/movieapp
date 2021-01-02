import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { environment } from "../../environments/environment";

@Injectable()
export class MoviesDbApiAuthInterceptor implements HttpInterceptor {
  constructor() {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const params = { api_key: environment.moviesApiKey };
    const authRequest = request.clone({ setParams: { ...params }}); 

    return next.handle(authRequest);
  }
}
