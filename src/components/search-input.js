import React from "react";
import "./search-input.css"

let SearchInput = (props) => {
        let onSearchInput = (event) => {
            event.preventDefault();
            props.onSearch(event.target.value);
        };
        return (
            <input className="search-input"
                placeholder="type a task"
                onChange={onSearchInput} />
        );
};

export default SearchInput