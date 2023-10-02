import React from "react";
import CreateTask from "./CreateTask";
import TaskList from "./TaskList";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: []
    }
  }

  handleCreateTask = (task) => {
    if(task.trim() === "") {
      alert("Empty task is not allowed.");
      return;
    }
    this.setState((preState) => this.state.tasks.push({task: task, isCompleted: false}));
    // this.state.tasks.push({task: task, isCompleted: false});
    console.log(this.state.tasks);
  };

  render() {
    return (<div>
        <h1>ToDos</h1>

        <div>
        <CreateTask createTask={this.handleCreateTask} />
        <br />
        <TaskList tasks={this.state.tasks} />
        </div>
      </div>
    );
  }
}

export default Main;