import { ProfileModel } from "@/model/profile";
import { createSlice } from "@reduxjs/toolkit";
import { authApi } from "../api/auth.api";

interface AuthState {
  profile?: ProfileModel
}

const initialState: AuthState = {

}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(authApi.endpoints.loginGoogle.matchFulfilled, ( state, { payload } ) => {
      state.profile = payload.data?.profile;
    }),
    builder.addMatcher(authApi.endpoints.loginGoogle.matchRejected, ( state, { payload }) => {
      state.profile = undefined;
    })
  }
})

export default authSlice;