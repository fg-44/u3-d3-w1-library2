import React from 'react';
import fantasy from '../data/fantasy.json'
import SingleBook from './SingleBook';

const BookList = ( ) => {
  return (
    <div>
      {fantasy.map(book => (<SingleBook key={book._id} book={book} />))}
    </div>
  );
};

export default BookList;
