import React from "react";
import "./header.css";


let Header = ({todos}) => { 
    let doneElements = todos.filter((item)=>{
        return item.done === true;
    });

    return (
        <div className="header-div d-flex">
            <h1>Мои дела</h1>
            <h2>выполнено: { doneElements.length }, осталось: {todos.length - doneElements.length}</h2>
        </div>
    );
};

export default Header