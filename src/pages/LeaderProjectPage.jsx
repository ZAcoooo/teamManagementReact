import React, { Component } from "react";
import LeaderProjectNavBar from "../fragments/LeaderProjectNavBar";
import TaskCardForLeader from "../components/TaskCardForLeader";
import PropTypes from "prop-types";


class LeaderProjectPage extends Component {

  render () {
    const { project } = this.props;
    return (
      <div>
        <LeaderProjectNavBar />
        <div className="container mt-4">
          <TaskCardForLeader project={project}/>
        </div>
      </div>
    );
  }
}

LeaderProjectPage.propTypes = {
  project: PropTypes.object.isRequired,
};

export default LeaderProjectPage;

