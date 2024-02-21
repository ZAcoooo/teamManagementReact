import React, { Component } from "react";
import LeaderProjectNavBar from "../fragments/LeaderProjectNavBar";
import CreateTaskForm from "../components/CreateTaskForm";
import Project from "../model/Project";
import PropTypes from "prop-types";

class CreateTaskPage extends Component {
  constructor(props) {
    super(props);
    // const location = useLocation();
    // console.log("Props", location);
    // this.state = {
    //   project: props.location.state.project,
    // };
  }
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
    return (
      <div>
        <LeaderProjectNavBar />
        <CreateTaskForm onCreateTask={this.onCreateTask}/>
      </div>
    );
  }
}

CreateTaskPage.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      project: PropTypes.instanceOf(Project).isRequired,
    }).isRequired,
  }).isRequired,
};

export default CreateTaskPage;
