import React from 'react';
import firebase from 'firebase/app'
import {useFirestore, useFirestoreDocData} from 'reactfire'
import { IUser } from './user.interface';
import { IGator } from './gator.interface';

export const GetUser =(userid : string)=>{
        // TODO : maybe use useUser() to get the currently logged in user? OR NULL if not logged in??
        const userref = useFirestore().collection('users').doc(userid)
        return useFirestoreDocData(userref)
}

export const setUser =(user: IUser)=>{
    return "the user is set"
}

/* ADD GATOR TO USER LIST, UPDATE USER*/
export const captureGator =(user: IUser, gator : IGator)=>{
    return "the user captured the gator"
}