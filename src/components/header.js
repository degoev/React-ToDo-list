import React from "react";
import "./header.css";


let Header = ({todos}) => { 
    let doneElements = todos.filter((item)=>{
        return item.done === true;
    });

    return (
        <div className="header-div d-flex">
            <h1>To-Do List</h1>
            <h2>{todos.length - doneElements.length} more to do, { doneElements.length } done</h2>
        </div>
    );
};

export default Header