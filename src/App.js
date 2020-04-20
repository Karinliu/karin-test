import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {Login, Overview, ExtraExpenses, Clothes, ClothesAdd, AllExpenses, Help, Add, Groceries,GroceriesAdd, NotFound} from './pages';

function App() {
  return (
    <Router>
        <Switch>
          <Route exact path='/' component={Login}/>
          <Route path='/Overview' component={Overview}/>
          <Route path='/ExtraUitgaven' component={ExtraExpenses}/>
          <Route path='/AlleUitgaven' component={AllExpenses}/>
          <Route path='/Toevoegen' component={Add}/>
          <Route path='/Help' component={Help}/>
          <Route path='/BoodschappenToevoegen' component={GroceriesAdd}/>
          <Route path='/Boodschappen' component={Groceries}/>
          <Route path='/Kleding' component={Clothes}/>
          <Route path='/KledingToevoegen' component={ClothesAdd}/>
          <Route component={NotFound} />
        </Switch>
    </Router>
  );
}

export default App;