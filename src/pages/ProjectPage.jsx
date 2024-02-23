import React, { Component } from "react";
import LeaderProjectNavBar from "../fragments/LeaderProjectNavBar";
import TaskCard from "../components/TaskCard";
import PropTypes from "prop-types";


class ProjectPage extends Component {

  render () {
    const { project } = this.props;
    return (
      <div>
        <LeaderProjectNavBar />
        <div className="container mt-4">
          <TaskCard project={project}/>
        </div>
      </div>
    );
  }
}

ProjectPage.propTypes = {
  project: PropTypes.object.isRequired,
};

export default ProjectPage;

