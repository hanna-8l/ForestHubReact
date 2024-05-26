import React, { useState } from 'react';

const SearchEngine = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your search logic here
    console.log(`Searching for: ${searchTerm}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search..."
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchEngine;