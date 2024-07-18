import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "../query/baseQuery";
import { QueryReturnType } from "@/dto/request/base.request";
import { endPoint } from "../query/endpoint";
import { CreateProductRequest, UpdateProductRequest } from "@/dto/request/product";
import { ProductModel } from "@/model/product";
import { TypeInWarehouseRes } from "@/dto/response/typeInWarehouse.response";
import { WarehouseRes } from "@/dto/response/warehouse.response";

export const productApi = createApi({
    reducerPath: "productApi",
    baseQuery: axiosBaseQuery(),
    endpoints: (builder) => ({
        createProduct: builder.mutation<QueryReturnType<ProductModel>, CreateProductRequest>({
            query: (payload) => ({
                ...endPoint.product.createProduct(),
                data: payload,
            }),
        }),
        updateProduct: builder.mutation<QueryReturnType<ProductModel>, UpdateProductRequest>({
            query: (payload) => ({
                ...endPoint.product.update(),
                data: payload,
            }),
        }),
        getAllProduct: builder.query<QueryReturnType<ProductModel[]>, null>({
            query: () => ({
                ...endPoint.product.getAppProduct(),
            }),
        }),
        getDetailProduct: builder.query<QueryReturnType<ProductModel>, string>({
            query: (payload) => ({
                ...endPoint.product.getDetailProduct(),
                params: { id: payload }
            })
        }),

        search: builder.query<QueryReturnType<any>, Record<string, string>>({
            query: (payload) => ({
                ...endPoint.product.searh(),
                params: payload,
            })
        }),

        getTypeInWarehouse: builder.query<QueryReturnType<TypeInWarehouseRes[]>, string>({
            query: (payload) => ({
                ...endPoint.product.getTypeInWarehouse(),
                params: { id: payload },
            })
        }),

        getWarehouse: builder.query<QueryReturnType<WarehouseRes>, string>({
            query: (payload) => ({
                ...endPoint.product.getWarehouse(),
                params: { id: payload },
            })
        }),

        heart: builder.mutation<QueryReturnType<null>, string>({
            query: (payload) => ({
                ...endPoint.product.heart(),
                data: { productId: payload },
            })
        }),
        cart: builder.mutation<QueryReturnType<null>, string>({
            query: (payload) => ({
                ...endPoint.product.cart(),
                data: { productId: payload },
            })
        }),

        isHeart: builder.query<QueryReturnType<boolean>, string>({
            query: (payload) => ({
                ...endPoint.product.isHeart(),
                params: { id: payload },
            })
        }),
        isCart: builder.query<QueryReturnType<boolean>, string>({
            query: (payload) => ({
                ...endPoint.product.isCart(),
                params: { id: payload },
            })
        }),

        getHeart: builder.query<QueryReturnType<ProductModel[]>, null>({
            query: () => ({
                ...endPoint.product.getHeart(),
            })
        }),
        getCart: builder.query<QueryReturnType<ProductModel[]>, null>({
            query: () => ({
                ...endPoint.product.getCart(),
            })
        }),
    })
});

export const {
    useCreateProductMutation,
    useUpdateProductMutation,
    useGetAllProductQuery,
    useGetDetailProductQuery,

    useHeartMutation,
    useIsHeartQuery,
    useCartMutation,
    useIsCartQuery,
    useGetHeartQuery,
    useGetCartQuery,

    useSearchQuery,

    useGetTypeInWarehouseQuery,
    useGetWarehouseQuery,
} = productApi;