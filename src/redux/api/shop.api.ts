import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "../query/baseQuery";
import { endPoint } from "../query/endpoint";
import { QueryReturnType } from "@/dto/request/base.request";
import { ShopModel } from "@/model/shop";
import { ShopCheckDuplicateParams, ShopRequest } from "@/dto/request/shop";

export const shopApi = createApi({
    reducerPath: "shopApi",
    baseQuery: axiosBaseQuery(),
    endpoints: (builder) => ({
        createShop: builder.mutation<QueryReturnType<ShopModel>, ShopRequest>({
            query: (payload) => ({
                ...endPoint.shop.createShop(),
                data: payload,
            }),
        }),
        checkDuplicate: builder.query<QueryReturnType<boolean>, ShopCheckDuplicateParams>({
            query: (payload) => ({
                ...endPoint.shop.checkDuplicate(),
                params: payload,
            }),
        })
    })
});

export const {
    useCreateShopMutation,
    useCheckDuplicateQuery,
} = shopApi;