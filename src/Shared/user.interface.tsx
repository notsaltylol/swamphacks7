
export interface IUser{
    email: string,
    currentLocation: {
        lat: number,
        long: number
    },
    capturedGators : string[]
}