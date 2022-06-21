import { client } from './client.js';

export async function getMovies() {
  const response = await client.from('Movies')
    .select('*');

  return response.data;
}

export async function getPosts() {
  const response = await client.from('Posts')
    .select('*');

  return response.data;
}