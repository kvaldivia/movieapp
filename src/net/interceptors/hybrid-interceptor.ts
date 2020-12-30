import { HTTP } from "@ionic-native/http/ngx";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse,
  HttpParams,
  HttpHeaders,
} from "@angular/common/http";
import { Observable, of, from } from "rxjs";
import { tap, map, catchError } from "rxjs/operators";
import { Injectable } from "@angular/core";
import { Platform } from "@ionic/angular";

@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {
  constructor(private platform: Platform, private http: HTTP) {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const { method, url, headers, params, body } = request;

    const paramsObject = this.objectFromMap(params);
    const headersObject = this.objectFromMap(headers);

    if (!this.platform.is("cordova")) {
      return next.handle(request);
    }

    return this.callNative(url, method, headersObject, paramsObject, body).pipe(
      catchError((err, obs) => {
        return from((response) => {
          return new HttpErrorResponse({
            error: JSON.parse(response.error),
          });
        });
      }),
      map((response) => {
        return new HttpResponse({
          body: JSON.parse(response.data),
        });
      })
    );
  }

  objectFromMap(wrapper: HttpParams | HttpHeaders): any {
    const result = new Map();
    wrapper.keys().forEach((key) => {
      result.set(key, wrapper.get(key));
    });
    return Object.fromEntries(result);
  }

  callNative(url, method, headers, params, body): Observable<any> {
    switch (method) {
      case "GET":
        return from(this.http.get(url, params, headers));
      case "POST":
        return from(this.http.post(url, body, headers));
      case "PUT":
        return from(this.http.put(url, body, headers));
      case "DELETE":
        return from(this.http.delete(url, params, headers));
    }
  }

  successCallback(ob): (response: any) => void {
    return (response: any) => {
      ob.next(
        new HttpResponse({
          body: JSON.parse(response.data),
        })
      );
      ob.complete();
    };
  }

  errorCallback(ob): (response: any) => void {
    return (response: any) => {
      ob.next(
        new HttpErrorResponse({
          error: JSON.parse(response.error),
        })
      );
      ob.complete();
    };
  }
}
