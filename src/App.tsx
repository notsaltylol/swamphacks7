import React from 'react';
import './App.css';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import Login from './Auth/login'
import Home from './Home/home'
import GameMap from './Map/map'
import Signup from './Auth/signup'

import { FirebaseAppProvider } from 'reactfire';
import CarouselComponent from './Carousel/carousel';
import { firebaseConfig } from './firebaseConfig'
import Navigation from './Navigation/navigation'

function App() {
  return (
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <BrowserRouter>
        <Navigation/>
        <Switch>
          <Route path='/login' component={Login}/>
          <Route path='/map' component={GameMap}/>
          <Route path='/signup' component={Signup}/>
          <Route path='/carousel' component={CarouselComponent}/>
          <Route exact path='/' component={Home}/>
          <Route path='/'>
            <Redirect to='/' />
          </Route>
        </Switch>
      </BrowserRouter>
    </FirebaseAppProvider>
  );
}

export default App;
