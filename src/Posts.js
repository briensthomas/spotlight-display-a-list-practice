import React from 'react';

export default function Posts({ title,
  description, 
  contact
}) {
  return (
    <div className='post'>
      <h3>{title}</h3>
      <p>{description}</p>
      <p>{contact}</p>
    </div>
  );
}

