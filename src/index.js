import React from "react";
import ReactDOM from "react-dom";
let Header = () => <h1>My To-Do list</h1>;
let SearchInput = () => <input placeholder="type a task"></input>;
let ToDoList = () => {
    return (
        <ul>
            <li>learn React</li>
            <li>go to sleep</li>
        </ul>
    )
};
let Main = () => {
    return(
        <div>
            <Header />
            <SearchInput />
            <ToDoList />
        </div>
    )
}

ReactDOM.render(<Main />, document.querySelector("#root"));