import React, { Component } from "react";

export class AddItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      infoMessage: "",
    };
  }
  render() {
    return (
      <>
        <form className="add-item-form" onSubmit={this.handleSubmit.bind(this)}>
            <input type="text" className="add-item-input" placeholder="a new task to do..." ref="newItem"/>
            <input type="submit" className="add-item-button" value="add"/>
            <p className="add-info-message">{this.state.infoMessage}</p>
        </form>
      </>
    );
  }
  handleSubmit(e){
    e.preventDefault()
    const value = this.refs.newItem.value;
    const isInList = this.props.items.filter((item) => {
        return item.name.toUpperCase()===value.toUpperCase()
    }).length
    if(!value){
        this.setState({
            infoMessage: 'you want to add an empty task?'
        })
    }else if(isInList){
        this.setState({
            infoMessage: 'this tasks is already exits!'
        })
    }else{
        this.props.onAdd(value);
        this.refs.newItem.value= '';
        this.setState({
            infoMessage: ''
        })
    }
  }
}

export default AddItem;
