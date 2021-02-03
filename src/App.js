import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './Dashboard';
import Login from './Login'

function App() {
  return (
    <div>
      <h1>Nursing Doctoral Student Dashboard</h1>
      <BrowserRouter>
        <Switch>
          <Route path="/dashboard">
            <Dashboard></Dashboard>
          </Route>
          <Route exact path="/">
            <Login></Login>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
