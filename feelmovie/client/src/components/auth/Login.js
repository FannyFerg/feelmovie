import React from 'react';

import {Link} from 'react-router-dom';

import authService from './auth-service.js';

export default class extends React.Component {
  state = {
    username: "",
    password: "",

    error: ""
  }

  handleSubmit = (event) => {
    event.preventDefault();

    authService.login(this.state.username, this.state.password)
      .then(response => {
        this.setState({error: ""});

        this.props.updateUser(response);
        this.props.history.push('/');
      })
      .catch(err => this.setState({error: err.response.data.message}))
    ;
  }

  handleChange = (event) => {
    const {name, value} = event.target;
    this.setState({[name]: value});
  } 

  render() {
    console.log(process.env.REACT_APP_APIURL)
    return (
    <div className="Login">
  
    <form onSubmit={this.handleSubmit}>
     
     <h1>Login</h1>
    
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
        <button className="btn" onClick={this.handleSubmit}>Login</button>
      </p>
     
    
      </form>
    
        <p>
         <small>If you dont  have an account, you can sign up from <Link to="/signup">here</Link></small>
       </p>
      </div>)
  }
}