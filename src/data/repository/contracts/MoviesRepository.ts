import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

import { Movie } from '../../../domain/entity/Movie';

export interface MoviesRepository {
  getMovies(): Observable<Movie[]>;
  getMovieDetails(id: string): Observable<Movie>;
}

export const MOVIES_REPOSITORY = new InjectionToken('MoviesRepository');
