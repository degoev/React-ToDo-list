import React from "react";
// import { connect } from "react-redux";


// import { deleteItem, toggledDone, toggledImportant } from "../../actions/actions.js";
import "./to-do-list-item.css"

const ToDoListItem = (props) => {
        let { label, 
            id,
            deleteItem, 
            toggledImportant, 
            toggledDone, done, important} = props;
            
        let classNames = "todo-list-item";
        if (done) {
            classNames += " done";
        }
        if (important) {
          classNames += " important";
        }
        return( 
            <span className={classNames}>
                <span  className="todo-list-item-label"
                    onClick={() => toggledDone(id)}>
                    {label}
                </span >

                <button type="button"
                    className="btn btn-outline-success btn-sm float-right" 
                    onClick={() => toggledImportant(id)}>
                    <i className="fa fa-exclamation" />
                </button>

                <button type="button"
                    className="btn btn-outline-danger btn-sm float-right"
                    onClick={() => deleteItem(id)}>
                    <i className="fa fa-trash-o" />
                </button>
            </span>
        );
    };

//let actions = { deleteItem, toggledDone, toggledImportant };


export default ToDoListItem;
