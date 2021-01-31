import React from 'react'
//import { setUser } from '../Shared/user.service'
import './home.css'
import Navigation from '../Navigation/navigation'
import {Row, Col, Container, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {GetUser, SetUser, CaptureGator} from '../Shared/user.service'
import firebase from 'firebase/app'
import GameMap from '../Map/map'
import { IUser } from '../Shared/user.interface'
import { FirebaseAppProvider , preloadAuth,preloadFirestore, useFirebaseApp} from 'reactfire';
import { GetUserList } from '../Shared/user.service'


const test_players = {id:0, location: {lat: 29.65, lng: -82.3}}
const test_other_players = [{id:1, location: {lat: 29.7, lng: -82.3}}, {id: 2, location: {lat: 29.6, lng: -82.3}}]

function Home() {
  return (
    <div id="home-page">
		<Container fluid>
			<Row>
				<Col>
					<h1 className="home-name">Gator-Mon!</h1>
					<h2 className="home-descrip">Befriend the elusive Gator-mons!</h2>
					<Link to="/map">
						<Button variant="outline-success" size="lg">Start</Button>
					</Link>
				</Col>
				<Col>
					<img className="home-img" src="../../gator_cartoon.png" alt="gator_cartoon"></img>
				</Col>
			</Row>
		</Container>
    </div>

  )
}

export default Home;
