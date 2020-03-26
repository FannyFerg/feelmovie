import React from 'react';

import {Link} from 'react-router-dom';
import Logonav from '../../images/Logonav.png'
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
     
      <img src={Logonav} alt='logo' className='logologin'/>

      <div className='siup'>
      <form onSubmit={this.handleSubmit}>
      <h1>S'inscrire</h1>
      
      {this.state.error && (
              <p className="error">{this.state.error}</p>
            )}
       
      
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
          <label>
          <em>Email</em>
          <input type="email" name="email" value={this.state.email} onChange={this.handleChange} />
          </label>
        </p>
       
      
        <p>
          <button className="btn" onClick={this.handleSubmit}>Valider</button>
        </p>
       
        <p className='note'>
           <small>Vous avez un compte  ? <Link to="/login" className='ici'>ici</Link></small>
         </p>

        </form>
        </div>
    
        </div>
    );
  }
}