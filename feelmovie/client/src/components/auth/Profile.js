import React from 'react';

import authService from './auth-service.js';
import { Redirect } from 'react-router-dom';
import Search from '../Search.js';
import Nav from '../Nav/Nav.js'


export default class extends React.Component {

  logout = (event) => {
    authService.logout()
      .then(response => {
        this.props.updateUser(false);
      })
    ;
  }

  handleUpload = (event) => {
    let formData = new FormData();
    formData.append('photo', event.target.files[0]);

    authService.upload(formData)
      .then(response => {
        this.props.updateUser(response);
      })
    ;
  }

  render() {
    return (
      <>
        {!this.props.user._id ? (
          <Redirect to="/" />) : (

            <div className='profil'>

            <Nav/>

            <div className='profilhead'>
            <form>
                <label>
                  <img className="avatar" src={this.props.user.photo || "https://material.io/tools/icons/static/icons/baseline-person-24px.svg"} alt="photodeprofile" />
                  <input type="file" name="image" onChange={this.handleUpload} />
                </label>
              </form>
             
              <h1>
                 Bonjour {this.props.user.username} !
              </h1>
              </div>
            
            
              <Search/>
              <div className="cta">
                <button className="btn logout" onClick={this.logout}>Logout</button>
              </div>

            </div>
          )}             
        
      </>
    );
  }
}