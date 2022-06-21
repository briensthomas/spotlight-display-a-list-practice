import { client } from './client.js';

export async function getMovies() {
  const response = await client.from('Movies')
    .select('*');

  return response.data;
}