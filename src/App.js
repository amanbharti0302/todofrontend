import React from 'react';
import './App.css';

import {Switch , Route, Redirect} from 'react-router-dom';

import Navbar from './components/navbar/navbar.component';
import Dashboard from './pages/dashborad/dashboard.component';
import HomePage from './pages/homepage/homepage.component';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Switch>
      <Route exact path='/' component={HomePage}/>

      {/* <Dashboard/> */}
      </Switch>
    </div>
  );
}

export default App;


// #9f8fff #7b68ee