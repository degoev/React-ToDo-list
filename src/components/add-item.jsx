import React, { Component } from "react";
//add-item.css"

export default class AddItem extends Component {

    constructor() {
        super();

        this.state = {
            label: ''
        };

        this.onSubmitLabel = (event) => {
            this.setState({
                label: event.target.value
            });
        };
        
        this.onSubmitForm = (event) => {
            event.preventDefault();
            this.props.onAdded(this.state.label);
            this.setState({
                label: ""
            });
        };
    }
    render() {
        //let { onAdded } = this.props;
        return (<form
        onSubmit={this.onSubmitForm}>
            <input
                type="text"
                placeholder="Я собираюсь..."
                id="add-id"
                className="add-input"
                onChange={this.onSubmitLabel}
                value={this.state.label} />

            <button
                className="btn btn-outline-primary add-item">
                Добавить задачу
            </button>
        </form>
        );
    }
}