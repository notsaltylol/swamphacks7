import React from 'react'
//import { setUser } from '../Shared/user.service'
import './home.css'
import Navigation from '../Navigation/navigation'
import {GetUser, setUser} from '../Shared/user.service'
//import firebase from 'firebase/app'
//import {useFirestore} from 'reactfire'

function Home() {
  // const user= useFirestore().collection('users').doc('testuser')
  // console.log(user)
  //const {status , data } = GetUser("testuser")
  //console.log(status)
  //console.log(data)
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
