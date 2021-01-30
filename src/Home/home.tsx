import React from 'react'
// import { setUser } from '../Shared/user.service'
import './home.css'
import {GetUser, setUser} from '../Shared/user.service'
// import firebase from 'firebase/app'
// import {useFirestore} from 'reactfire'
function Home() {
  // const user= useFirestore().collection('users').doc('testuser')
  // console.log(user)
  const {status , data } = GetUser("testuser")
  console.log(status)
  console.log(data)
  return (
    <div>
    Home!
    <h1>Hi</h1>
    </div>

  )
}

export default Home;
