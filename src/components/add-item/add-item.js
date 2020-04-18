import React from "react";
import "./add-item.css"

const AddItem = (props) => {

    // constructor() {
    //     super();

    //     this.state = {
    //         label: ''
    //     };

    //     this.onSubmitLabel = (event) => {
    //         this.setState({
    //             label: event.target.value
    //         });
    //     };
        
    //     this.onSubmitForm = (event) => {
    //         //event.preventDefault();
    //         this.props.onAdded(this.state.label);
    //         this.setState({
    //             label: ""
    //         });
    //     };
    // }
    // render() {
    //     //let { onAdded } = this.props;
        return (
            <React.Fragment>
            <input
                type="text"
                placeholder="Я собираюсь..."
                id="add-id"
                className="add-input" onBlur={(event) => props.onAdded(event.target.value)} />
            <button className="btn btn-outline-primary add-item">
                Добавить задачу
            </button>
            </ React.Fragment>
        );
    }

export default AddItem;
