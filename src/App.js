import { useState, useEffect } from 'react';
import { getMovies, getPosts, getTacos } from './services/fetch-utils';
import MoviesList from './MoviesList';
import PostsList from './PostsList';


import './App.css';
// import your arrays here

function App() {

  const [movies, setMovies] = useState([]);
  const [posts, setPosts] = useState([]);

  async function fetchMoviesData() {
    const movies = await getMovies();

    setMovies(movies);
  }

  async function fetchPosts() {
    const posts = await getPosts();
    setPosts(posts);
  }

  useEffect(() => {
    fetchMoviesData();
    fetchPosts();
  }, []);

  return (
    <div className="App">
      <h2>Posts List</h2>
      <PostsList posts={posts} />
      <hr />

      <h2>Movies List</h2>
      <MoviesList movies={movies}/>
    </div>
  );
}

export default App;
