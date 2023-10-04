import React from "react";
import CreateTask from "./CreateTask";
import TaskList from "./TaskList";

const tasks = localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")) : [];

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: tasks
    }
  }

  handleCreateTask = (task) => {
    if(task.trim() === "") {
      alert("Empty task is not allowed.");
      return;
    }
    // this.setState((preState) => this.state.tasks.push({task: task, isCompleted: false}));
    // this.state.tasks.push({task: task, isCompleted: false});
    tasks.push({task: task, isCompleted: false});
    this.setState({tasks: tasks});
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  deleteTask = (id) => {
    // tasks = tasks.filter((task, index) => index !== id);
    tasks.splice(id, 1);
    this.setState({tasks: tasks});
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  updateTask = (taskId, taskStr) => {
    tasks[taskId].task = taskStr;
    this.setState({tasks: tasks});
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  toggleTask = (taskId) => {
    const targetTask = tasks[taskId];
    targetTask.isCompleted = !targetTask.isCompleted;
    this.setState({tasks: tasks});
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  render() {
    return (<div className="main">
        <h1>ToDos</h1>

        <div className="content">
        <CreateTask createTask={this.handleCreateTask} />
        <br />
        <TaskList 
          tasks={this.state.tasks} 
          deleteTask={this.deleteTask} 
          updateTask={this.updateTask} 
          toggleTask={this.toggleTask} 
        />
        </div>
      </div>
    );
  }
}

export default Main;