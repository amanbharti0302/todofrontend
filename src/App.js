import React from 'react';
import './App.css';

import {Switch , Route, Redirect} from 'react-router-dom';

import Navbar from './components/navbar/navbar.component';
import Dashboard from './pages/dashborad/dashboard.component';
import HomePage from './pages/homepage/homepage.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Allproject from './pages/allprojects/allproject.component';

class App extends React.Component{
    // constructor(){
    //   super();
    //   this.state={
    //     user:''
    //   }
    // }


render(){
  return (
    <div className="App">
      <Navbar/>
      <Switch>
      <Route exact path='/' component={HomePage}  />
      <Route exact path='/signup' component={SignInAndSignUpPage}  />
      <Route exact path='/projects/:id' component={Allproject}/>
      <Route exact path='/dashboard/:id' component={Dashboard}/>
      </Switch>
    </div>
  );
}

}

export default App;

// #9f8fff #7b68ee