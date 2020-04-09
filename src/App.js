import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Basic from './components/Layouts';
import Home from './components/Home';
function App() {
  return (
    <Router>
      <Basic>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
      </Basic>
    </Router>
  );
}

export default App;
