import React, { Component } from 'react';




class Test extends Component {
  render(){
      return (

<div className="test">
<p>"Quel est ton mood du moment ?"</p>
  <a href="/movies?mood=heartbroken" method="GET" class="#" role="option"><img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/237/broken-heart_1f494.png"/></a>
  <a href="/movies?mood=sad" method="GET" class="#" role="option"><img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/237/crying-cat-face_1f63f.png"/></a>
  <a href="/movies?mood=happy" method="GET" class="#" role="option"><img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/237/smiling-face-with-open-mouth_1f603.png"/></a>
</div>

      )}}


export default Test;
