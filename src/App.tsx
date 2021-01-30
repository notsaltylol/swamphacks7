import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from './Auth/login'
import Home from './Home/home'
import { FirebaseAppProvider } from 'reactfire';

const firebaseConfig = {
  apiKey: "AIzaSyDSWRZGHKWVmMcGIIQQm2L1t-z0tvB8LPM",
  authDomain: "swamphacks2021-poki.firebaseapp.com",
  projectId: "swamphacks2021-poki",
  storageBucket: "swamphacks2021-poki.appspot.com",
  messagingSenderId: "193865770028",
  appId: "1:193865770028:web:19e56fda870722bd681d89",
  measurementId: "G-PGFB8FWL08"
};

function App() {
  return (
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <BrowserRouter>
        <Switch>
          <Route path='/login' component={Login}/>
          <Route path='/' component={Home}/>
        </Switch>
      </BrowserRouter>
    </FirebaseAppProvider>
  );
}

export default App;
