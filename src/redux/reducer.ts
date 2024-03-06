import { authApi } from "./api/auth.api";
import { combineReducers } from "@reduxjs/toolkit";

export const rootReducer = combineReducers({
  [authApi.reducerPath]: authApi.reducer,
})