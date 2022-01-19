import React from "react";

const SearchInput = () => {
  return (
    <div className="search-component">
      <input />
      <select name="list" id="list">
        <option value="users">Users</option>
        <option value="repos">Repos</option>
      </select>
    </div>
  );
};

export default SearchInput;
