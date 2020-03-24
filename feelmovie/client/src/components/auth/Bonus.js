import React, { Component } from 'react';

import FacebookLogin from 'react-facebook-login';

import GoogleLogin from 'react-google-login';

class Bonus extends Component {

  render() {

    const responseFacebook = (response) => {
      console.log(response);
    }

    const responseGoogle = (response) => {
      console.log(response);
    }

    return (
      <div className="BONUS">

      <FacebookLogin
        appId="516419075920560" //APP ID NOT CREATED YET
        fields="name,email,picture"
        callback={responseFacebook}
      />
      <br />
      <br />


      <GoogleLogin
        clientId="79276299587-m6aih1vqshbiivo2sk5jqp991m91sdup.apps.googleusercontent.com" //CLIENTID NOT CREATED YET
        buttonText="LOGIN WITH GOOGLE"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
      />

      </div>
    );
  }
}

export default Bonus;
























// import React, { Component } from 'react';
// import FacebookLoginWithButton from 'react-facebook-login';

// const responseFacebook = (response) => {
//   console.log(response);
// }

// const componentClicked = () => {
//   console.log( "Clicked!" )
// }

// class Bonus extends Component {
//   render(){
//   return (
//     <div>
//     <FacebookLoginWithButton
//       appId="516419075920560"
//       autoLoad
//       fields="name,email,picture"
//       onClick={componentClicked}
//       callback={responseFacebook}
//       icon="fa-facebook"/>
//       </div>
//     )}
// }

// export default Bonus;
