import { Injectable } from "@angular/core";
import { Observable, from, of } from "rxjs";
import { HttpClient, HttpResponse, HttpParams } from "@angular/common/http";
import { Plugins } from "@capacitor/core";

import { MoviesRepository } from "./contracts/MoviesRepository";
import {
  Movie,
  Language,
  Company,
  Country,
  MovieGenre,
} from "../../domain/entity";
import {
  MoviesResponseDto,
  MovieDetailsResponseDto,
  MovieGenreDto,
  MovieGenresResponseDto,
  LanguageDto,
  CompanyDto,
  CountryDto,
} from "../entity/Movie";
import {
  GET_POPULAR_MOVIES_URL,
  GET_MOVIE_GENRES_URL,
  getMovieDetailsUrl,
} from "../../net/ApiService";
import { mergeMap, tap, catchError, map, combineAll } from "rxjs/operators";

import { environment } from "../../environments/environment";

const { Storage } = Plugins;

@Injectable()
export class MoviesRepositoryImpl implements MoviesRepository {
  constructor(private http: HttpClient) {}

  getPopularMovies(pageNumber: number = 1): Observable<Movie[]> {
    const httpParams = new HttpParams({ fromString: `page=${pageNumber}` });
    return this.http.get(GET_POPULAR_MOVIES_URL, { params: httpParams }).pipe(
      // this is actually caching the request
      tap(async (data: MoviesResponseDto) => {
        await Storage.set({
          key: `${GET_POPULAR_MOVIES_URL}__${pageNumber}`,
          value: JSON.stringify(data),
        });
      }),
      tap(async (data: MoviesResponseDto) => {
        await this.getMovieGenres().toPromise();
      }),
      catchError(async (err, caught) => {
        const key = `${GET_POPULAR_MOVIES_URL}__${pageNumber}`;
        const { value } = await Storage.get({ key });
        return JSON.parse(value);
      }),
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
          return this.updateMovieStaticUrls(movie);
        });

        return movies;
      }),
      mergeMap((incompleteMovies: Movie[]) => {
        const movies: Observable<Movie>[] = incompleteMovies.map((movie) => {
          const genres: Observable<MovieGenre>[] = movie.genreIds.map((genreId) => {
            return this.getMovieGenre(genreId);
          });
          return from(genres).pipe(
            combineAll(),
            map((genres: MovieGenre[]) => {
              movie.genres = genres;
              return movie;
            })
          );
        });
        return from(movies).pipe(combineAll());
      }),
    );
  }

  getMovieDetails(id: string): Observable<Movie> {
    const { moviesStaticUrl } = environment;
    return this.http.get(getMovieDetailsUrl(id), {}).pipe(
      map((data: MovieDetailsResponseDto) => {
        const movie = new Movie();
        const {
          genres,
          spoken_languages,
          production_companies,
          production_countries,
        } = data;

        movie.genres = genres.map((genreData: MovieGenreDto) => {
          const genre = new MovieGenre();
          ({ id: genre.id, name: genre.name } = genreData);
          return genre;
        });

        movie.spokenLanguages = spoken_languages.map((lang: LanguageDto) => {
          const language = new Language();
          ({
            english_name: language.englishName,
            iso_639_1: language.iso639_1,
            name: language.name,
          } = lang);
          return language;
        });

        movie.productionCompanies = production_companies.map(
          (comp: CompanyDto) => {
            const company = new Company();
            ({
              id: company.id,
              logo_path: company.logoPath,
              name: company.name,
              origin_country: company.originCountry,
            } = comp);
            company.logoPath = `${moviesStaticUrl}${company.logoPath}`;
            return company;
          }
        );

        movie.productionCountries = production_countries.map(
          (countryData: CountryDto) => {
            const country = new Country();
            ({
              iso_3166_1: country.iso3166_1,
              name: country.name,
            } = countryData);
            return country;
          }
        );

        ({
          adult: movie.adult,
          backdrop_path: movie.backdropPath,
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
          imdb_id: movie.imdbId,
          revenue: movie.revenue,
          runtime: movie.runtime,
          status: movie.status,
          tagline: movie.tagline,
        } = data);

        return this.updateMovieStaticUrls(movie);
      })
    );
  }

  getMovieGenres(): Observable<MovieGenre[]> {
    return this.http.get(GET_MOVIE_GENRES_URL, {}).pipe(
      tap(async (data: MovieGenresResponseDto) => {
        data.genres.forEach(async (genreData) => {
          await Storage.set({
            key: `${GET_MOVIE_GENRES_URL}__${genreData.id}`,
            value: JSON.stringify(genreData),
          });
        });
      }),
      map((data: MovieGenresResponseDto) => {
        const genresData = data.genres;
        const genres: MovieGenre[] = genresData.map(
          (genreData: MovieGenreDto) => {
            const genre = new MovieGenre();
            ({ id: genre.id, name: genre.name } = genreData);
            return genre;
          }
        );

        return genres;
      })
    );
  }

  getMovieGenre(id: number): Observable<MovieGenre> {
    return from(Storage.get({ key: `${GET_MOVIE_GENRES_URL}__${id}` })).pipe(
      map((data) => {
        const { value } = data;
        const genreData = JSON.parse(value);
        if (!genreData) {
          return null;
        }
        const genre = new MovieGenre();
        ({ id: genre.id, name: genre.name } = genreData);
        return genre;
      })
    );
  }

  private updateMovieStaticUrls(movie: Movie) {
    const { moviesStaticUrl } = environment;
    movie.posterPath = `${moviesStaticUrl}${movie.posterPath}`;
    movie.backdropPath = `${moviesStaticUrl}${movie.backdropPath}`;
    return movie;
  }
}
