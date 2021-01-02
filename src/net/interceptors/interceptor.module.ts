import { NgModule } from "@angular/core";
import { HTTP_INTERCEPTORS } from "@angular/common/http";

import { HttpConfigInterceptor } from "./hybrid-interceptor";
import { MoviesDbApiAuthInterceptor  } from "./moviesdb-api-auth-interceptor";

@NgModule({
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MoviesDbApiAuthInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpConfigInterceptor,
      multi: true,
    },
  ],
})
export class InterceptorModule {}
