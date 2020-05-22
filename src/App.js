import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {Login, AddGoals, Mail, Goals, Settings, ConfirmExpenses,AddConfirmExpenses, PiggyBankAdd, GroceriesAdd2, Grooming, GroomingAdd, Chat, Tips, Call, Overview, ViewPiggyBank, ExtraExpenses, SaveMoney, SaveMoneyAdd, FreeTime, FreeTimeAdd,  Clothes, ClothesAdd, AllExpenses, Help, Add, Groceries,GroceriesAdd, NotFound} from './pages';

function App() {
  return (
    <Router>
        <Switch>
          <Route exact path='/' component={Login}/>
          <Route path='/Overview' component={Overview}/>
          <Route path='/NogUitgeven' component={ExtraExpenses}/>
          <Route path='/Uitgegeven' component={AllExpenses}/>
          <Route path='/Toevoegen' component={Add}/>
          <Route path='/Help' component={Help}/>
          <Route path='/BoodschappenToevoegen' component={GroceriesAdd}/>
          <Route path='/Boodschappen' component={Groceries}/>
          <Route path='/Kleding' component={Clothes}/>
          <Route path='/KledingToevoegen' component={ClothesAdd}/>          
          <Route path='/VrijeTijd' component={FreeTime}/>
          <Route path='/VrijeTijdToevoegen' component={FreeTimeAdd}/>          
          <Route path='/Sparen' component={SaveMoney}/>
          <Route path='/SparenToevoegen' component={SaveMoneyAdd}/>
          <Route path='/BekijkenSpaarpot' component={ViewPiggyBank}/>
          <Route path='/ToevoegenSpaarpot' component={PiggyBankAdd}/>
          <Route path='/Mail' component={Mail}/>
          <Route path='/Bellen' component={Call}/>
          <Route path='/Tips' component={Tips}/>
          <Route path='/Verzorging' component={Grooming}/>
          <Route path='/DoelenToevoegen' component={AddGoals}/>
          <Route path='/VerzorgingToevoegen' component={GroomingAdd}/>
          <Route path='/BevestigenUitgave' component={ConfirmExpenses}/>
          <Route path='/DoelenZetten' component={Goals}/>
          <Route path='/Chatten' component={Chat}/>
          <Route path='/Instellingen' component={Settings}/>
          <Route path='/ToevoegenBevestigenUitgave' component={AddConfirmExpenses}/>
          <Route component={NotFound} />
        </Switch>
    </Router>
  );
}

export default App;