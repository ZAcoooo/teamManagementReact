import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./IndexPage.css";

class IndexPage extends Component {

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
