import React from "react";

import ToDoListItem from '../to-do-list-item/to-do-list-item.js'
import "./to-do-list.css";

let ToDoList = ({todos, onDeleted, onToggledImportant, onToggledDone}) => {
    let elements = todos.map((item) => {
        let {id, label, ...itemProps} = item;
        return (
            <li key={id} className="list-group-item" >
                <ToDoListItem
                    {...itemProps}
                    label={label} 
                    onDeleteItem={() => onDeleted(id, label)}
                    onImportant={() => onToggledImportant(id, label)}
                    onDone={() => onToggledDone(id, label)}
                    />
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