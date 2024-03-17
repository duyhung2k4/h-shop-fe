import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./reducer";
import { authApi } from "./api/auth.api";
import { shopApi } from "./api/shop.api";

const middleware = [
  authApi.middleware,
  shopApi.middleware,
]

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware),
})

export default store;

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch