import React from 'react'
import './navigation.css'
import {Navbar, Nav} from 'react-bootstrap'
import {AuthCheck, useAuth } from 'reactfire'
import firebase from "firebase/app";
import "firebase/auth";
function Navigation() {
	const auth = useAuth();
  return (
    <div id="home-page">
		<Navbar className="navbar">
			<Navbar.Brand href="Home">Gator-Mon!</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav.Link href="Map">Play</Nav.Link>
				<Nav.Link href="Carousel">Swamp</Nav.Link>
				<Nav className="mr-auto">
					<AuthCheck fallback={
						<React.Fragment>
							<Nav.Link href="Login">Login</Nav.Link>
							<Nav.Link href="Signup">Sign Up</Nav.Link>
						</React.Fragment>
					}>
						 <Nav.Link href="Home" onClick={()=>{
						auth.signOut()
					}}> Logout <span className="sr-only">(current)</span></Nav.Link>
					
					</AuthCheck>
				</Nav>	
			</Navbar.Collapse>
		</Navbar>




    	{/*<nav className="navbar navbar-expand-lg navbar-light bg-light">
		  <a className="navbar-brand" href="Home">Gator-Mon!</a>
		  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
		    <span className="navbar-toggler-icon"></span>
		  </button>

		  <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
		    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
				<AuthCheck fallback={
					
					<React.Fragment>
						<li className="nav-item active">
						<a className="nav-link" href="Login">Login <span className="sr-only">(current)</span></a>
						</li>
						<li className="nav-item active">
						<a className="nav-link" href="Signup">SignUp <span className="sr-only">(current)</span></a>
						</li>
					</React.Fragment>
				}>
					<li className="nav-item active">
					<a className="nav-link" href="Home" onClick={()=>{
						auth.signOut()
					}}>Logout <span className="sr-only">(current)</span></a>
				  	</li>
					
				</AuthCheck>
		      <li className="nav-item">
		        <a className="nav-link" href="Map">Map</a>
		      </li>
		      <li className="nav-item">
		        <a className="nav-link" href="Carousel">Swamp</a>
		      </li>
		    </ul>
		  </div>
				</nav>*/}

    </div>

  )
}

export default Navigation;
