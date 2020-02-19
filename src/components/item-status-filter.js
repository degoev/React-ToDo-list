import React, { Component } from "react";
import "./item-status-filter.css";

export default class ItemStatusFilter extends Component {
    render() {
        let {onClickAll, onClickDone, onClickActive} = this.props;
        return (
            <div className="btn-group">
                <button type="button"
                    className="btn btn-outline-info button-filter"
                    onClick={onClickAll}>All</button>
                <button type="button"
                    className="btn btn-outline-primary button-filter"
                    onClick={onClickActive}>Active</button>
                <button type="button"
                    className="btn btn-outline-success button-filter"
                    onClick={onClickDone}>
                    Done
                </button>
            </div>
        );
    }
}
