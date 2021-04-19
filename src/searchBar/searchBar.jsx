import React from 'react';
import './searchBar.css';


const SearchBar = ({searchMusic}) => {
    return (
        <>
        <input
            type="text"
            id="header-search"
            placeholder="Search music"
            name="s"
            onChange={searchMusic} 
        />
        </>
    );
}
  export default SearchBar;


