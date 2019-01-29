import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

const ProjectDetails = (props) => {
  const {project} = props;

  if (project) {
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content grey-text text-darken-3">
          <span className="card-title"> {project.title} </span>
          <p>{project.content}</p>
        </div>
        <div className="card-action gret lighten-4 grey-text">
          <div>Posted by {project.authorFirstName} {project.authorLastName}</div>
          <div>2nd January, 2AM</div>
        </div>
      </div>
    </div>
  )
  } else {
    return (
      <div className="container center">
        Loading ...
      </div>
    )
  }
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  console.log(state.firestore);
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id]: null;
  return {
    project
  }
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {collection: 'projects'}
  ])
)(ProjectDetails);
