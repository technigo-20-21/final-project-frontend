import React from "react";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import { users } from "./reducers/users";
import { locals } from "./reducers/locals";
import { Header } from "./components/Header";
import { LandingPage } from "./pages/LandingPage";
import { LocalsListPage } from "./pages/LocalsListPage";
import { LocalPage } from "./pages/LocalPage";
import { LogIn } from "./pages/LogIn";
import { SignUp } from "./pages/SignUp";
import { UserPage } from "./pages/UserPage";
import { Footer } from "./components/Footer";

const reducer = combineReducers({
  users: users.reducer,
  locals: locals.reducer,
});

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <main>
          <Switch>
            <Route path="/" exact>
              <LandingPage />
            </Route>
            <Route path="/locals/:category" exact>
              <LocalsListPage />
            </Route>
            <Route path="/local/:id">
              <LocalPage />
            </Route>
            <Route path="/login" exact>
              <LogIn />
            </Route>
            <Route path="/signup" exact>
              <SignUp />
            </Route>
            <Route path="/userpage" exact>
              <UserPage />
            </Route>
            <Redirect to="/" />
          </Switch>
        </main>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
};
