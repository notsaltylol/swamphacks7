import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from './Auth/login'
import Home from './Home/home'
import GameMap from './Map/map'
import Signup from './Auth/signup'
import { FirebaseAppProvider } from 'reactfire';


const firebaseConfig = {
  apiKey: "AIzaSyDSWRZGHKWVmMcGIIQQm2L1t-z0tvB8LPM",
  authDomain: "swamphacks2021-poki.firebaseapp.com",
  projectId: "swamphacks2021-poki",
  storageBucket: "swamphacks2021-poki.appspot.com",
  databaseURL: "https://swamphacks2021-poki-default-rtdb.firebaseio.com",
  messagingSenderId: "193865770028",
  appId: "1:193865770028:web:19e56fda870722bd681d89",
  measurementId: "G-PGFB8FWL08"
};

const test_player = {id:0, location: {lat: 29.65, lng: -82.3}}
const test_other_players = [{id:1, location: {lat: 29.7, lng: -82.3}}, {id: 2, location: {lat: 29.6, lng: -82.3}}]


function App() {
  return (
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <BrowserRouter>
        <Switch>
          <Route path='/login' component={Login}/>
          <Route path='/map' component={GameMap}/>
          <Route path='/signup' component={Signup}/>
          <Route path='/' component={Home}/>
        </Switch>
      </BrowserRouter>
    </FirebaseAppProvider>
  );
}

export default App;
