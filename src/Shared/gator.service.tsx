import React from 'react';
import firebase from 'firebase/app'
import {useFirestore, useFirestoreDocData} from 'reactfire'
import { Mon } from '../Map/map'
import { IUser } from './user.interface'

export const GetGator =(id : string)=>{
    const userref = useFirestore().collection('users').doc(id)
    return useFirestoreDocData(userref)
}

export const GetAllMons = async () => {
    const db = firebase.firestore();
    const mons:Mon[] = [];
    const usersRef = await db.collection('gators').get();

    usersRef.forEach( (mon) => {
        mons.push(mon.data() as Mon)
    })

    return mons;
}

export const SetMon = async (monster: Mon)=>{
    const db = firebase.firestore();
    await db.collection('gators').add(monster)
}

export const GetGators =(ids : string[])=>{
    return ids.map(GetGator)
}

export const SetGator = async (gator:Mon)=>{
    await useFirestore().collection('gators').doc(gator.id.toString()).set(gator, {merge: true})
}
