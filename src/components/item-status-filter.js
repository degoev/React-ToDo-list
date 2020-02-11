import React from "react";
import "./item-status-filter.css";

function ItemStatusFilter(){
    return(
        <div className="btn-group">
            <button type="button"
                className="btn btn-info">All</button>
             <button type="button"
                className="btn btn-primary">Active</button>
             <button type="button"
                className="btn btn-success">Done</button>
        </div>
    );
}

export default ItemStatusFilter