import React, {Component} from 'react';

class SignUp extends Component {
  state = {
    email: '',
    password: '',
    lastName: '',
    firstName: ''
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div className="container">
        <div className="card">
          <div className="card-content">
            <div className="card-title">
              <h5 className="grey-text text-darken-3">Registration</h5>
            </div>
            <form onSubmit={this.handleSubmit} className="white">
              <div className="input-field">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" onChange={this.handleChange}/>
              </div>
              <div className="input-field">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" onChange={this.handleChange}/>
              </div>
              <div className="input-field">
                <label htmlFor="firstName">First name</label>
                <input type="text" id="firstName" onChange={this.handleChange}/>
              </div>
              <div className="input-field">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" id="lastName" onChange={this.handleChange}/>
              </div>
              <div className="input-field">
                <button className="btn pink lighten-1 z-depth-0">Submit</button>
              </div>
            </form>
          </div>
        </div>

      </div>
    )
  }
}

export default SignUp;
