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
  id: number;
  originalLanguage: string;
  originalTitle: string;
  overview: string;
  popularity: number;
  posterPath: string;
  releaseDate: string;
  title: string;
  video: boolean;
  voteAverage: number;
  voteCount: number;
  genres?: MovieGenre[];
  imdbId?: string;
  productionCompanies?: Company[];
  productionCountries?: Country[];
  revenue?: number;
  runtime?: number;
  spokenLanguages?: Language[];
  status?: string;
  tagline?: string;
}
