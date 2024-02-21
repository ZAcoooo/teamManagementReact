import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./IndexPage.css";
import Project from "../model/Project";

class IndexPage extends Component {
  constructor(props) {
    super(props);
    this.pj = new Project();
    this.state = {
      tasks: [],
    };
  }

  componentDidMount() {
    const tasks = this.pj.getTasks();
    this.setState({ tasks });
  }

  render() {
    return (
      <div className='login'>
        <h1 className='login-title'>Login Page</h1>
        <Link to="/Leader"><button className='user-button'>Leader</button></Link>
        <Link to="/Member"><button className='user-button'>Member</button></Link>
      </div>
    );
  }
}


export default IndexPage;
