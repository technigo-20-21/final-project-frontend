import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  user: {
    id: localStorage.id || null,
    accessToken: localStorage.accessToken || null,
    firstName: localStorage.firstName || null,
    lastName: localStorage.lastName || null,
    email: localStorage.email || null,
  },
  favourites: localStorage.favourites
    ? JSON.parse(localStorage.favourites)
    : [],
  statusMessage: null,
  errorMessage: null,
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
      state.favourites = favourites;
      localStorage.setItem("id", id);
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("firstName", firstName);
      localStorage.setItem("lastName", lastName);
      localStorage.setItem("email", email);
      localStorage.setItem("favourites", JSON.stringify(favourites));
    },
    logOut: (state, action) => {
      state.user.id = null;
      state.user.accessToken = null;
      state.user.firstName = null;
      state.user.lastName = null;
      state.user.email = null;
      state.favourites = null;
      state.statusMessage = null;
      state.errorMessage = null;
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
      const isFavourite = state.favourites.includes(id);

      if (isFavourite) {
        const removeFavourite = state.favourites.filter((item) => item !== id);
        state.favourites = removeFavourite;
        localStorage.setItem("favourites", JSON.stringify(removeFavourite));
      } else {
        const addFavourite = [...state.favourites, id];
        state.favourites = addFavourite;
        localStorage.setItem("favourites", JSON.stringify(addFavourite));
      }
    },
    setStatusMessage: (state, action) => {
      state.statusMessage = action.payload.statusMessage;
    },
    setErrorMessage: (state, action) => {
      state.errorMessage = action.payload.errorMessage;
    },
  },
});
