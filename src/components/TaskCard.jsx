import React, { Component } from "react";
import PropTypes from "prop-types";


class TaskCard extends Component {
  render() {
    const { tasks } = this.props.project;
    console.log("project in task:", this.props.project);
    console.log("task:", tasks);

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
              </div>
            </div>
          ))
        )}
      </div>
    );
    
  }
}

TaskCard.propTypes = {
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
      })
    ),
    members: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};


export default TaskCard;
