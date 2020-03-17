import React from 'react';

import {Link} from 'react-router-dom';

import authService from './auth-service.js';

export default class extends React.Component {
  state = {
    username: "",
    password: "",
    campus: "",
    course: "",

    error: ""
  }

  handleSubmit = (event) => {
    event.preventDefault();

    // 1. Signup
    authService.signup(this.state.username, this.state.password)
      .then(() => {
        this.setState({error: ""});

        // 2. then, update with user infos
        authService.edit(this.state.username, this.state.campus, this.state.course)
          .then(response => {
            this.setState({error: ""});
            
            this.props.updateUser(response);
            this.props.history.push('/');
          })
          .catch(err => err => console.log(err))
      })
      .catch(err => err => console.log(err))
    ;
  }

  handleChange = (event) => {
    const {name, value} = event.target;
    this.setState({[name]: value});
  } 

  render() {
    console.log()
    return (
      <div className="Signup">
      <h1>Signup</h1>

      <form onSubmit={this.handleSubmit}>
      
      {this.state.error && (
              <p className="error">{this.state.error}</p>
            )}
       
      
        <p>
          <label>
          <em>Username</em>
          <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
          </label>            
        </p>
       
        <p>
          <label>
          <em>Password</em>
          <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
          </label>
        </p>
      
        <p>
          <label>
          <em>Email</em>
          <input type="email" name="email" value={this.state.email} onChange={this.handleChange} />
          </label>
        </p>
       
      
        <p>
          <button className="btn" onClick={this.handleSubmit}>Signup</button>
        </p>
       
      
        </form>
      
          <p>
           <small>you  have an account ? <Link to="/login">here</Link></small>
         </p>
        </div>
    );
  }
}