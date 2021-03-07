import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import Student from './Student';
import Advisor from './Advisor';
import Login from './Login';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null
    }

    this.handleUserLogin = this.handleUserLogin.bind(this);
  }

  handleUserLogin(user) {
    this.setState({currentUser: user});
    console.log('app', user);
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/advisor">
            <div>
              <Advisor currentUser={this.state.currentUser}/>
            </div>
          </Route>
          <Route path="/student">
            <div>
              <Student currentUser={this.state.currentUser}/>
            </div>
          </Route>
          <Route path="/update">
            <div>
              <h1>Update Milestones</h1>
            </div>
          </Route>
          <Route exact path="/">
            <div>
              <Login currentUser={this.state.currentUser} handleUserLogin={this.handleUserLogin}/>
            </div>
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
