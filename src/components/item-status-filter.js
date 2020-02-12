import React, {Component} from "react";
import "./item-status-filter.css";

export default class ItemStatusFilter extends Component{
    render(){
        return (
        <div className="btn-group">
            <button type="button"
                className="btn btn-outline-info button-filter">All</button>
             <button type="button"
                className="btn btn-outline-primary button-filter">Active</button>
             <button type="button"
                className="btn btn-outline-success button-filter">Done</button>
        </div>
        );
    }
}
