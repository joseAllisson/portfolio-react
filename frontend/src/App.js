import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Home from './pages/Home';

import './global.css';
import About from './pages/About';

function App() {
  return (
    <Router>
      <Switch>

        <Route path="/" exact>
            <Home />
        </Route>
        
        <Route path="/sobre">
            <About />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
