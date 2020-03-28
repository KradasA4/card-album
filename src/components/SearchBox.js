// import React from 'react';
const React = require("react")

const SearchBox = ( {searchChange} ) => {

  return(
    <form action="#" className="ma3">
      <label htmlFor="friend-search"></label>
      <input type="search" placeholder="Search for your friends" name="friend-search" 
        className="bg-lightest-blue pa2" 
        onChange={searchChange}
      />
      <input type="submit" value="Search" className="pa2 ml2" />
    </form>
  )
}

export default SearchBox;