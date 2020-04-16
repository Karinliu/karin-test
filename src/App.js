import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {Login, Overview, CheckOffList, AllExpenses, NotFound} from './pages';

function App() {
  return (
    <Router>
        <Switch>
          <Route exact path='/' component={Login}/>
          <Route path='/Overview' component={Overview}/>
          <Route path='/AfvinkLijst' component={CheckOffList}/>
          <Route path='/AlleUitgaven' component={AllExpenses}/>
          <Route component={NotFound} />
        </Switch>
    </Router>
  );
}

export default App;