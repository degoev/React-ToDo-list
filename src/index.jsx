import React, {Component} from "react";
import ReactDOM from "react-dom";

//app.css";

import Header from './components/header.jsx';
import SearchInput from './components/search-input.jsx';
import ToDoList from './components/to-do-list.jsx';
import ItemStatusFilter from "./components/item-status-filter.jsx";
import AddItem from "./components/add-item.jsx"

class Main extends Component {
    constructor() {
        super();
        //создать элемент
        this.CreateTodoItem = (label) => {
            return (
                {
                    label,
                    id: label,
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
            // arr.map((item) => {
            //     if (item.label.indexOf(value) > 0) {
            //         item.hidden = false;
            //         return item;
            //     } else if (value === "") {
            //         item.hidden = false;
            //         return item;
            //     } else {
            //         item.hidden = true;
            //         return item;
            //     }
            // });

            // return {
            //     todoData: arr
            // }
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

ReactDOM.render(<Main />, document.querySelector("#root"));
