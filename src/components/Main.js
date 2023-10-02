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

  render() {
    return (<div>
        <h1>ToDos</h1>

        <div>
        <CreateTask />
        <br />
        <TaskList />
        </div>
      </div>
    );
  }
}

export default Main;