import React from 'react';
import Book from './Book';

export default function BooksList({ books }) {
  return (
    <div className='books-list'>
      {
        books.map((book, i) => 
          <Book key={book.title + i + book.id} 
            {...book} />)
      }
    </div>
  );
}
