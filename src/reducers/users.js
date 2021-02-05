import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    accessToken: localStorage.accessToken || null,
    firstName: "",
    lastName: "",
    email: "",
  },
  statusMessage: "",
};

export const users = createSlice({
  name: "users",
  initialState,
  reducers: {
    logIn: (state, action) => {
      const { accessToken, userId, firstName, lastName, email } = action.payload;
      state.user.accessToken = accessToken;
      localStorage.setItem("accessToken", accessToken);
      state.user.firstName = firstName;
      state.user.lastName = lastName;
      state.user.email = email;
    },
    logOut: (state, action) => {
      state.user.accessToken = null;
      state.user.firstName = "";
      state.user.lastName = "";
      localStorage.removeItem("accessToken");
    },
    setStatusMessage: (state, action) => {
      state.statusMessage = action.payload.statusMessage;
    },
  },
});
