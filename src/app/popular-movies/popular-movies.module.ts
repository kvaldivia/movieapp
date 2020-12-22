import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PopularMoviesPage } from './popular-movies.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { PopularMoviesPageRoutingModule } from './popular-movies-routing.module';

import { MoviesRepositoryImpl } from '../../data/repository/MoviesRepositoryImpl';
import { MOVIES_REPOSITORY } from '../../data/repository/contracts/MoviesRepository';

import { PopularMoviesPresenter } from './popular-movies.presenter';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    PopularMoviesPageRoutingModule
  ],
  providers: [
    { provide: MOVIES_REPOSITORY, useClass: MoviesRepositoryImpl },
    PopularMoviesPresenter
  ],
  declarations: [PopularMoviesPage]
})
export class PopularMoviesPageModule {}
