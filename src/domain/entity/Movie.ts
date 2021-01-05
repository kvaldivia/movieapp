import { Company } from "./Company";
import { Country } from "./Country";
import { Language } from "./Language";

export class MovieGenre {
  id: number;
  name: string;
}

export class Movie {
  adult: boolean;
  backdropPath: string;
  genreIds: number[];
  genres?: MovieGenre[];
  id: number;
  imdbId?: string;
  originalLanguage: string;
  originalTitle: string;
  overview: string;
  popularity: number;
  posterPath: string;
  productionCompanies?: Company[];
  productionCountries?: Country[];
  releaseDate: string;
  revenue?: number;
  runtime?: number;
  spokenLanguages?: Language[];
  status?: string;
  tagline?: string;
  title: string;
  video: boolean;
  voteAverage: number;
  voteCount: number;
}
