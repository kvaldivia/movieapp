import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

import { Movie, MovieGenre } from '../../../domain/entity';

export interface MoviesRepository {
  getPopularMovies(): Observable<Movie[]>;
  getMovieDetails(id: string): Observable<Movie>;
  getMovieGenres(): Observable<MovieGenre[]>;
}

export const MOVIES_REPOSITORY = new InjectionToken('MoviesRepository');
