import React, { useState } from 'react'
import './login.css'
import Navigation from '../Navigation/navigation'
import {AuthCheck, useAuth, useFirestore, useFirestoreDocData} from 'reactfire'
import { Router, useHistory } from 'react-router-dom'
import { IUser } from '../Shared/user.interface'
import { SetUser } from '../Shared/user.service'

import "firebase/firestore"
import firebase from 'firebase/app'


function Signup() {
	const [email, setEmail] = useState("")
	const [password,setPassword] = useState("")
	const history = useHistory()

	const auth = useAuth()

	const signUp = async (event:any)=>{
		event.preventDefault()
		await auth.createUserWithEmailAndPassword(email, password)
		console.log(auth.currentUser)

		//save data into database
		const newuser : IUser = {
			email: email,
			currentLocation:{
				lat:0,
				long:0
			},
			capturedGators:[]
		}
		SetUser(newuser)

		//redirect to home page
		history.push('/Home')
	}

	

  return (
    <div className="login-page">
	    <div className="row">
	    	<div className="col left">
	    		<img className="login-img" src="../../login-gator.png" alt="login-gator" />
	    		<h1 className="login-title">Gator-Mon!</h1>
	    	</div>

	    	<div className="col">
	    		<form className="login-form">
		            <h3>Sign up</h3>

		            <div className="form-group">
		                <input type="email" className="form-control" placeholder="Email" onChange={(event)=> {
							setEmail(event.target.value)
						}}/>
		            </div>

					<div className="form-group">
		                <input type="password" className="form-control" placeholder="Password" onChange={(event)=> {
							setPassword(event.target.value)
						}}/>
		            </div>

		            <div className="form-group">
		                <div className="custom-control custom-checkbox">
		                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
		                    <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
		                </div>
		            </div>
		            <button type="submit" className="btn btn-dark btn-lg btn-block" onClick={signUp}>Sign up</button>
		        </form>

	    	</div>
	    </div>
    </div>

  )
}

export default Signup;
