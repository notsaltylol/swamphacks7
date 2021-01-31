import React, {useState} from 'react'
import {GoogleMap, LoadScript, Marker, InfoWindow, Data} from '@react-google-maps/api'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faStreetView} from '@fortawesome/free-solid-svg-icons'
import './map.css'
import { textSpanEnd } from 'typescript'
import Navigation from "../Navigation/navigation"

const test_player = {id:0, location: {lat: 29.65, lng: -82.3}}
const test_other_players = [{id:1, location: {lat: 29.7, lng: -82.3}}, {id: 2, location: {lat: 29.6, lng: -82.3}}]
let test_mons : Array<Mon>;
test_mons = [];

interface Coords {
  lat: number,
  lng: number
}

interface Player {
  id: number,
  location: Coords
}

interface Mon {
  id : number
  img : string
  location: Coords
}

interface MapProps {
  center: Coords,
  player: Player,
  other_players: Player[],
  mons: Mon[]
}

const GameMap = ()=>{
  const [props, setProps] = useState({center: test_player.location, player: test_player, other_players: test_other_players, mons: test_mons});
  
  const [ selected, setSelected ] = useState({});
  const [ currentPosition, setCurrentPosition ] = useState<Coords>(test_player.location);

  const action = () =>{
    if(getLocation()){
      spawnMon(currentPosition)
    }
  }

  const spawnMon = (reference_coords : Coords) => {
    const species = 2;
    const range = 0.02;
    var d = new Date()
    var time = d.getTime()
    const newMon : Mon = {id: time, 
      img: 'gator' + Math.ceil(Math.random() * species).toString() + '.png',
      location:{
        lat: reference_coords.lat + Math.random()*range - range/2,
        lng: reference_coords.lng + Math.random()*range - range/2
      }
    }
    console.log(newMon.location.lat - currentPosition.lat)
    console.log(newMon.location.lng - currentPosition.lng)
    props.mons.push(newMon)
    setProps(props);
  }
  
  async function getLocation() {
    navigator.geolocation.getCurrentPosition((position)=>{
      setCurrentPosition({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    });
  }
  const onSelect = (mon : Mon) => {
    console.log(mon)
    setSelected(mon);
  }

  const mapStyles = () => {
    return {
      width: "100%",
      height: "100%", 
      borderRadius: "20px",
    }
  }


  return(
    <div className="GameMapStyles">
      <Navigation />
      <button onClick={action}>get location</button>
      <LoadScript
        id="script-loader"
        googleMapsApiKey='AIzaSyDDzAGhmk2jio6ei6HlRHtKW6MW0lHx6Lc'
      >
        <GoogleMap
          id='example-map'
          mapContainerStyle={mapStyles()}
          zoom={13}
          center={props.center}
        >
          <Marker
            position={currentPosition}
            icon={faStreetView}
          />
          {
            props.other_players ?
            props.other_players.map((other_player)=>{
              return (
                <Marker
                  key = {other_player.id}
                  position={other_player.location}
                />
              )
              
            }) : console.log("other players did not load")
          }
          {
            props.mons ? 
            props.mons.map((mon)=>{
              return (
                <Marker
                  key = {mon.id}
                  position={mon.location}
                  options={{
                    icon: {
                      url: mon.img,
                      scaledSize: {width: 32, height: 32},
                      anchor: {x:16, y:0}
                    }
                  }}
                />
              )
              
            }) : console.log("mons did not load")
          }
          {/*
            selected ? (
              <InfoWindow
                position={test_player.location}
                onCloseClick={() => setSelected({})}
              >
                Caught!
              </InfoWindow>
            ) : null
            */}
        </GoogleMap>
      </LoadScript>
    </div>
      
    )
}

export default GameMap





