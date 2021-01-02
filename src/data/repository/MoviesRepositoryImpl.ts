import { Injectable } from "@angular/core";
import { Observable, from } from "rxjs";
import { HttpClient, HttpResponse } from "@angular/common/http";

import { MoviesRepository } from "./contracts/MoviesRepository";
import { Movie } from "../../domain/entity/Movie";
import { MoviesResponseDto } from "../entity/Movie";
import { GET_POPULAR_MOVIES_URL } from "../../net/ApiService";
import { tap, catchError, map } from "rxjs/operators";

import { environment } from "../../environments/environment";

@Injectable()
export class MoviesRepositoryImpl implements MoviesRepository {
  constructor(private http: HttpClient) {}

  getMovies(): Observable<Movie[]> {
    const { moviesStaticUrl } = environment;
    return this.http.get(GET_POPULAR_MOVIES_URL, {}).pipe(
      map((data: MoviesResponseDto) => {
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

          movie.posterPath = `${moviesStaticUrl}${movie.posterPath}`;
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
