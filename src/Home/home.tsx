import React from 'react'
import './home.css'
import GameMap from '../Map/map'

const test_players = [{location: {lat: 29.65, lng: -82.3}}]

function Home() {
  return (
    <div>
    Home!
    <h1>Hi</h1>
    <GameMap center={{lat: 29.65, lng: -82.3}} players={test_players} mons = {[]}/>
    </div>

  )
}

export default Home;
