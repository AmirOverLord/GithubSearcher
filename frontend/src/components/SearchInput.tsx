import React from "react";

const SearchInput = () => {
  return (
    <div className="search-component">
      <input />
      <select name="list" id="list">
        <option value="user">Users</option>
        <option value="repositories">Repository</option>
      </select>
    </div>
  );
};

export default SearchInput;
