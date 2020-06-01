import React from 'react';

function SearchBar(props) {
  return (
    <form>
      <label htmlFor="search-input">Search</label>
      <input
        id="search-input"
        type="text"
        placeholder="Search..."
        value={props.query}
        onChange={props.handleInputChange}
      />
      <label htmlFor="on-stock-checkbox"></label>
    </form>
  );
}

export default SearchBar;
