import React, { Component } from "react";

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
    };
  }
  render() {
    return <li className="todo-item">{this.renderTodoItem()}</li>;
  }
  renderTodoItem() {
    var isCompleted = this.props.item.completed;
    if (this.state.editing) {
      return (
        <form
          className="todo-item-wrapper"
          onSubmit={this.handleSave.bind(this)}
        >
          <input
            type="text"
            className="editing-form-input"
            ref="editingItem"
            defaultValue={this.props.item.name}
            onFocus={this.handleFocus.bind(this)}
            autoFocus
          />
          {this.renderButtons()}
        </form>
      );
    }
    return (
      <div className="todo-item-wrapper">
        <p
          className={
            isCompleted ? "todo-item-name--completed" : "todo-item-name"
          }
          onClick={this.props.toggleComplete.bind(this, this.props.item)}
        >
          {this.props.item.name}
        </p>
        {this.renderButtons()}
      </div>
    );
  }
  renderButtons() {
    if (this.state.editing) {
      return (
        <div>
          <button
            className="button"
            type="button"
            onClick={this.handleSave.bind(this)}
          >
            save
          </button>
          <button
            className="button"
            type="button"
            onClick={this.onCancle.bind(this)}
          >
            cancle
          </button>
        </div>
      );
    }
    return (
      <div>
        <button
          className="button"
          type="button"
          onClick={this.onEdit.bind(this)}
        >
          edit
        </button>
        <button
          className="button"
          type="button"
          onClick={this.props.onDelete.bind(this, this.props.item)}
        >
          delete
        </button>
      </div>
    );
  }
  onEdit() {
    this.setState({
      editing: true,
    });
  }
  onCancle() {
    this.setState({
      editing: false,
    });
  }
  handleSave(e) {
    e.preventDefault();
    this.setState({
      editing: false,
    });
    this.props.onSave(this.props.item, this.refs.editingItem.value);
  }
  handleFocus(e) {
    e.target.select();
  }
}

export default TodoItem;
