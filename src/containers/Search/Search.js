import React from "react";

const Search = ({ userSearch }) => {
    return (
        <input
            type="search"
            onChange={userSearch}
            placeholder="Search layers... ;)"
        />
    )
}

export default Search;