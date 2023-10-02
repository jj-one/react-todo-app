import React, { Component } from 'react'
import TaskItem from './TaskItem';

export default class TaskList extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state
  // }

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
            <TaskItem key={index} id={index} task={task} />
          ))}
        </tbody>
      </table>
    );
  }
}
