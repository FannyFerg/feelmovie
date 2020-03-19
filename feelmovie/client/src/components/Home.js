import React, { Component } from 'react';
import {Link} from 'react-router-dom';



class Home extends Component {
  render(){
      return (
        <div className='Home'>
        <p>
          Bonjour {this.props.user.username} !
        </p>
        
        <Link className="btn" to="/test">  c'est quoi ton mood</Link>
        </div>
      )
  }}


  export default Home; 