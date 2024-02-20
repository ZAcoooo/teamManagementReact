import React, {Component} from "react";
import { Link } from "react-router-dom";

class LeaderHomeNavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link class="navbar-brand" to="/Leader" style={{ fontSize: "28px" }}>Home</Link>
          <span>Role: Leader</span>
        </div>
      </nav>
    );
  }
}

export default LeaderHomeNavBar;