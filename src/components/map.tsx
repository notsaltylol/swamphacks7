import React from 'react'
import {GoogleMap, LoadScript, Marker, InfoWindow} from '@react-google-maps/api'


const GameMap = ()=>{


//     return(
//         <LoadScript
//           id="script-loader"
//           googleMapsApiKey={API_KEY}
//         >
//           <GoogleMap
//             id='example-map'
//             mapContainerStyle={mapStyles()}
//             draggable={true}
//             zoom={zoomLevel}
//             center={center}
//           >
//             {
//               locations ?
//               locations.map(location => {
//                 return (
//                 <Marker 
//                 key={location.attributes.OBJECTID}
//                 position={{lat: location.geometry.y, lng: location.geometry.x}}
//                 onClick={() => onSelect(location)}
//                 />
//                 )
//               }): console.log('locations fail')
//             }
//             {
//               selected.geometry ?
//               (
//                 <InfoWindow
//                 position={{lat: selected.geometry.y, lng: selected.geometry.x}}
//                 onCloseClick={() => setSelected({})}
//               >
//                 <div className="infowindow">
//                   <p>
//                       <FontAwesomeIcon
//                         icon={faHome}
//                       /> :  
//                     {selected.attributes.STD_ADDR}
//                   </p>
//                   <p>
//                       <FontAwesomeIcon
//                         icon={faBuilding}
//                       /> :  
//                     {selected.attributes.STD_CITY}, {selected.attributes.STD_ST}, {selected.attributes.STD_ZIP5}</p>
//                   <p>
//                       <FontAwesomeIcon 
//                         icon={faPhone} 
//                       /> :  
//                     {selected.attributes.HA_PHN_NUM.toString().replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2 - $3')}
//                   </p>
//                   <p>
//                     Units Vacant:  {selected.attributes.REGULAR_VACANT}/{selected.attributes.TOTAL_OCCUPIED}
//                   </p>
//                 </div>
//               </InfoWindow>
//               ) : console.log('infowindow fail')
//               }
//           </GoogleMap>
//         </LoadScript>
//       )
}

export default GameMap





