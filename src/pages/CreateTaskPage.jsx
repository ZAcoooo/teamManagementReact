import React, { Component } from "react";
import LeaderProjectNavBar from "../fragments/LeaderProjectNavBar";
import CreateTaskForm from "../components/CreateTaskForm";
import PropTypes from "prop-types";

class CreateTaskPage extends Component {

  render () {
    const { project } = this.props;
    return (
      <div>
        <LeaderProjectNavBar />
        <CreateTaskForm project={project}/>
      </div>
    );
  }
}

CreateTaskPage.propTypes = {
  project: PropTypes.object.isRequired,
};

export default CreateTaskPage;
