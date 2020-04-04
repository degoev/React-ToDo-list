import React from "react";
import "./search-input.css"

let SearchInput = (props) => {
    let {onSearch} = props;
        let onSearchInput = (event) => {
            event.preventDefault();
            onSearch(event.target.value);
        };
        return (
            <input className="search-input"
                placeholder="поиск по делам"
                onChange={onSearchInput} />
        );
};

export default SearchInput