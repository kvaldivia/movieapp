import { NgModule, ErrorHandler, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';

import { ComponentLibraryModule } from 'mojix-components-module';

import { MOVIES_REPOSITORY } from '../data/repository/contracts/MoviesRepository';
import { MoviesRepositoryImpl } from '../data/repository/MoviesRepositoryImpl';
import { InterceptorProvider } from '../net/interceptors/interceptor';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HTTP } from '@ionic-native/http/ngx';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [MyApp],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    ComponentLibraryModule,
    HttpClientModule
  ],
  bootstrap: [MyApp],
  entryComponents: [],
  providers: [
    StatusBar,
    SplashScreen,
    HTTP,
    { provide: MOVIES_REPOSITORY, useClass: MoviesRepositoryImpl },
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorProvider, multi: true },
  ],
  exports: [
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
