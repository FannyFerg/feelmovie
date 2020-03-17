import React from 'react';

import {Link, Redirect} from 'react-router-dom';

import Popin from '../Popin.js';

export default (props) => {
  return (
    <>
      {props.user._id ? (
        <Redirect to="/profile" />
      ) : (
    
          <>
           <div className="homepage"> 
        <h1>iFeelMovie</h1>
        <h2>Le film selon ton mood !</h2>
        <p>
        <Link className="btn" to="/signup">Sign up</Link>
       </p>
        <p>
        <Link className="btn" to="/login">Log in</Link>
       </p>
      

     </div>
    
          </>
        
      )}
    </>
  );
}


