import React, { Component } from 'react';
import './App.scss';

import {Switch, Route} from 'react-router-dom';

import Homepage from './components/auth/Homepage.js'
import Signup from './components/auth/Signup.js';
import Login from './components/auth/Login.js';
import Profile from './components/auth/Profile.js';
import authService from './components/auth/auth-service.js';
import Home from './components/Home.js';
import Test from './components/Test';
import Movielist from './components/Movielist';

class App extends Component {
  state = {
    user: {}
  }

  fetchUser = () => {
    if (!this.state.user._id) {
      authService.loggedin()
        .then(data => this.setState({user: data}))
        .catch(err => this.setState({user: {}}))
      ;
    } else {
      console.log('user already in the state')
    }
  };

  updateUser = (data) => {
    this.setState({user: data});
  };

  componentDidMount() {
    this.fetchUser();
  }

  render() {
    return (
      <Route render={props => (
        <div className="App" data-route={props.location.pathname}> {/* data-route="/" allow us to style pages */}

          <Switch>
            <Route exact path="/" render={(props) => (
              <Homepage user={this.state.user} />
            )} />

            <Route exact path="/signup" render={(props) => (
              <Signup updateUser={this.updateUser} history={props.history} />
            )} />

            <Route exact path="/login" render={(props) => (
              <Login updateUser={this.updateUser} history={props.history} />
            )} />

            <Route exact path="/profile" render={(props) => (
              <Profile user={this.state.user} updateUser={this.updateUser} history={props.history} />
            )} />
            <Route exact path="/home" render={(props) => (
              <Home user={this.state.user} updateUser={this.updateUser} history={props.history} />
      
            )} />
            <Route exact path="/test" render={(props) => (
              <Test user={this.state.user} updateUser={this.updateUser} history={props.history} />
      
            )} />
            <Route exact path="/movies" component={Movielist} />
            {/* last route, ie: 404 */}
            <Route render={() => (<h1>Not Found</h1>)} />
          </Switch>
          <footer>
            <p>&copy; Fanny Fergé</p>
          </footer>
        </div>
      )} />
    );
  }
}

export default App;
