import { Component, ViewChild } from "@angular/core";
import { NavController } from "@ionic/angular";
import { IonInfiniteScroll } from '@ionic/angular';

import { Movie } from "../../domain/entity/Movie";
import { BaseComponent } from "../../base.component";
import { PopularMoviesPresenter } from "./popular-movies.presenter";

@Component({
  selector: "page-popular-movies",
  templateUrl: "popular-movies.page.html",
})
export class PopularMoviesPage extends BaseComponent {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  movies: Movie[] = [];
  movieBatch = 1;

  constructor(
    public presenter: PopularMoviesPresenter,
    public navCtrl: NavController
  ) {
    super(presenter);
    this.presenter.bind(this);
  }

  ionViewDidEnter() {
    this.movieBatch = 1;
    this.presenter.fetchMovies(this.movieBatch);
  }

  navigateToDetails(movie: Movie) {
    const destRoute = `movie/${movie.id}/details`;
    this.navCtrl.navigateForward(destRoute);
  }

  loadData(event) {
    this.movieBatch++;
    this.presenter.fetchMovies(this.movieBatch);
    setTimeout(() => {
      event.target.complete();
      event.target.disabled = true;
    }, 500);
  }

  getGenreNames(movie: Movie): string[] {
    const genres = movie.genres.map((genre) => genre.name);
    return genres !== undefined ? genres : [];
  }
}
