import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Logonav from '../../images/Logonav.png'
import Card from './Card.js'
class Nav extends Component {

  render() {
    return (

  <div className="nav-bar">         
                 <Card/>
                 <div><img src={Logonav} alt='logo' className="logonav" /></div>         
  </div>
    )}
    
  }

  export default Nav;