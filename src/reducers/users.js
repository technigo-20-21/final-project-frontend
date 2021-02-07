import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    accessToken: localStorage.accessToken || null,
    firstName: localStorage.firstName || null,
    lastName: localStorage.lastName || "",
    email: localStorage.email || "",
  },
  statusMessage: "",
};



export const users = createSlice({
  name: "users",
  initialState,
  reducers: {
    logIn: (state, action) => {
      const { accessToken, firstName, lastName, email } = action.payload;
      state.user.accessToken = accessToken;
      state.user.firstName = firstName;      
      state.user.lastName = lastName;      
      state.user.email = email;
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("firstName", firstName);
      localStorage.setItem("lastName", lastName);
      localStorage.setItem("email", email);
    },
    logOut: (state, action) => {
      state.user.accessToken = null;
      state.user.firstName = "";
      state.user.lastName = "";
      state.user.email = "";
      localStorage.removeItem("accessToken");
      localStorage.removeItem("firstName");
      localStorage.removeItem("lastName");
      localStorage.removeItem("email");
    },
    update: (state, action) => {
      const { firstName, lastName, email } = action.payload;
      state.user.firstName = firstName;
      state.user.lastName = lastName;
      state.user.email = email;
      console.log("E: " + email)
      localStorage.setItem("firstName", firstName);
      localStorage.setItem("lastName", lastName);
      localStorage.setItem("email", email);
    },
    setStatusMessage: (state, action) => {
      state.statusMessage = action.payload.statusMessage;
    },
  },
});
