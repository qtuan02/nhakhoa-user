import { IService } from "./IService";

export interface ICategory {
    id?: number,
    name?: string,
    image?: string,
    description?: string,
    services?: IService[]
}