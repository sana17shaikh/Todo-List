import React, { Component } from "react";
import AddItem from "./component/AddItem";
import TodoItem from "./component/TodoItem";
import "./App.css";
const TodoItems = [
  {
    name: "Shooping",
    completed: true,
  },
  {
    name: "Doctor Appoinment",
    completed: false,
  },
  {
    name: "Salon",
    completed: false,
  },
];
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { TodoItems };
  }
  render() {
    let items = this.state.TodoItems;
    items = items.map((item, index) => {
      return (
        <TodoItem
          item={item}
          key={index}
          onDelete={this.onDelete.bind(this)}
          onSave={this.onSave.bind(this)}
          toggleComplete={this.toggleComplete.bind(this)}
        />
      );
    });
    return (
      <div className="todo-app">
        <h1 className="header">React Todo App</h1>
        <AddItem items={this.state.TodoItems} onAdd={this.onAdd.bind(this)} />
        <ul className="todo-list">{items}</ul>
      </div>
    );
  }
  onAdd(newTask) {
    var updateItem = this.state.TodoItems;
    updateItem.push({
      name: newTask,
      completed: false,
    });
    this.setState({
      TodoItems: updateItem,
    });
  }
  onDelete(item){
    var updateItems = this.state.TodoItems;
    updateItems = updateItems.filter((value,index) => {
      return item !== value
    })
    this.setState({
      TodoItems: updateItems
    })
  }
  onSave(oldItem, newItem){
    var thisItem = this.state.TodoItems.filter((item) => item === oldItem)[0]
    thisItem.name = newItem
    this.setState({
      TodoItems: this.state.TodoItems
    })
  }
  toggleComplete(clickedItem){
    var thisItem = this.state.TodoItems.filter((item) => item === clickedItem)[0]
    thisItem.completed = !thisItem.completed
    this.setState({
      TodoItems: this.state.TodoItems
    })
  }
}

export default App;
