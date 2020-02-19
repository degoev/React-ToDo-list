import React, {Component} from "react";
import "./to-do-list-item.css"

export default class ToDoListItem extends Component{

    constructor(){
        super();
        
        this.state = {
            done: false,
            important: false
        };

        this.onLabelClick = () => {
            this.setState(({done})=>{
                return ({
                    done: !done
                });
              });
           
        };
        
        this.onImportantClick = () => {
              this.setState(({important})=>{
                return ({
                    important: !important
                });
              });

        };
    }

    render(){
        let {label, onDeleteItem} = this.props;
        
        let {done, important} = this.state;
        
        let classNames = "todo-list-item";
        if (done) {
            classNames += " done";
        }
        if (important) {
          classNames += " important";
        }
        return( 
            <div className={classNames}>
                <div 
                    className="to-do-list-item-label"
                    onClick={this.onLabelClick}>
                    {label}
                </div>

                <button type="button"
                    className="btn btn-outline-success btn-sm float-right" 
                    onClick={this.onImportantClick}>
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
