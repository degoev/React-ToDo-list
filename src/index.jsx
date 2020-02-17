import React from "react";
import ReactDOM from "react-dom";

//app.css";

import Header from './components/header.jsx';
import SearchInput from './components/search-input.jsx';
import ToDoList from './components/to-do-list.jsx';
import ItemStatusFilter from "./components/item-status-filter.jsx";


let Main = () => {
    let todoData = [
        {label: 'drink coffee'},
        {label: 'learn React'},
        {label: 'have a dinner'},
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