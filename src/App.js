import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Research from './components/pages/Research';

import Collaboration from './components/pages/Collaboration';
import Education from './components/pages/Education';

function App() {
  return (
    <>
      <Router>
        {/* <Navbar /> */}
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/education' component={Education} />
          <Route path='/research' component={Research} />
          <Route path='/collaboration' component={Collaboration} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
