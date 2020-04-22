import React, { Component} from "react";
import "./add-item.css"

class AddItem extends Component {

    constructor() {
        super();

        this.state = {
            label: ''
        };

        this.onChangeLabel = (event) => {
            this.setState({
                label: event.target.value
            });
        };
        
        this.onSubmitForm = (event) => {
            event.preventDefault();
            if(this.state.label !== "") this.props.onAdded(this.state.label)
            
            this.setState({
                label: ""
            });
        };
    }
    render() {
        return (
            <form className="bottom-panel d-flex" onSubmit={this.onSubmitForm}>
                <input
                    type="text"
                    placeholder="Я собираюсь..."
                    className="form-control new-todo-label" 
                    onChange={this.onChangeLabel}
                    value={this.state.label} />
                <button 
                    //type="submit" 
                    className="btn btn-outline-primary">
                    Добавить задачу
                </button>
            </form>
        );
    }
}

export default AddItem;
