import { combineReducers } from "@reduxjs/toolkit";

import { authApi } from "./api/auth.api";
import { shopApi } from "./api/shop.api";

import authSlice from "./slice/authSlice";

export const rootReducer = combineReducers({
  [authApi.reducerPath]: authApi.reducer,
  [shopApi.reducerPath]: shopApi.reducer,
  authSlice: authSlice.reducer,
})