import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "../query/baseQuery";
import { QueryReturnType } from "@/dto/request/base.request";
import { endPoint } from "../query/endpoint";
import { GroupOrderChangeStatusReq, GroupOrderReq } from "@/dto/request/order";
import { GroupOrderRes } from "@/dto/response/order.response";
import { GroupOrderModel } from "@/model/groupOrder";

export const orderApi = createApi({
    reducerPath: "order",
    baseQuery: axiosBaseQuery(),
    endpoints: (builder) => ({
        order: builder.mutation<QueryReturnType<GroupOrderRes>, GroupOrderReq>({
            query: (payload) => ({
                ...endPoint.order.order(),
                data: payload,
            }),
        }),

        changeStatus: builder.mutation<QueryReturnType<null>, GroupOrderChangeStatusReq>({
            query: (payload) => ({
                ...endPoint.order.changeStatus(),
                data: payload,
            }),
        }),

        getPurchaseOrder: builder.query<QueryReturnType<GroupOrderModel[]>, null>({
            query: () => ({
                ...endPoint.order.getPurchaseOrder(),
            }),
        }),
    })
})

export const {
    useOrderMutation,
    useChangeStatusMutation,
    useGetPurchaseOrderQuery,
} = orderApi;