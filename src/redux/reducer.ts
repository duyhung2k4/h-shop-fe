import { authApi } from "./api/auth.api";
import { combineReducers } from "@reduxjs/toolkit";
import authSlice from "./slice/authSlice";

export const rootReducer = combineReducers({
  [authApi.reducerPath]: authApi.reducer,
  authSlice: authSlice.reducer,
})