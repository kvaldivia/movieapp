import { environment } from '../environments/environment';


const { moviesApiHost, moviesApiVersion } = environment;

export const GET_POPULAR_MOVIES_URL = `${moviesApiHost}/${moviesApiVersion}/movie/popular`;
