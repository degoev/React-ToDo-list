import React from "react";

import ToDoListItem from '../to-do-list-item/to-do-list-item.js'
import "./to-do-list.css";

let ToDoList = ({todos, deleteItem, toggledDone, toggledImportant}) => {
    let elements = todos.map((item) => {
        let {id, ...itemProps} = item;
        return (
            <li key={id} className="list-group-item" >
                <ToDoListItem
                deleteItem={deleteItem} toggledDone={toggledDone} toggledImportant={toggledImportant}
                id={id}    {...itemProps} />
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