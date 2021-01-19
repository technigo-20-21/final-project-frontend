import React from "react";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import { users } from "./reducers/users";
import { Main } from "./components/Main"


const reducer = combineReducers({
  users: users.reducer,
});

const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
};
