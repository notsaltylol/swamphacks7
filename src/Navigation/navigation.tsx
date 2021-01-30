import React from 'react'
import './navigation.css'

function Navigation() {
  return (
    <div id="home-page">


    	<nav className="navbar navbar-expand-lg navbar-light bg-light">
		  <a className="navbar-brand" href="Home">Gator-Mon!</a>
		  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
		    <span className="navbar-toggler-icon"></span>
		  </button>

		  <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
		    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
		      <li className="nav-item active">
		        <a className="nav-link" href="Login">Login <span className="sr-only">(current)</span></a>
		      </li>
		      <li className="nav-item">
		        <a className="nav-link" href="">Swamp</a>
		      </li>
		    </ul>
		  </div>
		</nav>

    </div>

  )
}

export default Navigation;