import React from "react";
import "./SearchCom.css";

function SearchCom({ search, setSearch }) {
  return (
    <div>
      <form
        action=""
        className="searchForm"
        onSubmit={(e) => e.preventDefault()}
      >
        <label htmlFor="search">Search</label>
        <input
          type="text"
          id="search"
          role="searchbox"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search items"
        />
      </form>
    </div>
  );
}

export default SearchCom;
