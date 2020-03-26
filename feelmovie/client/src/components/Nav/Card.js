import React, { Component } from 'react';
import authService from '../auth/auth-service.js';
import {Link} from 'react-router-dom';
import menu from '../../images/menu.png'

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
      <div className='card'>
        <button onClick={this.showMenu} className='btnNav'>
        <img src={menu} alt='logo' className="logomenu" />
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
                <button className='btnburger'><Link to={`/home`} >Page d'accueil </Link></button>
                <button className='btnburger'> <Link to={`/profile`}>Profile</Link></button>
                <button className='btnburger' onClick={this.logout}>Logout</button>
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