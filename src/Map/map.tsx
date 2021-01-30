import React, {useState} from 'react'
import {GoogleMap, LoadScript, Marker, InfoWindow} from '@react-google-maps/api'

interface Coords {
  lat: number,
  lng: number
}

interface Player {
  location: Coords
}

interface Mon {
  location: Coords
}

interface MapProps {
  center: Coords,
  players: Player[],
  mons: Mon[]
}

const GameMap = (props : MapProps)=>{
  const [ selected, setSelected ] = useState({});
  const [ currentPosition, setCurrentPosition ] = useState({});

  const onSelect = (item : String) => {
    console.log(item)
    setSelected(item);
  }

  const mapStyles = () => {
    return {
      width: "1000px",
      height: "1000px", 
      borderRadius: "10px",
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
          {/*
            locations ?
            locations.map(location => {
              return (
              <Marker 
              key={location.attributes.OBJECTID}
              position={{lat: location.geometry.y, lng: location.geometry.x}}
              onClick={() => onSelect(location)}
              />
              )
            }): console.log('locations fail')
          */}
        </GoogleMap>
      </LoadScript>
    )
}

export default GameMap





