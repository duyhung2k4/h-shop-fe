import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "../query/baseQuery";
import { endPoint } from "../query/endpoint";
import { QueryReturnType } from "@/dto/request/base.request";
import { AuthResponse } from "@/dto/response/auth.response";
import { LoginGoogleRequest } from "@/dto/request/auth.request";
import { ROLE_APP } from "@/model/variable";
import { ProfileModel } from "@/model/profile";

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: axiosBaseQuery(),
    endpoints: (builder) => ({
        loginGoogle: builder.mutation<QueryReturnType<AuthResponse>, LoginGoogleRequest>({
            query: (payload) => ({
                ...endPoint.auth.loginGoogle(),
                data: {
                    ...payload,
                    role: ROLE_APP,
                },
            }),
        }),
        refreshToken: builder.mutation<QueryReturnType<AuthResponse>, null>({
            query: (payload) => ({
                ...endPoint.auth.refreshToken(),
                data: payload,
            }),
        }),
        getProfile: builder.query<QueryReturnType<ProfileModel>, number>({
            query: (payload) => ({
                ...endPoint.auth.getProfile(),
                params: { id: payload }
            }),
        }),
        updateProfile: builder.mutation<QueryReturnType<ProfileModel>, ProfileModel>({
            query: (payload) => ({
                ...endPoint.auth.updateProfile(),
                data: payload,
            }),
        })
    })
});

export const {
    useLoginGoogleMutation,
    useRefreshTokenMutation,
    useGetProfileQuery,
    useUpdateProfileMutation,
} = authApi;