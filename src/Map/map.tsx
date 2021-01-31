import React, {useState, useEffect} from 'react'
import {GoogleMap, LoadScript, Marker, InfoWindow, Data} from '@react-google-maps/api'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faStreetView} from '@fortawesome/free-solid-svg-icons'
import './map.css'
import { textSpanEnd } from 'typescript'
import Navigation from "../Navigation/navigation"
import { GetUserList, GetUser, UpdateUser } from '../Shared/user.service'
import { IUser } from '../Shared/user.interface'
import firebase from 'firebase/app'
import 'firebase/auth'

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

  const [ selected, setSelected ] = useState(null as Mon | null);
  const [ currentPosition, setCurrentPosition ] = useState({lat: 29.6483, lng: -82.3494});
  const [ users, setUsers] = useState([] as IUser[] )
  const [ user, setUser] = useState( null as IUser | null)

  useEffect(() => {
    const getUsers = async() => {
      setUsers(await GetUserList()); 
      const user = firebase.auth().currentUser as IUser | null;
  
      if(user){
        setUser(await GetUser(user.email)) 
        console.log(await GetUser(user.email))
      } 

    }
    getUsers();
    
  }, [])



  

  const action = async () =>{

    if(getLocation() && currentPosition){
      spawnMon(currentPosition)
    }
  }

  const spawnMon = (reference_coords : Coords) => {
    const species = 20;
    const range = 0.02;
    var d = new Date()
    var time = d.getTime()
    const newMon : Mon = {id: time, 
      img: 'gator' + Math.ceil(Math.random() * species).toString() + '.png',
      location:{
        lat: reference_coords?.lat + Math.random()*range - range/2,
        lng: reference_coords?.lng + Math.random()*range - range/2
      }
    }
    props.mons.push(newMon)
    setProps(props);
  }
  
  async function getLocation() {
    navigator.geolocation.getCurrentPosition((position)=>{
      setCurrentPosition({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });

      if(user){
        user.currentLocation = {lat: position.coords.latitude, long: position.coords.longitude}
        UpdateUser(user)
      }

    });
  }

  const onSelect = (mon : Mon) => {
    console.log(mon)
    setSelected(mon);
  }

  const getDistance = (loc1 : Coords, loc2 : Coords) => {
    console.log(Math.pow(loc1.lat - loc2.lat, 2) + Math.pow(loc2.lng - loc2.lng, 2))
    return Math.pow(loc1.lat - loc2.lat, 2) + Math.pow(loc1.lng - loc2.lng, 2)
  }

  const mapStyles = () => {
    return {
      width: "100%",
      height: "100%", 
      borderRadius: "20px",
    }
  }


  return(
    <div className="game-map-container">
      <div className="GameMapStyles">
        <button onClick={action}>get location</button>
        <LoadScript
          id="script-loader"
          googleMapsApiKey='AIzaSyDDzAGhmk2jio6ei6HlRHtKW6MW0lHx6Lc'
        >
          <GoogleMap
            id='example-map'
            mapContainerStyle={mapStyles()}
            zoom={13}
            center={currentPosition}
          >
            <Marker
              position={currentPosition}
              icon={faStreetView}
            />
            {

              users?.map((other_player) => {
                return (
                  <Marker
                    key={other_player.email}
                    position={{ lat: other_player.currentLocation.lat, lng: other_player.currentLocation.long }}
                    options={{
                      icon: {
                        url: 'Avatar' + Math.ceil(Math.random() * 11 + 1).toString() + '.png',
                        scaledSize: { width: 32, height: 32 },
                        anchor: { x: 16, y: 0 }
                      }
                    }}
                  />
                )
              })
            }
            {
              props.mons ?
              props.mons.map((mon)=>{
                return (
                  <Marker
                    key = {mon.id}
                    position={mon.location}
                    onClick={() => onSelect(mon)}
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
            {
              selected ? (
                <InfoWindow
                  position={selected.location}
                  onCloseClick={() => setSelected(null)}
                >
                  {
                    getDistance(selected.location, currentPosition) < 2e-3?
                    <button>catch me!</button>:
                    <div>too far</div>
                  }
                </InfoWindow>
              ) : null
              }
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
      
    )
}

export default GameMap





