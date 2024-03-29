import React, { Component } from "react";
import PropTypes from "prop-types";


class TaskCardForLeader extends Component {
  render() {
    const { tasks } = this.props.project;
    return (
      <div>
        {tasks.length === 0 ? (
          <div className="alert alert-info" role="alert">
            No tasks in this project.
          </div>
        ) : (
          tasks.map((task) => (
            <div key={task.id} className="card mt-4">
              <div className="card-body">
                <h5 className="card-title">Title: {task.title}</h5>
                <p className="card-text">Start Date: {task.startDate}</p>
                <p className="card-text">End Date: {task.endDate}</p>
                <p className="card-text">Description: {task.description}</p>
                <p className="card-text">Assigned Members: {task.members.join(", ")}</p>
                <div>
                  <p className="card-text">Comments:</p>
                  <ul>
                    {task.comments.map((comment, index) => (
                      <li key={index}>{comment}</li>
                    ))}
                  </ul>
                </div>
                <p className="card-text">Status: 
                  <span style={{fontWeight: "bold", color: task.status ? "green" : "red"}}>
                    {task.status ? " Completed" : " Uncompleted"}
                  </span>
                </p>             
              </div>
            </div>
          ))
        )}
      </div>
    );
    
  }
}

TaskCardForLeader.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tasks: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        startDate: PropTypes.string.isRequired,
        endDate: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        comments: PropTypes.arrayOf(PropTypes.string).isRequired,
        members: PropTypes.arrayOf(PropTypes.string).isRequired,
        status: PropTypes.bool.isRequired,
      })
    ),
    members: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};


export default TaskCardForLeader;
