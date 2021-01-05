import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { tap, catchError } from "rxjs/operators";

import { MovieDetailsPresenter } from "./movie-details.presenter";
import { BaseComponent } from "../../base.component";
import { ActivatedRoute, ParamMap } from "@angular/router";

import { Movie } from "../../domain/entity/Movie";

@Component({
  selector: "app-movie-details",
  templateUrl: "./movie-details.page.html",
  styleUrls: ["./movie-details.page.scss"],
})
export class MovieDetailsPage extends BaseComponent implements OnInit {
  movie: Movie;

  constructor(public presenter: MovieDetailsPresenter, private route: ActivatedRoute) {
    super(presenter);
    this.presenter.bind(this);
    route.params.subscribe(
      (params: { movieId: string }) => {
        const { movieId } = params;
        this.presenter.getMovieDetails(movieId);
      },
      (err) => {
        console.error(err)
      }
    );
  }

  ngOnInit() {}
}
