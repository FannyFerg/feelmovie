import React from 'react';

import {Link, Redirect} from 'react-router-dom';


export default (props) => {
  return (
    <>
      {props.user._id ? (
        <Redirect to="/home" />
      ) : (
    
          <>
       <div className="homepage">

         <header className="P1">
         
         <img src="../../../public/images/Logohomepage.png" className="logohomepage" />
               <p>
               <Link className="btn" to="/signup">Sign up</Link>
               </p>
                <p>
                <Link className="btn" to="/login">Log in</Link>
               </p>
        </header> 
      
       <section className="contenu">

       <div>
         <img src="../../../public/images/info.png" className="contenuimg" />
              <p>
              A propos
              </p>
        </div>


        <div>
          <img src="../../../public/images/contact (1).png" className="contenuimg" />
              <p>
                Contact
              </p>
          </div>

          <div>
            <img src="../../../public/images/question (1).png" className="contenuimg" />
                        
              <p>
              Besoin d'aide ?
              </p>
          </div>


       </section>

     </div>
    
          </>
        
      )}
    </>
  );
}


