import React, { Component } from "react";
import LeaderProjectNavBar from "../fragments/LeaderProjectNavBar";
import CreateTaskForm from "../components/CreateTaskForm";
import PropTypes from "prop-types";

class CreateTaskPage extends Component {
  onCreateTask = (task) => {
    console.log("Task created:", task);
    const { title, startDate, endDate, description, comments, members } = task;
    // Accessing the project from state
    const { project } = this.state;
    project.createTask(title, startDate, endDate, description, comments, members);
    console.log("Task created:", task);
    console.log("Task added into project", project);
  };


  render () {
    const { project } = this.props;
    return (
      <div>
        <LeaderProjectNavBar />
        <CreateTaskForm onCreateTask={this.onCreateTask} project={project}/>
      </div>
    );
  }
}

CreateTaskPage.propTypes = {
  project: PropTypes.object.isRequired,
};

export default CreateTaskPage;
