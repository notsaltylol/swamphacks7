import React from 'react'
//import { setUser } from '../Shared/user.service'
import './home.css'
import Navigation from '../Navigation/navigation'
//import firebase from 'firebase/app'
//import {useFirestore} from 'reactfire'
<<<<<<< HEAD
=======
import './home.css'
import {GetUser, SetUser, CaptureGator} from '../Shared/user.service'
import firebase from 'firebase/app'

// import {useFirestore} from 'reactfire'
import GameMap from '../Map/map'
import { IUser } from '../Shared/user.interface'
import { IGator } from '../Shared/gator.interface'

const test_players = {id:0, location: {lat: 29.65, lng: -82.3}}
const test_other_players = [{id:1, location: {lat: 29.7, lng: -82.3}}, {id: 2, location: {lat: 29.6, lng: -82.3}}]
>>>>>>> 8600e1614b18211de7524ac9a31259da19493d2a

function Home() {
  


  // const {status , data } = GetUser("testuser")
  // console.log(status)
  // console.log(data)
  

  return (
    <div id="home-page">
    	<Navigation />

	    <div className="row">
	    	<div className="col">
	    		<h1 className="home-name">Gator-Mon!</h1>
		    	<h2 className="home-descrip">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h2>
		    </div>
		    <div className='col'>
		    	<img className="home-img" src="../../gator_cartoon.png" alt="gator_cartoon"></img>
		    </div>
	    </div>
    </div>

  )
}

export default Home;
