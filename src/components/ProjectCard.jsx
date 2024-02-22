import React, { Component } from "react";
import PropTypes from "prop-types";

export default class ProjectCard extends Component {
  render () {
    const { project } = this.props;
    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Name: {project.name}</h5>
          <p className="card-text">Description: {project.description}</p>
          <p className="card-text">Project Members: {project.members.join(", ")}</p>
        </div>
      </div>
    );
  }
}

ProjectCard.propTypes = {
  project: PropTypes.object.isRequired,
};