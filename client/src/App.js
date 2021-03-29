import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Student from './Student';
import UpdateRequestForm from './UpdateRequestForm';
import UpdateMilestoneForm from './UpdateMilestoneForm';
import Advisor from './Advisor';
import Login from './Login';
import Logout from './Lougout';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null
    }

    this.handleUserLogin = this.handleUserLogin.bind(this);
    this.handleUserLogout = this.handleUserLogout.bind(this);
  }

  handleUserLogin(user) {
    this.setState({ currentUser: user });
    console.log('app', user);
  }

  handleUserLogout() {
    this.setState({ currentUser: null });
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/advisor/:id">
            <div>
              <Logout handleUserLogout={this.handleUserLogout} />
              <Advisor currentUser={this.state.currentUser} />
            </div>
          </Route>
          <Route path="/student/:id">
            <div>
              <Logout handleUserLogout={this.handleUserLogout} />
              <Student currentUser={this.state.currentUser} />
            </div>
          </Route>
          <Route path="/update">
            <div>
              <Logout handleUserLogout={this.handleUserLogout} />
              <UpdateMilestoneForm currentUser={this.state.currentUser} />
            </div>
          </Route>
          <Route path="/request">
            <div>
              <Logout handleUserLogout={this.handleUserLogout} />
              <UpdateRequestForm currentUser={this.state.currentUser} />
            </div>
          </Route>
          <Route exact path="/">
            <div>
              <Login currentUser={this.state.currentUser} handleUserLogin={this.handleUserLogin} />
            </div>
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
