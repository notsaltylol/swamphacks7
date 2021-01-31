import React, { useState } from 'react'
import './login.css'
import Navigation from '../Navigation/navigation'
import { auth } from 'reactfire'
import {useAuth } from 'reactfire'

function Login() {
	const [email, setEmail] = useState("")
	const [password,setPassword] = useState("")
	// const [username, setUsername] = useState("")
	const auth = useAuth()
	const signIn = async (event:any)=>{
		event.preventDefault()
		await  auth.signInWithEmailAndPassword(email,password)
	}
  return (
    <div className="login-page">
    	<Navigation />
	    
	    <div className="row">
	    	<div className="col left">
	    		<img className="login-img" src="../../login-gator.png" alt="login-gator" />
	    		<h1 className="login-title">Gator-Mon!</h1>
	    	</div>

	    	<div className="col right">
	    		<form className="login-form">
		            <h3>Log in</h3>

		            <div className="form-group">
		                <input type="email" className="form-control" placeholder="email" onChange={(event)=> {
							setEmail(event.target.value)
						}}/>
		            </div>

					<div className="form-group">
		                <input type="password" className="form-control" placeholder="password" onChange={(event)=> {
							setPassword(event.target.value)
						}}/>
		            </div>

		            <div className="form-group">
		                <div className="custom-control custom-checkbox">
		                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
		                    <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
		                </div>
		            </div>
		            <button type="submit" className="btn btn-dark btn-lg btn-block" onClick={signIn}>Sign in</button>
		        </form>
				{/* <button className='login' onClick={signIn}>
					Sign in via Google
				</button> */}

	    	</div>
	    </div>
    </div>

  )
}

export default Login;
