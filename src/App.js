import { useState, useEffect } from 'react';
import { getMovies, getPosts, getTacos } from './services/fetch-utils';
import MoviesList from './MoviesList';
import PostsList from './PostsList';
import ShopList from './ShopList';

import './App.css';
// import your arrays here

function App() {

  const [movies, setMovies] = useState([]);
  const [posts, setPosts] = useState([]);
  const [tacoShops, setTacoShops] = useState([]);

  async function fetchMoviesData() {
    const movies = await getMovies();

    setMovies(movies);
  }

  async function fetchPosts() {
    const posts = await getPosts();
    setPosts(posts);
  }

  async function fetchTacos() {
    const shops = await getTacos();
    setTacoShops(shops);
  }

  useEffect(() => {
    fetchMoviesData();
    fetchPosts();
    fetchTacos();
  }, []);

  return (
    <div className="App">
      <h2>Posts List</h2>
      <PostsList posts={posts} />
      <hr />

      <h2>Tacos List</h2>
      <ShopList tacoShops={tacoShops} />
      <hr />

      <h2>Movies List</h2>
      <MoviesList movies={movies}/>
    </div>
  );
}

export default App;
