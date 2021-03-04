import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Student from './Student';
import UpdateRequestForm from './UpdateRequestForm';

function App() {
  return (
    <Router>
      <nav>
        <ul class="border-0 border-b-2">
          <li class="text-center">
            <Link class="text-scarlet underline" to="/student">Student</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/student">
          <Student />
        </Route>
        <Route path="/update">
          <UpdateRequestForm />
        </Route>
        <Route path="/">
          <div>
            <h1>Nursing Doctoral Student Dashboard</h1>
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
