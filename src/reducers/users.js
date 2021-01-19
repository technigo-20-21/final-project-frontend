import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    accessToken: "",
    name: "",
  },
  isLoggedIn: false,
  errorMessage: "",
};

export const users = createSlice({
  name: "users",
  initialState,
  reducers: {
    logIn: (state, action) => {
      state.user.accessToken = action.payload.accessToken;
      state.user.name = action.payload.name;
      state.isLoggedIn = true;
    },
    logOut: (state, action) => {
      state.user.accessToken = "";
      state.user.name = "";
      state.isLoggedIn = false;
    },
    setErrorMessage: (state, action) => {
      state.setErrorMessage = action.payload;
    },
  },
});
