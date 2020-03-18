import React, { Component } from 'react';
import {Link, Redirect} from 'react-router-dom';



class Home extends Component {
  render(){
      return (
        <div className='Home'>
        <p>
          Bonjour {this.props.user.username} !
        </p>
        
        <Link className="btn" to="/test">Log in</Link>
        </div>
      )
  }}


  export default Home; 