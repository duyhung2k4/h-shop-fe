import { BaseModel } from "./base"

export type ShopModel = BaseModel & {
    address: string
    name: string
    describe: string
    profileId: number
    typeProducts?: any
}