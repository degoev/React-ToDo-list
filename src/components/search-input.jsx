import React from "react";
//search-input.css"

let SearchInput = (props) => {
    let onSearchInput = (event) => {
        event.preventDefault();
        props.onSearch(event.target.value);
    };
    return (
        <input className="search-input"
            placeholder="поиск по делам"
            onChange={onSearchInput} />
    );
};

export default SearchInput