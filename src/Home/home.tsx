import React from 'react'
// import { setUser } from '../Shared/user.service'
import './home.css'
<<<<<<< HEAD
import Navigation from '../Navigation/navigation'
=======
import {GetUser, setUser} from '../Shared/user.service'
// import firebase from 'firebase/app'
// import {useFirestore} from 'reactfire'
import GameMap from '../Map/map'

const test_players = {id:0, location: {lat: 29.65, lng: -82.3}}
const test_other_players = [{id:1, location: {lat: 29.7, lng: -82.3}}, {id: 2, location: {lat: 29.6, lng: -82.3}}]
>>>>>>> 6808ae427286cfdc4a1e79eb2cd489b5cb2dad66

function Home() {
  // const user= useFirestore().collection('users').doc('testuser')
  // console.log(user)
  const {status , data } = GetUser("testuser")
  console.log(status)
  console.log(data)
  return (
<<<<<<< HEAD
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
=======
    <div>
    Home!
    <h1>Hi</h1>
    <GameMap center={{lat: 29.65, lng: -82.3}} player={test_players} mons = {[]} other_players={test_other_players}/>
>>>>>>> 6808ae427286cfdc4a1e79eb2cd489b5cb2dad66
    </div>

  )
}

export default Home;
