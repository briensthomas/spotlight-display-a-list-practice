import React from 'react';

export default function Book({ title,
  author,
  genre,
  cover_image }) {
  return (
    <div className='book' >
      <h2>{title}</h2>
      <img src={cover_image} />
      <h3>{author}</h3>
      <h4>{genre}</h4>
    </div>
  );
}

