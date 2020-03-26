import React from 'react';
import {Link, Redirect} from 'react-router-dom';
import contact from '../../images/contact.png'
import info from '../../images/info.png'
import question from '../../images/question.png'
import Logohomepage from '../../images/Logohomepage.png'

export default (props) => {
  return (
    <>
      {props.user._id ? (
        <Redirect to="/profile" />
      ) : (
    
          <>
       <div className="homepage">
         <header className="P1">
         
         <img src={Logohomepage} alt='logo' className='logohomepage'/>
       
         <div className="cta">
        <Link className="btn" to="/login">S'identifier</Link><br></br>
        <Link className="btnsignup" to="/signup">S'inscrire</Link>
        </div>
             
        </header> 
      
       <section className="contenu">

       <div>
         <img src={info}   alt='info' className="contenuimg" />
              <p>
              A propos
              </p>
        </div>


        <div>
          <img src={contact} alt='contact' className="contenuimg" />
              <p>
                Contact
              </p>
          </div>

          <div>
            <img src={question} alr='question' className="contenuimg" />
                        
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


