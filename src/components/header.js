import React from "react";
import "./header.css";


let Header = () =>{ 
    return (
        <div className="header-div d-flex">
            <h1>To-Do List</h1>
            <h2>{1} more to do, {3} done</h2>
        </div>
    );
};

export default Header