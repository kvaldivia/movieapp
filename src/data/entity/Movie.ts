export interface MovieSummaryDto {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface MoviesResponseDto {
  page: string;
  results: MovieSummaryDto[];
}

export interface MovieGenreDto {
  id: number;
  name: string;
}

export interface CompanyDto {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

export interface CountryDto {
  iso_3166_1: string;
  name: string;
}

export interface LanguageDto {
  english_name: string;
  iso_639_1: string;
  name: string;
}

export interface MovieDetailsResponseDto {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: string | null;
  budget: number;
  genres: MovieGenreDto[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: CompanyDto[];
  production_countries: CountryDto[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: LanguageDto[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
