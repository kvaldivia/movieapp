import { Injectable, Inject } from "@angular/core";
import { LoadingController } from "@ionic/angular";

import { Observable } from "rxjs";

import { MoviesRepository, MOVIES_REPOSITORY } from "../../data/repository/contracts/MoviesRepository";

import { Presenter } from "../../base.presenter";
import { PopularMoviesPage } from "./popular-movies.page";

import { Movie } from "../../domain/entity/Movie";

@Injectable({
  providedIn: "root",
})
export class PopularMoviesPresenter implements Presenter {
  page: PopularMoviesPage = null;

  constructor(
    @Inject(MOVIES_REPOSITORY) public moviesRepo: MoviesRepository,
    public loadCtrl: LoadingController
  ) {}

  bind(page: PopularMoviesPage) {
    this.page = page;
  }

  async fetchMovies(): Promise<void> {
    const loader = await this.loadCtrl.create();
    this.moviesRepo.getMovies().subscribe(
      Observable.create((movies: Movie[]) => {
        this.page.movies = movies;
        console.log(movies);
        loader.dismiss();
      })
    );
  }
}
