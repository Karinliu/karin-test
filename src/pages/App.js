import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import {Overview, CheckOffList, AllExpenses, NotFound} from '../pages';

class App extends Component {
  render() {
    const App = () => (
      <div>
        <Switch>
          <Route exact path='/' component={App}/>
          <Route path='/Overview' component={Overview}/>
          <Route path='/AfvinkLijst' component={CheckOffList}/>
          <Route path='/AlleUitgaven' component={AllExpenses}/>
          <Route component={NotFound} />
        </Switch>
      </div>
    )
    return (
      <Switch>
        <App/>
      </Switch>
    );
  }
}

export default App;