import { ICategory } from "./ICategory";

export interface IService {
    id?: number,
    name?: string,
    image?: string,
    min_price?: number,
    max_price?: number,
    unit?: string,
    description?: string,
    quantity_sold?: number,
    category?: ICategory,
}