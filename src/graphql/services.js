import {GET_MOVIES, GET_MOVIE} from './queries';
import client from './client';

export const getMovies = async (term, first, last) => {
  const response = await client.request(GET_MOVIES, {
    term,
    first,
    last,
  });

  return response;
};

export const getMovie = async id => {
  const response = await client.request(GET_MOVIE, {
    id,
  });

  return response;
};
