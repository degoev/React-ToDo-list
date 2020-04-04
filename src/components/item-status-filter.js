import React, { Component } from "react";
import "./item-status-filter.css";

export default class ItemStatusFilter extends Component {
    render() {
        let { OnFilterToggle, filter } = this.props;
        let buttons = [
            { name: "all", label: "Все" },
            { name: "active", label: "Активно" },
            { name: "done", label: "Готово" }
        ];
        buttons = buttons.map((item) => {
            let clazz = item.name === filter ? "btn btn-info button-filter" : "btn btn-outline-secondary button-filter";
            return (
                <button type="button"
                    className={clazz}
                    onClick={() => OnFilterToggle(item.name)}
                    key={item.name}>{item.label}</button>
            );
        });
        return (
            <div className="btn-group">
                {buttons}
            </div>
        );
    }
}
