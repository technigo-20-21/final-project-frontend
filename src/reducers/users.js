import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    id: localStorage.id || null,
    accessToken: localStorage.accessToken || null,
    firstName: localStorage.firstName || null,
    lastName: localStorage.lastName || null,
    email: localStorage.email || null,
    // favourites: localStorage.favourites || null,
    favourites: null,
  },
  statusMessage: null,
};

export const users = createSlice({
  name: "users",
  initialState,
  reducers: {
    logIn: (state, action) => {
      const {
        id,
        accessToken,
        firstName,
        lastName,
        email,
        favourites,
      } = action.payload;
      state.user.id = id;
      state.user.accessToken = accessToken;
      state.user.firstName = firstName;
      state.user.lastName = lastName;
      state.user.email = email;
      state.user.favourites = favourites;
      localStorage.setItem("id", id);
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("firstName", firstName);
      localStorage.setItem("lastName", lastName);
      localStorage.setItem("email", email);
      // localStorage.setItem("favourites", favourites);
    },
    logOut: (state, action) => {
      state.user.id = null;
      state.user.accessToken = null;
      state.user.firstName = null;
      state.user.lastName = null;
      state.user.email = null;
      state.user.favourites = null;
      localStorage.clear();
    },
    updateUser: (state, action) => {
      const { firstName, lastName, email } = action.payload;
      state.user.firstName = firstName;
      state.user.lastName = lastName;
      state.user.email = email;
      localStorage.setItem("firstName", firstName);
      localStorage.setItem("lastName", lastName);
      localStorage.setItem("email", email);
    },
    updateFavourites: (state, action) => {
      const id = action.payload;
      var isFavourite = state.user.favourites.includes(id);
      if (isFavourite) {
        console.log("YES, remove")
        const filteredList = state.user.favourites.filter(
          (item) => item !== id
        );
        state.user.favourites = filteredList;
        // localStorage.setItem("favourites", filteredList);
      } else {
        console.log("NO, add")
        const favouritesArray = [...state.user.favourites, id];
        state.user.favourites = favouritesArray;
        // localStorage.setItem("favourites", favouritesArray);
      }
    },
    setStatusMessage: (state, action) => {
      state.statusMessage = action.payload.statusMessage;
    },
  },
});
