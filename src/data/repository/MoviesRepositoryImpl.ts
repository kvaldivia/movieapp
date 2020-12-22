import { Injectable } from '@angular/core';
import { Observable, from } from "rxjs";
import { HTTP, HTTPResponse } from "@ionic-native/http/ngx";

import { MoviesRepository } from "./contracts/MoviesRepository";
import { Movie } from "../../domain/entity/Movie";
import { MoviesResponseDto } from "../entity/Movie";
import { GET_POPULAR_MOVIES_URL } from "../../net/ApiService";


@Injectable()
export class MoviesRepositoryImpl implements MoviesRepository {
  constructor(private http: HTTP) {}

  getMovies(): Observable<Movie[]> {
    return from(
      this.http
        .get(GET_POPULAR_MOVIES_URL, {}, {})
        .then((value: HTTPResponse) => {
          const data: MoviesResponseDto = value.data;

          const movies: Movie[] = data.results.map((elm) => {
            const movie = new Movie();
            ({
              adult: movie.adult,
              backdrop_path: movie.backdropPath,
              genre_ids: movie.genreIds,
              id: movie.id,
              original_language: movie.originalLanguage,
              original_title: movie.originalTitle,
              overview: movie.overview,
              popularity: movie.popularity,
              poster_path: movie.posterPath,
              release_date: movie.releaseDate,
              title: movie.title,
              video: movie.video,
              vote_average: movie.voteAverage,
              vote_count: movie.voteCount,
            } = elm);

            return movie;
          });

          return movies;
        })
    );
  }

  getMovieDetails(id: string): Observable<Movie> {
    // TODO: actual implementation
    return null;
  }
}
