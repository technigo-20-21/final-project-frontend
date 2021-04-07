import React, { Suspense, lazy } from "react";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from "react-query/devtools";

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
import { LottieLoader } from "library/global_ui/LottieLoader";

const reducer = combineReducers({
  users: users.reducer,
  locals: locals.reducer,
});

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

const queryclient = new QueryClient()

const CategoryThumb = lazy(() => import("./components/category_list/LocalsListThumb.js"))
const Map = lazy(() => import("./components/single_local/Map.js"))
const Login = lazy(() => import("./pages/LogIn"))

export const App = () => {
  return (
    <QueryClientProvider client={queryclient}>
      <Provider store={store}>
        <BrowserRouter>
          <Suspense fallback={<LottieLoader />}>
          <Header />
          <main>
            <Switch>
              <Route path="/" exact>
                <LandingPage />
              </Route>
              <Route path="/locals/:category" exact>
                <LocalsListPage component={CategoryThumb}/>
              </Route>
              <Route path="/local/:id" exact >
                <LocalPage component={Map}/>
              </Route>
              <Route path="/login" exact >
                <LogIn component={LogIn}/>
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
          </Suspense>
        </BrowserRouter>
        <ReactQueryDevtools initialIsOpen/>
      </Provider>
    </QueryClientProvider>
  );
};
