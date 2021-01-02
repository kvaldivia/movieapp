import { Component } from "@angular/core";
import { NavController } from "@ionic/angular";
import { Movie } from "../../domain/entity/Movie";

import { BaseComponent } from "../../base.component";
import { PopularMoviesPresenter } from "./popular-movies.presenter";

@Component({
  selector: "page-popular-movies",
  templateUrl: "popular-movies.page.html",
})
export class PopularMoviesPage extends BaseComponent {
  movies: Movie[] = [];

  constructor(
    public presenter: PopularMoviesPresenter,
    public navCtrl: NavController
  ) {
    super(presenter);
    this.presenter.bind(this);
  }

  ionViewDidEnter() {
    this.presenter.fetchMovies();
  }
}
