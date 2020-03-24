import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import Nav from './Nav/Nav.js';


class Home extends Component {
  render(){
      return (
        <div className='Home'>
        <Nav/>
        <p>
          Bonjour {this.props.user.username} !
        </p>
        
        <Link className="btn" to="/test">  c'est quoi ton mood</Link>
        </div>
      )
  }}


  export default Home; 