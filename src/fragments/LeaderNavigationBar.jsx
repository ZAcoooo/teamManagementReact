import React, {Component} from "react";
import { Link } from "react-router-dom";

class LeaderNavigationBar extends Component {
  render() {
    return (
      <nav className="navbar">
        <div className="container">
          <Link to="/Leader" className="navbar-brand">Leader Home</Link>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/tasks" className="nav-link">Tasks</Link>
            </li>
            <li className="nav-item">
              <Link to="/projects" className="nav-link">Projects</Link>
            </li>
            <li className="nav-item">
              <Link to="/documents" className="nav-link">Documents</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default LeaderNavigationBar;