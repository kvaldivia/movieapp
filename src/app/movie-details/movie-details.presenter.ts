import { Injectable, Inject } from "@angular/core";
import { LoadingController } from "@ionic/angular";

import { BaseComponent } from "../../base.component";

import {
  MoviesRepository,
  MOVIES_REPOSITORY,
} from "../../data/repository/contracts/MoviesRepository";
import { Presenter } from "../../base.presenter";
import { MovieDetailsPage } from "./movie-details.page";

import { Movie } from "../../domain/entity/Movie";

@Injectable({
  providedIn: "root",
})
export class MovieDetailsPresenter extends Presenter {
  page: MovieDetailsPage = null;

  constructor(
    @Inject(MOVIES_REPOSITORY) private moviesRepo: MoviesRepository,
    loadCtrl: LoadingController
  ) {
    super(loadCtrl);
  }

  bind(comp) {
    this.page = comp as MovieDetailsPage;
  }

  async getMovieDetails(movieId: string): Promise<void> {
    await this.showLoading();
    const movie: Movie = await this.moviesRepo
      .getMovieDetails(movieId)
      .toPromise();
    this.page.movie = movie;
    this.hideLoading();
  }
}
