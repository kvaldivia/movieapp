import { environment } from '../environments/environment';


const { moviesApiHost, moviesApiVersion } = environment;

export const GET_POPULAR_MOVIES_URL = `${moviesApiHost}/${moviesApiVersion}/movie/popular`;
export const GET_MOVIE_DETAILS_URL = `${moviesApiHost}/${moviesApiVersion}/movie`;
export const getMovieDetailsUrl = (movieId: string): string => {
  return `${GET_MOVIE_DETAILS_URL }/${movieId}`;
};
