import React from 'react'
// import { setUser } from '../Shared/user.service'
import './home.css'
import {GetUser, setUser} from '../Shared/user.service'
// import firebase from 'firebase/app'
// import {useFirestore} from 'reactfire'
import GameMap from '../Map/map'

const test_players = [{location: {lat: 29.65, lng: -82.3}}]

function Home() {
  // const user= useFirestore().collection('users').doc('testuser')
  // console.log(user)
  const {status , data } = GetUser("testuser")
  console.log(status)
  console.log(data)
  return (
    <div>
    Home!
    <h1>Hi</h1>
    <GameMap center={{lat: 29.65, lng: -82.3}} players={test_players} mons = {[]}/>
    </div>

  )
}

export default Home;
