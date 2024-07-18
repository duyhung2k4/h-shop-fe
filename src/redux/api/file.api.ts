import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "../query/baseQuery";
import { QueryReturnType } from "@/dto/request/base.request";
import { endPoint } from "../query/endpoint";
import { ImageProductResponse } from "@/dto/response/product.response";
import { ImageProductModel } from "@/model/imageProduct";


export const fileApi = createApi({
    reducerPath: "fileApi",
    baseQuery: axiosBaseQuery(),
    endpoints: (builder) => ({
        getImagesByProductId: builder.query<QueryReturnType<ImageProductResponse>, string>({
            query: (payload) => ({
                ...endPoint.file.getImagesByProductId(),
                params: {
                    "id": payload,
                }
            }),
        }),
        getAvatarByProductId: builder.query<QueryReturnType<ImageProductModel>, string>({
            query: (payload) => ({
                ...endPoint.file.getAvatarByProductId(),
                params: {
                    "id": payload,
                }
            }),
        }), 
    })
})

export const {
    useGetImagesByProductIdQuery,
    useGetAvatarByProductIdQuery,
} = fileApi;