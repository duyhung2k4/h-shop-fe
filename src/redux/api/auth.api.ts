import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "../query/baseQuery";
import { endPoint } from "../query/endpoint";
import { QueryReturnType } from "@/dto/request/base.request";
import { AuthResponse } from "@/dto/response/auth.response";
import { LoginGoogleRequest } from "@/dto/request/auth.request";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: axiosBaseQuery(),
  endpoints: (builder) => ({
    loginGoogle: builder.mutation<QueryReturnType<AuthResponse>, LoginGoogleRequest>({
      query: (payload) => ({
        ...endPoint.auth.loginGoogle(),
        data: payload,
      }),
    }),
    refreshToken: builder.mutation<QueryReturnType<AuthResponse>, null>({
      query: (payload) => ({
        ...endPoint.auth.refreshToken(),
        data: payload,
      }),
    })
  })
});

export const {
  useLoginGoogleMutation,
} = authApi;