import React from "react";

let ToDoListItem = ({label, important = false}) => {
    let style =  {
        fontWeight: important ? "bold" : "normal"
    }
    return <div style={style}>{label}</div>;
};
export default ToDoListItem