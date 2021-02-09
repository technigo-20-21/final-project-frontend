import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    id: localStorage.id || null,
    accessToken: localStorage.accessToken || null,
    firstName: localStorage.firstName || null,
    lastName: localStorage.lastName || null,
    email: localStorage.email || null,
  },
  statusMessage: null,
};

export const users = createSlice({
  name: "users",
  initialState,
  reducers: {
    logIn: (state, action) => {
      const { id, accessToken, firstName, lastName, email } = action.payload;
      state.user.id = id;
      state.user.accessToken = accessToken;
      state.user.firstName = firstName;
      state.user.lastName = lastName;
      state.user.email = email;
      localStorage.setItem("id", id);
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("firstName", firstName);
      localStorage.setItem("lastName", lastName);
      localStorage.setItem("email", email);
    },
    logOut: (state, action) => {
      state.user.id = null;
      state.user.accessToken = null;
      state.user.firstName = null;
      state.user.lastName = null;
      state.user.email = null;
      localStorage.clear();
    },
    update: (state, action) => {
      const { firstName, lastName, email } = action.payload;
      state.user.firstName = firstName;
      state.user.lastName = lastName;
      state.user.email = email;
      localStorage.setItem("firstName", firstName);
      localStorage.setItem("lastName", lastName);
      localStorage.setItem("email", email);
    },
    setStatusMessage: (state, action) => {
      state.statusMessage = action.payload.statusMessage;
    },
  },
});
