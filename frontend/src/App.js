import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Loading from './components/Loading';
import About from './pages/About';
import Contact from './pages/contact';
import Error from './pages/Error';

import './global.css';

const Home = React.lazy(() => import('./pages/Home'));


function App() {
  return (
    <Router>
      <Switch>

        <Route path="/" exact>
          <Suspense fallback={<Loading />}>
            <Home />
          </Suspense>
        </Route>

        <Route path="/sobre">
            <About />
        </Route>

        <Route path="/contato">
            <Contact />
        </Route>

        <Route path="*">
            <Error />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
