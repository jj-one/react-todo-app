
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

  toggleTask = () => {
    this.props.toggleTask(this.props.id);
  };

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
              <button onClick={this.handleSubmit} className='save'>Save</button>
              <button onClick={() => this.setEditingState(false)} className='back'>Back</button>
            </td>
          </>
          :
          <>
            <td onClick={this.toggleTask} className='task'>
              <input 
                type="checkbox" 
                checked={this.props.task.isCompleted} 
                readOnly
              /> <span className={this.props.task.isCompleted?"completed":"not-completed"}>{this.props.task.task}</span></td>
            <td>
              <button onClick={() => this.setEditingState(true)} className='edit'>Edit</button>
              <button onClick={this.props.deleteTask} className='delete'>Delete</button>
            </td>
          </>
        }
      </tr>
    )
  }
}
