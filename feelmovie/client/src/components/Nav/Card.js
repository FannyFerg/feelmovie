import React, { Component } from 'react';
import authService from '../auth/auth-service.js';
import {Link} from 'react-router-dom';

class Card extends Component {
  constructor() {
    super();
    
    this.state = {
      showMenu: false,
    };
    
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }
  
  showMenu(event) {
    event.preventDefault();
    
    this.setState({ showMenu: true },() => {
      document.removeEventListener('click', this.closeMenu);
    } );
  }
  
  closeMenu(event) {
    
    if (!this.dropdownMenu.contains(event.target)) {
      
      this.setState({ showMenu: false }, () => {
        document.removeEventListener('click', this.closeMenu);
      })}


      
  
  }

  logout (event) {
    authService.logout()
      .then(response => {
        this.props.updateUser(false);
      })
    ;
  }

  render() {
    return (
      <div>
        <button onClick={this.showMenu}>
        <img src="../../public/images/Logohomepage.png" className="logo" />
        </button>
        
        {
          this.state.showMenu
            ? (
              <div
                className="menu"
                ref={(element) => {
                  this.dropdownMenu = element;
                }}
              >
                <button><Link to={`/home`}>Page d'accueil</Link></button>
                <button> <Link to={`/profile`}>Profile</Link></button>
                <button className="btn logout" onClick={this.logout}>Logout</button>
              </div>
            )
            : (
              null
            )
        }
      </div>
    );
  }
}

export default Card;