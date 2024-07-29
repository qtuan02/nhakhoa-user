import { IService } from "./IService";

export interface ICategory {
    id?: string,
    name?: string,
    image?: string,
    description?: string,
    services?: IService[]
}