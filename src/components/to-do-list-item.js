import React, {Component} from "react";
import "./to-do-list-item.css"

export default class ToDoListItem extends Component{

    constructor(){
        super();
        
        this.state ={
            done: false,
        };

        this.onLabelClick = () => {
            if (this.state.done === false) {
                this.setState({
                    done: true
                });
            } else{
                this.setState({
                    done: false
                });
            }

        };
    }

    render(){
        let {label, important = false} = this.props;
        
        let {done} = this.state;
        let classNames = "todo-list-item-label";
        if (done) {
            classNames += " done";
        }

        let style =  {
            fontWeight: important ? "bold" : "normal",
        }
        return( 
            <div className="todo-list-item">
                <div 
                    style={style}
                    className={classNames}
                    onClick={this.onLabelClick}>
                    {label}
                </div>

                <button type="button"
                    className="btn btn-outline-success btn-sm float-right">
                    <i className="fa fa-exclamation" />
                </button>

                <button type="button"
                    className="btn btn-outline-danger btn-sm float-right">
                    <i className="fa fa-trash-o" />
                </button>
            </div>
        );
    }
}


