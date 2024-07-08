import { IService } from "./IService";

export interface IAppoinment {
    name?: string,
    phone?: string,
    email?: string,
    date?: string,
    time?: string,
    doctor_id?: string,
    services?: IService[]
    note?: string,
}

export interface IDate {
    date?: string,
}

export interface ITime {
    time?: string,
}