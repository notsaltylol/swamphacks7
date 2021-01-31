import React from 'react';
import firebase from 'firebase/app'
import {useFirestore, useFirestoreDocData} from 'reactfire'
import { IUser } from './user.interface';
import { IGator } from './gator.interface';
import {GetGators} from './gator.service'

import "firebase/firestore"

export const GetUser = async (userEmail : string) : Promise<IUser> =>{
        // TODO : maybe use useUser() to get the currently logged in user? OR NULL if not logged in??
        
        const db = firebase.firestore();
        const userref = await db.collection('users').doc(userEmail).get()
        return userref.data() as IUser
         
}

export const SetUser = async (user: IUser)=>{
    const db = firebase.firestore();
    await db.collection('users').doc(user.email).set(user, {merge: true})
        .then((result)=>{
            console.log("Set user")
        })    
}

export const UpdateUser = async (user: IUser) => {
    const db = firebase.firestore();
    await db.collection('users').doc(user.email).update(user)
        .then((result)=>{
            console.log("Set user")
        }) 
}

export const GetUserList = async () : Promise<IUser[]> => {
    const db = firebase.firestore();
    const users:IUser[] = [];
    const usersRef = await db.collection('users').get();
     
    usersRef.forEach( (user) => {
        users.push(user.data() as IUser)
    }) 

     return users;
}

export const GetUserGators = (user : IUser)=>{
    return GetGators(user.capturedGators)
}


/* ADD GATOR TO USER LIST, UPDATE USER*/
export const CaptureGator = async (user: IUser, gatorid : string)=>{
    user.capturedGators = [...user.capturedGators, gatorid]
    SetUser(user).then(()=>{
        console.log("a gator was captured")
    })
    return "the user captured the gator"
}