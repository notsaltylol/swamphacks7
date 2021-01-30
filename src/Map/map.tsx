import React, {useState} from 'react'
import {GoogleMap, LoadScript, Marker, InfoWindow} from '@react-google-maps/api'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faStreetView} from '@fortawesome/free-solid-svg-icons'


interface Coords {
  lat: number,
  lng: number
}

interface Player {
  id: number,
  location: Coords
}

interface Mon {
  location: Coords
}

interface MapProps {
  center: Coords,
  player: Player,
  other_players: Player[],
  mons: Mon[]
}

const GameMap = (props : MapProps)=>{
  console.log(props.other_players)
  const [ selected, setSelected ] = useState({});
  const [ currentPosition, setCurrentPosition ] = useState({});

  const onSelect = (item : String) => {
    console.log(item)
    setSelected(item);
  }

  const mapStyles = () => {
    return {
      width: "100%",
      height: "100%", 
      borderRadius: "20px",
    }
  }


  return(
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
            position={props.player.location}
            icon={<FontAwesomeIcon icon={faStreetView}/>}
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
        </GoogleMap>
      </LoadScript>
    )
}

export default GameMap





