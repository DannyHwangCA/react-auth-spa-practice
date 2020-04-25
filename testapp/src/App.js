// Import React
import React, { Component } from 'react';
import {Router} from '@reach/router';
import Home from './Home';
import Welcome from './Welcome';
import Navigation from './Navigation'
import Login from './Login';


class App extends Component {
  constructor() {
    super();
    this.state = {
      user: null
     }
  }
  
  render() {
    return (
      <div> 
        <Navigation user={this.state.user} />
        {this.state.user && <Welcome user={this.state.user} />}
        <Router>
          <Home path="/" user={this.state.user}/>
          <Login path="/login" user={this.state.user}/>
        </Router>
      </div> 
    );
  }
}

export default App;
