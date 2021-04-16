import {GET_MOVIES} from './queries';
import client from './client';

export const getMovies = async (term, first, last) => {
  const response = await client.request(GET_MOVIES, {
    term,
    first,
    last,
  });

  return response;
};