import React from "react";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import { users } from "./reducers/users";
import { locals } from "./reducers/locals";
import { Main } from "./components/Main";
import { Header } from "./components/Header"
import { LandingPage } from "./pages/LandingPage"
import { LogIn } from "./pages/LogIn"
import { SignUp } from "./pages/SignUp"
import { UserDetails } from "./pages/UserDetails"
import { NotFound } from "./pages/NotFound"
import { Footer } from "./components/Footer"

const reducer = combineReducers({
  users: users.reducer,
  locals: locals.reducer
});

const store = configureStore({ reducer });

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
            <Route path="/login" exact>
              <LogIn />
            </Route>
            <Route path="/signup" exact>
              <SignUp />
            </Route>
            <Route path="/userdetails" exact>
              <UserDetails />
            </Route>
            <Route path="/404" exact>
              <NotFound />
            </Route>
            <Redirect to="/404" />            
          </Switch>
        </main>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
};
