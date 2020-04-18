import React, { Component } from "react";

import "./app.css";

import Header from '../header/header.js';
import SearchInput from '../search-input/search-input.js';
import ToDoList from '../to-do-list/to-do-list.js';
import ItemStatusFilter from "../item-status-filter/item-status-filter.js";
import AddItem from "../add-item/add-item.js"

export default class App extends Component {
    constructor() {
        super();
        //создать элемент
        this.CreateTodoItem = (label) => {
            return (
                {
                    label,
                    id: `${label}${+(new Date())}`,
                    important: false,
                    done: false
                }
            );
        };

        this.state = {
            todoData: [
                this.CreateTodoItem('поужинать'),
                this.CreateTodoItem('стать хакером'),
                this.CreateTodoItem('поспать')
            ],
            term: '',
            filter: 'all'
        };


        //отметить как выполненный
        this.toggleDone = (id, value) => {
            this.setState(({ todoData }) => {
                let index = todoData.findIndex((item) => item.id === id && item.label === value);
                let arr = todoData.slice();
                arr[index].done = !arr[index].done;
                return {
                    todoData: arr
                };
            });
        };

        //отметить как важный
        this.toggleImportant = (id, value) => {
            this.setState(({ todoData }) => {
                let index = todoData.findIndex((item) => item.id === id && item.label === value);
                let arr = todoData.slice();
                arr[index].important = !arr[index].important;
                return {
                    todoData: arr
                }
            });
        };

        //set active filter
        this.OnFilterClick = (filter) => {
            this.setState({ filter });
        }
        //update visible items by filters
        this.showByFilter = (items, filter) => {
            switch (filter) {
                case 'all':
                    return items;
                case 'active':
                    return items.filter((item) => !item.done);

                case 'done':
                    return items.filter((item) => item.done);

                default:
                    return items;
            }
        };
        //search around elements
        this.onSearchInput = (term) => {
            this.setState({ term });
        };

        this.search = (items, value) => {
            if (value === '') {
                return items;
            }
            return items.filter((item) => {
                return item.label.indexOf(value) > -1;
            });
        };

        //удаление элемента
        this.deleteItem = (id, value) => {
            this.setState(({ todoData }) => {
                let index = todoData.findIndex((item) => item.id === id && item.label === value);
                let arr = todoData.slice();
                arr.splice(index, 1);
                return {
                    todoData: arr
                }
            });
        };

        //добавление элемента
        this.addItem = (label) => {
            this.setState(({ todoData }) => {
                let arr = todoData.slice();
                return {
                    todoData: [...arr, this.CreateTodoItem(label)]
                };
            });
        };
    }

    render() {
        let { todoData, filter, term } = this.state;
        let filteredItems = this.showByFilter(todoData, filter);
        let visibleItems = this.search(filteredItems, term);

        return (
            <div className="todo-app">
                <Header todos={visibleItems} />
                <SearchInput
                    onSearch={this.onSearchInput} />
                <ItemStatusFilter
                    OnFilterToggle={this.OnFilterClick}
                    filter={filter} />
                <ToDoList
                    todos={visibleItems}
                    onDeleted={this.deleteItem}
                    onToggledDone={this.toggleDone}
                    onToggledImportant={this.toggleImportant} />

                <AddItem onAdded={this.addItem} />
            </div>
        );
    }
}

