import React from "react";
import ToDoListItem from './to-do-list-item'
import "./to-do-list.css";

let ToDoList = ({todos, onDeleted, onToggledImportant, onToggledDone}) => {
    let elements = todos.map((item) => {
        let {id, ...itemProps} = item;
        //let keyStr = item.label.split(' ').reduce((sum, word) => sum += word[0], "");
        return (
            <li key={id} className="list-group-item" hidden = {itemProps.hidden}>
                <ToDoListItem
                    {...itemProps} 
                    onDeleteItem={() => onDeleted(id, itemProps.label)}
                    onImportant={() => onToggledImportant(id, itemProps.label)}
                    onDone={() => onToggledDone(id, itemProps.label)}
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