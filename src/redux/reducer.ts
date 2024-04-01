import { combineReducers } from "@reduxjs/toolkit";

import { authApi } from "./api/auth.api";
import { shopApi } from "./api/shop.api";

import authSlice from "./slice/authSlice";
import { typeProductApi } from "./api/typeProduct.api";

export const rootReducer = combineReducers({
  [authApi.reducerPath]: authApi.reducer,
  [shopApi.reducerPath]: shopApi.reducer,
  [typeProductApi.reducerPath]: typeProductApi.reducer,
  authSlice: authSlice.reducer,
})