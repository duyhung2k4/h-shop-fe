import { combineReducers } from "@reduxjs/toolkit";

import { authApi } from "./api/auth.api";
import { shopApi } from "./api/shop.api";
import { typeProductApi } from "./api/typeProduct.api";
import { productApi } from "./api/product.api";
import { fileApi } from "./api/file.api";

import authSlice from "./slice/authSlice";
import typeProductSlice from "./slice/typeProductSlice";
import orderSlice from "./slice/orderSlice";
import { orderApi } from "./api/order.api";

export const rootReducer = combineReducers({
  [authApi.reducerPath]: authApi.reducer,
  [shopApi.reducerPath]: shopApi.reducer,
  [typeProductApi.reducerPath]: typeProductApi.reducer,
  [productApi.reducerPath]: productApi.reducer, 
  [fileApi.reducerPath]: fileApi.reducer,
  [orderApi.reducerPath]: orderApi.reducer,
  authSlice: authSlice.reducer,
  typeProductSlice: typeProductSlice.reducer,
  orderSlice: orderSlice.reducer,
})