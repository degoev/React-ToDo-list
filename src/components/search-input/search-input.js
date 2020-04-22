import React from "react";
// import { connect } from "react-redux";

// import { typedInSearch } from "../../actions/actions.js";
import "./search-input.css";

let SearchInput = (props) => {
    let {onSearch} = props;
        let onSearchInput = (event) => {
            event.preventDefault();
            onSearch(event.target.value);
        };
        return (
                <input className="form-control search-input"
                    placeholder="поиск по делам"
                    onChange={onSearchInput} />
        );
};



export default SearchInput;