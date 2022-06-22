import React from 'react';

export default function Movie({ title,
  genre, 
  plot
}) {
  return (
    <div className='movie'>
      <h2>{title}</h2>
      <h3>Genre(s): {genre}</h3>
      <p><b>Plot:</b> {plot}</p>
    </div>
  );
}

