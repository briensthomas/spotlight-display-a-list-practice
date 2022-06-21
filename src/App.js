import { useState, useEffect } from 'react';
import { getMovies } from './services/fetch-utils';
import MoviesList from './MoviesList';

import './App.css';
// import your arrays here

function App() {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMoviesData() {
      const data = await getMovies();

      setMovies(data);
    }
    fetchMoviesData();
  }, []);

  return (
    <div className="App">
      <h2>Movies List</h2>
      <MoviesList movies={movies}/>
      <hr />
      
    </div>
  );
}

export default App;
