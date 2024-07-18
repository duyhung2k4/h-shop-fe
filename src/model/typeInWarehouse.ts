import { BaseModel } from "./base";

export type TypeInWarehouseModel = BaseModel & {
    productId: string
    warehouseId: number
    hastag: string
    name: string
    price?: number
    count: number
}