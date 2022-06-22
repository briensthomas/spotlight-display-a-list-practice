import React from 'react';
import Movie from './Movie';

export default function MoviesList({ movies }) {
  return (
    <div className='movies-list'>
      {
        movies.map((movie, i) => <Movie 
          key={movie.name + i + movie.id} 
          {...movie} />)
      }
    </div>
  );
}
