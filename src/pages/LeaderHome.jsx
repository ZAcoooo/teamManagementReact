import React, { Component } from "react";
import LeaderHomeNavBar from "../fragments/LeaderHomeNavBar";
import ProjectCard from "../components/ProjectCard";
import { Link } from "react-router-dom";

class LeaderHome extends Component {
  constructor(props) {
    super(props);
    console.log("props in home", props);
  }
  render () {
    return (
      <div>
        <LeaderHomeNavBar />
        <div className="container mt-4">
          <h2>My Projects:</h2>
          <Link to="/Project" style={{ textDecoration: "none" }}>
            <ProjectCard />
          </Link>
        </div>
      </div>
    );
  }
}

export default LeaderHome;