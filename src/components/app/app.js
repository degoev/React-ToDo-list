import React from "react";
import { connect } from "react-redux";

import "./app.css";

import { filterClicked,
    typedInSearch,
    addItem, deleteItem, toggledDone, toggledImportant } from "../../actions/actions.js";
import Header from '../header/header.js';
import SearchInput from '../search-input/search-input.js';
import ToDoList from '../to-do-list/to-do-list.js';
import ItemStatusFilter from "../item-status-filter/item-status-filter.js";
import AddItem from "../add-item/add-item.js"

const App = (props) => {
        let {
            filterClicked,
            typedInSearch,
            addItem,
            visibleItems,
            filter, deleteItem, toggledDone, toggledImportant
        } = props;

        return (
            <div className="todo-app">
                <Header todos={visibleItems} />
                <SearchInput onSearch={ typedInSearch }/>
                <ItemStatusFilter
                    OnFilterToggle={filterClicked}
                    filter={filter} />

                <ToDoList
                    deleteItem={deleteItem} toggledDone={toggledDone} toggledImportant={toggledImportant}
                    todos={visibleItems} />

                <AddItem onAdded={addItem} />
            </div>
        );
    };

const mapStateToProps = ({ visibleItems, filter }) => {
    return {
        visibleItems,
        filter
    };
};

export default connect(mapStateToProps, {filterClicked, 
    typedInSearch, addItem, deleteItem, toggledDone, toggledImportant })(App);
