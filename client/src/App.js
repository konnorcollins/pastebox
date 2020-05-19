import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
 } from 'react-router-dom';

import AddBox from './components/AddBox';
import ViewBox from './components/ViewBox';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Router>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/add">Add</Link>
          </nav>
          <Switch>
              <Route path="/view/:id" component={ViewBox}/>
              <Route path="/add" component={AddBox}/>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
