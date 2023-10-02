
import React, { Component } from 'react'

export default class TaskItem extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.task.task}</td>
        <td>
          <button>Edit</button>
          <button>Delete</button>
        </td>
      </tr>
    )
  }
}
