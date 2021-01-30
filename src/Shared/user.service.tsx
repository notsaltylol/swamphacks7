import React from 'react';
import firebase from 'firebase/app'
import {useFirestore, useFirestoreDocData} from 'reactfire'
export const GetUser =(userid : string)=>{
        const userref = useFirestore().collection('users').doc(userid)
        return useFirestoreDocData(userref)
}

export const setUser =()=>{
    return "the user is set"
}