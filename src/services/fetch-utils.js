import { client, client2 } from './client.js';

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

export async function getBooks() {
  const response = await client.from('Books')
    .select('*');

  return response.data;
}

export async function getTacos() {
  const response = await client2.from('Shop_info')
    .select('*');

  return response.data;
}