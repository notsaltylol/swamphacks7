import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from './Auth/login'
import Home from './Home/home'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/login' component={Login}/>
        <Route path='/' component={Home}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
