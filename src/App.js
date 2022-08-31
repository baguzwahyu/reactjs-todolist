import React, { Component } from 'react'
import List from './List'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      todoItem: '',
      items:[]
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({
      items: [...this.state.items, this.state.todoItem],
      todoItem: ''
    })
  }

  handleChange = (event) => { 
    this.setState({
      todoItem: event.target.value
    })
    console.log(this.state.todoItem)
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input name="todo" value={this.state.todoItem} onChange={this.handleChange} />
          <button>Add</button>
        </form>
        <List items={this.state.items}/>
      </div>
    )
  }
}
