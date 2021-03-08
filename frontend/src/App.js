import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Home from './pages/Home';

import './global.css';
import About from './pages/About';
import Contact from './pages/contact';

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

        <Route path="/contato">
            <Contact />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
