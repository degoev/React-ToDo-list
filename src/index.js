import React from "react";
import ReactDOM from "react-dom";

import Header from './components/header';
import SearchInput from './components/search-input';
import ToDoList from './components/to-do-list';

let Main = () => {
    let todoData = [
        {label: 'drink coffee', important: false},
        {label: 'learn React', important: true},
        {label: 'have a dinner', important: false},
    ];
    return(
        <div>
            <Header />
            <SearchInput />
            <ToDoList todos={todoData} />
        </div>
    )
}

ReactDOM.render(<Main />, document.querySelector("#root"));