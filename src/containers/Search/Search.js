import React from "react";

const Search = ({ handleSearch, className, style }) => {
    return (
        <input
            style={{
                "padding": "0.5rem",
                "width": "100%",
                ...style
            }}
            type="search"
            onChange={handleSearch}
            placeholder="Search layers... "
            className={className}
        />
    )
}

export default Search;