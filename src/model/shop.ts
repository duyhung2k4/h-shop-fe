import { BaseModel } from "./base"

export type ShopModel = BaseModel & {
    address: string
    name: string
    profileId: number
    typeProducts?: any
}