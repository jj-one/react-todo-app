import React, { Component } from 'react'
import TaskItem from './TaskItem';

export default class TaskList extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state
  // }

  // deleteTask = (id) => {
  //   this.props.setState((preState) => {
  //     console.log("Here now");
  //     // preState.tasks.splice(id, 1);
  //     console.log(preState.tasks);
  //   });
  // };

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Task</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {this.props.tasks.map((task, index) => (
            <TaskItem 
              key={index} 
              id={index} 
              task={task} 
              deleteTask={() => this.props.deleteTask(index)} 
              updateTask={this.props.updateTask} 
              toggleTask={this.props.toggleTask}
            />
          ))}
        </tbody>
      </table>
    );
  }
}
