import React from "react";
import "./header.css";
import HeadCounter from "./head-counter.js";

let Header = () =>{ 
    return (
        <div className="header-div d-flex">
            <h1 className="header">To-Do List</h1>
            <HeadCounter />
        </div>
    );
};

export default Header