import React from 'react';
import firebase from 'firebase/app'
import {useFirestore, useFirestoreDocData} from 'reactfire'
import { IUser } from './user.interface';
import { IGator } from './gator.interface';
import {GetGators} from './gator.service'


export const GetUser =(userid : string)=>{
        // TODO : maybe use useUser() to get the currently logged in user? OR NULL if not logged in??
        const userref = useFirestore().collection('users').doc(userid)
        return useFirestoreDocData(userref)
}

export const SetUser = async (user: IUser)=>{
    await useFirestore().collection('users').doc(user.email).set(user, {merge: true})
    .then((result)=>{
        console.log("Set user")
    })
    
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