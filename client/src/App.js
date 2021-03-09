import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Student from './Student';
import UpdateRequestForm from './UpdateRequestForm';
import Advisor from './Advisor';
import Login from './Login';

function App() {
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
            <Advisor />
          </div>
        </Route>
        <Route path="/student">
          <div>
            <Student />
          </div>
        </Route>
        <Route path="/update">
          <div>
            <UpdateRequestForm />
          </div>
        </Route>
        <Route exact path="/">
          <div>
            <Login />
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
