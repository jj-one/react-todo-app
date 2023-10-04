import React, { Component } from 'react'

export default class CreateTask extends Component {

  constructor(props) {
    super(props);
    this.state = {
      task: ""
    };
  }

  handleTaskChange = (e) => {
    this.setState({task: e.target.value});
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createTask(this.state.task);
    this.setState({task: ""});
    // console.log("Submitted");
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <input type="text" value={this.state.task} onChange={this.handleTaskChange} placeholder='Enter Task' autoFocus />
        </label>
        <button className='add'>Submit</button>
      </form>
    );
  }
}
