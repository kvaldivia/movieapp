import { Injectable } from "@angular/core";
import { Observable, from } from "rxjs";
import { HttpClient, HttpResponse } from "@angular/common/http";

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
  LanguageDto,
  CompanyDto,
  CountryDto,
} from "../entity/Movie";
import {
  GET_POPULAR_MOVIES_URL,
  getMovieDetailsUrl,
} from "../../net/ApiService";
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
              origin_country: company.originCountry
            } = comp);
            return company;
          }
        );

        movie.productionCountries= production_countries.map(
          (countryData: CountryDto) => {
            const country = new Country();
            ({
              iso_3166_1: country.iso3166_1,
              name: country.name
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

        return movie;
      })
    );
  }
}
