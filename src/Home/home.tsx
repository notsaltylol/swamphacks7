import React from 'react'
import './home.css'
import GameMap from '../Map/map'

const test_players = {id:0, location: {lat: 29.65, lng: -82.3}}
const test_other_players = [{id:1, location: {lat: 29.7, lng: -82.3}}, {id: 2, location: {lat: 29.6, lng: -82.3}}]

function Home() {
  return (
    <div>
    Home!
    <h1>Hi</h1>
    <GameMap center={{lat: 29.65, lng: -82.3}} player={test_players} mons = {[]} other_players={test_other_players}/>
    </div>

  )
}

export default Home;
