import React, { Component } from "react";
import MemberProjectNavBar from "../fragments/MemberProjectNavBar";
import TaskCardForMember from "../components/TaskCardForMember";
import PropTypes from "prop-types";


class MemberProjectPage extends Component {

  render () {
    const { project } = this.props;
    return (
      <div>
        <MemberProjectNavBar />
        <div className="container mt-4">
          <TaskCardForMember project={project}/>
        </div>
      </div>
    );
  }
}

MemberProjectPage.propTypes = {
  project: PropTypes.object.isRequired,
};

export default MemberProjectPage;

