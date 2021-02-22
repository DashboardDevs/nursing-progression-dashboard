  
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Advisor from './Advisor';

function App() {
  return (
    <Router>
      <nav>
        <ul class="border-0 border-b-2">
          <li class="text-center">
            <Link class="text-scarlet underline" to="/advisor">Advisor</Link>
          </li>
        </ul>
      </nav>
      <Switch>
      <Route path="/advisor">
          <div>
            <Advisor />
          </div>
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
