import React from "react";
import ReactDOM from "react-dom";

//app.css";

import Header from './components/header';
import SearchInput from './components/search-input';
import ToDoList from './components/to-do-list';
import ItemStatusFilter from "./components/item-status-filter";
import AddItem from "./components/add-item"

class Main extends Component {
    constructor() {
        super();
        this.state = {
            todoData: [
                { label: 'drink coffee', id: "dc"},
                { label: 'learn React', id: "lR"},
                { label: 'have a dinner', id: 'had'},
            ]
        };
        this.deleteItem = (id) => {
            this.setState(({todoData})=>{
                let index = todoData.findIndex((item) => item.id === id);
                let arr = todoData.slice();
                arr.splice(index, 1);
                return {
                    todoData: arr
                }
            });
        };
        this.addItem = (label) => {
            this.setState(({todoData})=>{
                let arr = todoData.slice();
                let keyStr = label.split(' ').reduce((sum, word) => sum += word[0], "");
                arr.push({
                    label, 
                    id: keyStr
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
                <Header />
                <SearchInput /> <ItemStatusFilter />
                <ToDoList
                    todos={this.state.todoData}
                    onDeleted={this.deleteItem} />
                    <AddItem onAdded={this.addItem}/>
            </div>
        );
    }
}

ReactDOM.render(<Main />, document.querySelector("#root"));
