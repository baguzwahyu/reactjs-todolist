import React, { Component } from 'react'

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
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        <button>Add</button>
        </form>
      </div>
    )
  }
}
