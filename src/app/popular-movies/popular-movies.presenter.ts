import { Injectable, Inject } from "@angular/core";
import { LoadingController } from "@ionic/angular";

import { Observable } from "rxjs";
import { tap } from "rxjs/operators";

import {
  MoviesRepository,
  MOVIES_REPOSITORY,
} from "../../data/repository/contracts/MoviesRepository";

import { Presenter } from "../../base.presenter";
import { PopularMoviesPage } from "./popular-movies.page";

import { Movie } from "../../domain/entity/Movie";

@Injectable({
  providedIn: "root",
})
export class PopularMoviesPresenter extends Presenter {
  page: PopularMoviesPage = null;

  constructor(
    @Inject(MOVIES_REPOSITORY) public moviesRepo: MoviesRepository,
    loadCtrl: LoadingController
  ) {
    super(loadCtrl);
  }

  bind(page) {
    this.page = page as PopularMoviesPage;
  }

  async fetchMovies(pageNumber: number): Promise<void> {
    await this.showLoading();
    this.moviesRepo
      .getPopularMovies(pageNumber)
      .toPromise()
      .then((newMovies) => {
        const movies = [...this.page.movies, ...newMovies];
        const movieIds = new Set();
        this.page.movies = movies.filter((movie, idx, arr) => {
          if (!movieIds.has(movie.id)) {
            movieIds.add(movie.id);
            return true;
          }
          return false;
        });
        this.hideLoading();
      });
  }
}
