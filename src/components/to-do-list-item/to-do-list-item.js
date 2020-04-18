import React, {Component} from "react";
import "./to-do-list-item.css"

export default class ToDoListItem extends Component{

    render(){
        let {label, 
            onDeleteItem, 
            onImportant, 
            onDone, done, important} = this.props;
        
        let classNames = "todo-list-item";
        if (done) {
            classNames += " done";
        } else if (important) {
          classNames += " important";
        }
        return( 
            <div className={classNames}>
                <div 
                    className="to-do-list-item-label"
                    onClick={onDone}>
                    {label}
                </div>

                <button type="button"
                    className="btn btn-outline-success btn-sm float-right" 
                    onClick={onImportant}>
                    <i className="fa fa-exclamation" />
                </button>

                <button type="button"
                    className="btn btn-outline-danger btn-sm float-right"
                    onClick={onDeleteItem}>
                    <i className="fa fa-trash-o" />
                </button>
            </div>
        );
    }
}
