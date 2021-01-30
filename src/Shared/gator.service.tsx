import React from 'react';
import firebase from 'firebase/app'
import {useFirestore, useFirestoreDocData} from 'reactfire'
import { IUser } from './user.interface';
import { IGator } from './gator.interface';

export const GetGator =(id : string)=>{
    const userref = useFirestore().collection('users').doc(id)
    return useFirestoreDocData(userref)
}


export const GetGators =(ids : string[])=>{
    return ids.map(GetGator)
}

export const SetGator = async (gator:IGator)=>{
    await useFirestore().collection('gators').doc(gator.id).set(gator, {merge: true})
    .then(()=>{
        console.log("Set gator")
    })
}
