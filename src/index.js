import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./app.css";

import Header from './components/header';
import SearchInput from './components/search-input';
import ToDoList from './components/to-do-list';
import ItemStatusFilter from "./components/item-status-filter";
import AddItem from "./components/add-item"

class Main extends Component {
    constructor() {
        super();
         //создать элемент
         this.CreateTodoItem = (label) => {
            let keyStr = label.split(' ').reduce((sum, word) => sum += word[0], "");
            return (
                {
                    label,
                    id: keyStr,
                    important: false,
                    done: false
                }
            );
        };
        
        this.state = {
            todoData: [
                this.CreateTodoItem('drink coffee'),
                this.CreateTodoItem('learn React'),
                this.CreateTodoItem('have a dinner')
            ]
        };

       
        //отметить как выполненный
        this.toggleDone = (id, value) => {
            this.setState(({ todoData }) => {
                let index = todoData.findIndex((item) => item.id === id && item.label === value);
                let arr = todoData.slice();
                arr[index].done = !arr[index].done;
                return {
                    todoData: arr
                }
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

        //show done
        this.filterDone = () => {
            this.setState(({ todoData }) => {
                let arr = todoData.slice();
                arr.map((item) => {
                    item.hidden = false;
                    return item;
                });
                arr.map((item) => {
                    if (item.done === true) {
                        item.hidden = false;
                        return item;
                    } else {
                        item.hidden = true;
                        return true;
                    }
                });

                return {
                    todoData: arr
                }
            });
        };

        //show active
        this.filterActive = () => {
            this.setState(({ todoData }) => {
                let arr = todoData.slice();
                arr.map((item) => {
                    item.hidden = false;
                    return item;
                });
                arr.map((item) => {
                    if (item.done === false) {
                        item.hidden = false;
                        return item;
                    } else {
                        item.hidden = true;
                        return true;
                    }
                });

                return {
                    todoData: arr
                }
            });
        };

        //show all
        this.filterAll = () => {
            this.setState(({ todoData }) => {
                let arr = todoData.slice();
                arr.map((item) => {
                    item.hidden = false;
                    return item;
                });

                return {
                    todoData: arr
                }
            });
        };

        //search around elements
        this.onSearchInput = (value) => {
            this.setState(({ todoData }) => {
                let arr = todoData.slice();
                arr.map((item) => {
                    //if (value === "" || item.hidden === false) {
                    if (item.label.startsWith(value)) {
                        item.hidden = false;
                        return item;
                    } else if (value === "") {
                        item.hidden = false;
                        return item;
                    } else {
                        item.hidden = true;
                        return item;
                    }
                    //}
                    //return item;
                });

                return {
                    todoData: arr
                }
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
                let keyStr = label.split(' ').reduce((sum, word) => sum += word[0], "");
                arr.push({
                    label,
                    id: keyStr,
                    important: false,
                    done: false
                });
                return {
                    todoData: arr
                }
            });
        };
    }

    render() {
        return (
            <div className="todo-app">
                <Header todos={this.state.todoData} />
                <SearchInput
                    onSearch={this.onSearchInput} />
                <ItemStatusFilter
                    todos={this.state.todoData}
                    onClickAll={this.filterAll}
                    onClickActive={this.filterActive}
                    onClickDone={this.filterDone} />
                <ToDoList
                    todos={this.state.todoData}
                    onDeleted={this.deleteItem}
                    onToggledDone={this.toggleDone}
                    onToggledImportant={this.toggleImportant} />

                <AddItem onAdded={this.addItem} />
            </div>
        );
    }
}

ReactDOM.render(<Main />, document.querySelector("#root"));