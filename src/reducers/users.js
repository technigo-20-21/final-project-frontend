import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    accessToken: "",
    firstname: "",
    lastname: "",
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
      state.user.firstname = action.payload.firstname;
      state.user.lastname = action.payload.lastname;
      state.isLoggedIn = true;
    },
    logOut: (state, action) => {
      state.user.accessToken = "";
      state.user.firstname = "";
      state.user.lastname = "";
      state.isLoggedIn = false;
    },
    setErrorMessage: (state, action) => {
      state.setErrorMessage = action.payload;
    },
  },
});
