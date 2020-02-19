import React from "react";
import ReactDOM from "react-dom";

import "./app.css";

import Header from './components/header';
import SearchInput from './components/search-input';
import ToDoList from './components/to-do-list';
import ItemStatusFilter from "./components/item-status-filter";


let Main = () => {
    let todoData = [
        {label: 'drink coffee', important: false},
        {label: 'learn React', important: true},
        {label: 'have a dinner', important: false},
    ];
    return(
        <div className="todo-app">
            <Header /> 
            <SearchInput /> <ItemStatusFilter />
            <ToDoList todos={todoData} />
        </div>
    )
}

ReactDOM.render(<Main />, document.querySelector("#root"));