import React from "react";
import ToDoListItem from './to-do-list-item.jsx'
//to-do-list.css";

let ToDoList = ({todos, onDeleted}) => {
    let elements = todos.map((item) => {
        let {id, ...itemProps} = item;
        //let keyStr = item.label.split(' ').reduce((sum, word) => sum += word[0], "");
        return (
            <li key={id} className="list-group-item">
                <ToDoListItem 
                    {...itemProps} 
                    onDeleteItem={() => onDeleted(id) }/>
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
