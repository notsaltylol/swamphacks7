import {IGator} from './gator.interface'
export interface IUser{
    email: string,
    currentLocation: {
        lat: number,
        long: number
    },
    capturedGators? : IGator[]
}