import React from 'react'
import './home.css'
import {GetUser, SetUser, CaptureGator} from '../Shared/user.service'
import firebase from 'firebase/app'

// import {useFirestore} from 'reactfire'
import GameMap from '../Map/map'
import { IUser } from '../Shared/user.interface'
import { IGator } from '../Shared/gator.interface'

const test_players = [{location: {lat: 29.65, lng: -82.3}}]

function Home() {
  


  // const {status , data } = GetUser("testuser")
  // console.log(status)
  // console.log(data)
  

  return (
    <div>
    Home!
    <h1>Hi</h1>
    <GameMap center={{lat: 29.65, lng: -82.3}} players={test_players} mons = {[]}/>
    </div>

  )
}

export default Home;
