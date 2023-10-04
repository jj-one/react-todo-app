
import React, { Component } from 'react'

export default class TaskItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: this.props.task.task,
      isEditing: false
    };
  }

  setEditingState = (editingState) => {
    this.setState({isEditing: editingState});
  };

  handleChange = (e) => {
    this.setState({task: e.target.value});
  };

  handleSubmit = (e) => {
    if(e) {
      e.preventDefault();
    }
    if(this.state.task.trim() === "") {
      alert("Empty task is not allowed.");
      return;
    }
    this.props.updateTask(this.props.id, this.state.task);
    this.setState({isEditing: false});
  }

  render() {
    return (
      <tr>
        {this.state.isEditing?
          <>
            <td>
              <form onSubmit={this.handleSubmit}>
                <input 
                  type="text"
                  value={this.state.task} 
                  onChange={this.handleChange}
                  autoFocus  
                />
              </form>
            </td>
            <td>
              <button onClick={this.handleSubmit}>Save</button>
              <button onClick={() => this.setEditingState(false)}>Back</button>
            </td>
          </>
          :
          <>
            <td>{this.props.task.task}</td>
            <td>
              <button onClick={() => this.setEditingState(true)}>Edit</button>
              <button onClick={this.props.deleteTask}>Delete</button>
            </td>
          </>
        }
      </tr>
    )
  }
}
