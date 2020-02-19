import React, { Component } from "react";
import "./add-item.css"

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
        };
    }
    render() {
        //let { onAdded } = this.props;
        return (<form
        onSubmit={this.onSubmitForm}>
            <input
                type="text"
                placeholder="I`m going to"
                id="add-id"
                className="add-input"
                onInput={this.onSubmitLabel} />

            <button
                className="btn btn-outline-primary add-item">
                Add a new task
            </button>
        </form>
        );
    }
}
