import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import Nav from './Nav/Nav.js';


class Home extends Component {
  render(){
      return (
        <div className='Home'>
        <Nav/>

        <div className='intro'>
         <h1>
          Bonjour {this.props.user.username} !
        </h1>
         <h2>Comment vous sentez-vous aujourd'hui ?</h2>

        <Link className="btn" to="/test"> Mood</Link>
        </div>

        <div className='a'>OOOOOOO</div>
        </div>
      )
  }}


  export default Home; 