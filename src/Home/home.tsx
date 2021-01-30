import React from 'react'
//import { setUser } from '../Shared/user.service'
import './home.css'
import {GetUser, setUser} from '../Shared/user.service'
//import firebase from 'firebase/app'
//import {useFirestore} from 'reactfire'
import GameMap from '../Map/map'

const test_players = {id:0, location: {lat: 29.65, lng: -82.3}}
const test_other_players = [{id:1, location: {lat: 29.7, lng: -82.3}}, {id: 2, location: {lat: 29.6, lng: -82.3}}]

function Home() {
  // const user= useFirestore().collection('users').doc('testuser')
  // console.log(user)
  //const {status , data } = GetUser("testuser")
  //console.log(status)
  //console.log(data)
  return (
    <div>
    Home!
    <h1>Hi</h1>

    <div className="GameMap">
      <GameMap center={{lat: 29.65, lng: -82.3}} player={test_players} mons = {[]} other_players={test_other_players}/>
    </div>
    </div>

  )
}

export default Home;
