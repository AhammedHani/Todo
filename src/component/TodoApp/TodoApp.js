import React, { Component } from 'react'
import "./TodoApp.css"

export default class TodoApp extends Component {
  state = {
    input: "",
    items: []
  }

  handleChange = event => {
    this.setState({
      input: event.target.value
    })
  };

  storeItems = event => {
    event.preventDefault();
    const { input } = this.state;
    const allItems = this.state.items;

    allItems.push(input);

    this.setState({
      items: allItems,
      input: ""
    })
  }

  deleteItem = key => {
    const allItems = this.state.items;
    allItems.splice(key, 1); 

    this.setState({
      items: allItems
    })
  }

  render() {
    const { input,items } = this.state;

    return (
      <div className="todo-container">
        <form className='input-section' onSubmit={this.storeItems}>
            <h1>Todo App</h1>
            <input type="text" placeholder='Enter Items..' onChange={this.handleChange} value={input}/>
        </form>
        <ul>
            {items.map((data,index) => (
              <li key={index}>
                {data} <i className="fas fa-trash-alt" onClick={()=>this.deleteItem(index)}></i>
              </li>
            ))}
        </ul>
      </div>
    )
  }
}
