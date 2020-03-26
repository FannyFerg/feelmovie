import React, { Component } from 'react';
import Nav from './Nav/Nav.js'




class Test extends Component {
  render(){
      return (
  <div className='Mood'>
        <Nav/>
        <section className="mood" role="listbox">
        <h1>Comment vous sentez vous aujourd'hui ?</h1>
        <a href="/movies?mood=heartbroken" method="GET" role="option"><img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/72/emojidex/112/smiling-face-with-open-mouth_1f603.png"/></a>
        <a href="/movies?mood=sad" method="GET"  role="option"><img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/72/emojidex/112/hushed-face_1f62f.png"/></a>
        <a href="/movies?mood=happy" method="GET" role="option"><img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/72/emojidex/112/disappointed-face_1f61e.png"/></a>
        </section>
        <div className='a'>OOOOOOO</div>

  </div>
      )}}


export default Test;
