export type OrderReq = {
    productId: string
    warehouseId: number
    typeWarehouseId?: number
    groupOrderId?: number
    amount: number
}

export type GroupOrderReq = {
    address: string
    typePay: string
    orderDescription: string
    orderType: string
    orders: OrderReq[]
}

export type GroupOrderChangeStatusReq = {
    orderId: string
    status: string
}