import React from 'react'
//import { setUser } from '../Shared/user.service'
import './home.css'
import Navigation from '../Navigation/navigation'
import {Row, Col} from 'react-bootstrap'
import {GetUser, SetUser, CaptureGator} from '../Shared/user.service'
import firebase from 'firebase/app'
import GameMap from '../Map/map'
import { IUser } from '../Shared/user.interface'
import { IGator } from '../Shared/gator.interface'
import { FirebaseAppProvider , preloadAuth,preloadFirestore, useFirebaseApp} from 'reactfire';
const test_players = {id:0, location: {lat: 29.65, lng: -82.3}}
const test_other_players = [{id:1, location: {lat: 29.7, lng: -82.3}}, {id: 2, location: {lat: 29.6, lng: -82.3}}]

function Home() {
  


  // const {status , data } = GetUser("testuser")
  // console.log(status)
  // console.log(data)
  
  preloadFirestore({
    setup: firestore => firestore().enablePersistence(),
    firebaseApp: useFirebaseApp()
  });

  preloadAuth({
    firebaseApp: useFirebaseApp()
  })
  return (
    <div id="home-page">
    	<Navigation />

	    <Row>
	    	<Col>
	    		<h1 className="home-name">Gator-Mon!</h1>
		    	<h2 className="home-descrip">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h2>
		    </Col>
		    <Col>
		    	<img className="home-img" src="../../gator_cartoon.png" alt="gator_cartoon"></img>
        </Col>
	    </Row>
    </div>

  )
}

export default Home;
