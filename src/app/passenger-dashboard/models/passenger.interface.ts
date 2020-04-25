export interface Child{
    name : string,
    age : number
}

export interface Passenger{
    id : number,
    fullname : string,
    checkedIn : boolean,
    checkInDate : number | null,
    baggage: string,
    gender: string
}