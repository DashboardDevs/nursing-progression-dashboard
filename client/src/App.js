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
    if (!!this.state.currentUser && (this.state.currentUser.isAdvisor || this.state.currentUser.isAdmin)) {
      return (
        <Router>
          <Redirect to="/advisor" />
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
          </Switch>
        </Router>
      )
    } else if (!!this.state.currentUser){
      return (
        <Router>
          <Redirect to="/student" />
          <Switch>
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
          </Switch>
        </Router>
      )
    } else {
      return (
        <Router>
          <Switch>
            <Route exact path="/">
              <div>
                <Login handleUserLogin={this.handleUserLogin}/>
              </div>
            </Route>
          </Switch>
        </Router>
      )
    }


    return (
      <Router>
        <nav>
          <ul class="border-0 border-b-2">
            <li class="text-center">
              <Link class="text-scarlet underline" to="/advisor">Advisor</Link>
            </li>
            <li class="text-center">
              <Link class="text-scarlet underline" to="/student">Student</Link>
            </li>
          </ul>
        </nav>
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
              <Login handleUserLogin={this.handleUserLogin}/>
            </div>
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
