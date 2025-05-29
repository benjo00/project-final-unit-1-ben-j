import React from 'react';
import data from './MockData.jsx';

function Search({ input }) {
  const filteredData = data.filter((item) => {
    if (input === '') return true;
    return item.text.toLowerCase().includes(input);
  });

  return (
    <ul>
      {filteredData.map((item) => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  );
}

export default Search ;
// the above creates the searchbar function and maps the data from the mockdata files