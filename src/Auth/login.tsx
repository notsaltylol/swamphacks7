import React from 'react'
import './login.css'
import Navigation from '../Navigation/navigation'

function Login() {
  return (
    <div className="login-page">
    	<Navigation />
	    
	    <div className="row">
	    	<div className="col">
	    		<h1 className="login-title">Gator-Mon!</h1>
	    		<img className="login-img" src="../../login_gator.png" alt="login-gator" />
	    	</div>

	    	<div className="col">
	    		<form className="login-form">
		            <h3>Log in</h3>

		            <div className="form-group">
		                <input type="username" className="form-control" placeholder="username" />
		            </div>

		            <div className="form-group">
		                <input type="email" className="form-control" placeholder="email" />
		            </div>

		            <div className="form-group">
		                <div className="custom-control custom-checkbox">
		                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
		                    <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
		                </div>
		            </div>
		            <button type="submit" className="btn btn-dark btn-lg btn-block">Sign in</button>
		        </form>

	    	</div>
	    </div>
    </div>

  )
}

export default Login;
