import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "../query/baseQuery";
import { endPoint } from "../query/endpoint";
import { QueryReturnType } from "@/dto/request/base.request";

export const shopApi = createApi({
  reducerPath: "shopApi",
  baseQuery: axiosBaseQuery(),
  endpoints: (builder) => ({
    createShop: builder.mutation<QueryReturnType<any>, any>({
      query: (payload) => ({
        ...endPoint.shop.createShop(),
        data: payload,
      }),
    }),
  })
});

export const {
    useCreateShopMutation
} = shopApi;