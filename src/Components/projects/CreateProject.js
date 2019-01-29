import React, {Component} from 'react';
import {connect} from 'react-redux';

import {createProject} from '../../store/actions/projectActions';

class CreateProject extends Component{
  state = {
    title: '',
    content: ''
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createProject(this.state);
  };

  render () {
    return (
      <div className="container">
        <div className="card">
          <div className="card-content">
            <div className="card-title">
              <h5 className="grey-text text-darken-3">New Project</h5>
            </div>
            <form onSubmit={this.handleSubmit} className="white">
              <div className="input-field">
                <label htmlFor="title">Title</label>
                <input type="text" id="title" onChange={this.handleChange}/>
              </div>
              <div className="input-field">
                <label htmlFor="content">Content</label>
                <textarea className="materialize-textarea" id="content" onChange={this.handleChange}></textarea>
              </div>
              <div className="input-field">
                <button className="btn pink lighten-1 z-depth-0">Add Project</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createProject: (project) => dispatch(createProject(project))
  }
};

export default connect(null, mapDispatchToProps)(CreateProject);
