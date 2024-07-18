import { BaseModel } from "./base";

export type WarehouseModel = BaseModel & {
    productId: string
    count: number
}