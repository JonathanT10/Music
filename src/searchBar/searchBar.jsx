import React from 'react';
import './searchBar.css';

const SearchBar = () => (
    <form action="/" method="get">
        <label htmlFor="header-search">
            <span className="visually-hidden">Search music</span>
        </label>
        <input
            type="text"
            id="header-search"
            placeholder="Search music"
            name="s" 
        />
        <button type="submit">Search</button>
    </form>
);

  export default SearchBar;


