import React from 'react';

import {Link} from 'react-router-dom';
import Logonav from '../../images/Logonav.png'
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
      .catch(err =>err => err => console.log(err))
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

    <img src={Logonav} alt='logo' className='logologin'/>
    
    <div className='log'>
    <form onSubmit={this.handleSubmit}>
     
     <h1>S'identifer</h1>
    
      <p>
        <label>
        <em>Identifiant</em>
        <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
        </label>            
      </p>
     
      <p>
        <label>
        <em>Mot de passe</em>
        <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
        </label>
      </p>
    
     
    
    
      <p>
        <button className="btn" onClick={this.handleSubmit}>Valider</button>
      </p>
     
    
      <p className='note'>
         <small>si vous n'avez pas de compte , vous pouvez vous inscrire <Link to="/signup" className='ici'>ici</Link></small>
      </p>

      </form>
      </div>
    
      </div>)
  }
}