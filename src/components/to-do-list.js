import React from "react";
import ToDoListItem from './to-do-list-item'
import "./to-do-list.css";

let ToDoList = ({todos}) => {
    let elements = todos.map((item) => {
        let keyStr = item.label.split(' ').reduce((sum, word) => sum += word[0], "");
        return (
            <li key={keyStr} className="list-group-item">
                <ToDoListItem {...item} />
            </li>
        )
    });
    return (
        <ul className="list-group todo-list">
            {elements}
        </ul>
    )
};

export default ToDoList