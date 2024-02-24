import React, { Component } from "react";
import LeaderHomeNavBar from "../fragments/LeaderHomeNavBar";
import ProjectCard from "../components/ProjectCard";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

class LeaderHome extends Component {
  render () {
    const { project } = this.props;
    return (
      <div>
        <LeaderHomeNavBar />
        <div className="container mt-4">
          <h2>My Projects:</h2>
          <Link to="/Leader/Project" style={{ textDecoration: "none" }}>
            <ProjectCard project={project}/>
          </Link>
        </div>
      </div>
    );
  }
}

LeaderHome.propTypes = {
  project: PropTypes.object.isRequired,
};

export default LeaderHome;