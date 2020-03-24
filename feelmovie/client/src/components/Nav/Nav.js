import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Card from './Card.js'
class Nav extends Component {

  render() {
    return (

  <div className="nav-bar">
                <div>
                 <Card/>
                    <div><img src="../../public/images/Logohomepage.png" className="logo" /></div>
               </div>
  </div>
    )}
    
  }

  export default Nav;