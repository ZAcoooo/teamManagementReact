import React, { Component } from "react";

export default class ProjectCard extends Component {
  render () {
    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Name: Test Project</h5>
          <p className="card-text">Description: This is description of the first test project</p>
          <p className="card-text">Project Members: Lee, Zaco, Malcolm</p>
        </div>
      </div>
    );
  }
}