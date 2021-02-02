import { createSlice } from "@reduxjs/toolkit";

const initialUserState = {
  user: {
    accessToken: localStorage.accessToken || null,
    userId: 0,
    firstName: "",
    lastName: "",
  },
  statusMessage: "",
};

export const users = createSlice({
  name: "users",
  initialUserState,
  reducers: {
    logIn: (state, action) => {
      const { accessToken, userId, firstName, lastName } = action.payload;
      state.user.accessToken = accessToken;
      localStorage.setItem("accessToken", accessToken);
      state.user.userId = userId;
      state.user.firstName = firstName;
      state.user.lastName = lastName;
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
