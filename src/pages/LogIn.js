import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { logInFetch } from "../reducers/userFetch";
import {
  LogInForm,
  UserInput,
  Button,
  SignUp,
  StyledLink,
} from "../library/user_ui/LoginStyles";

export const LogIn = () => {
  const accessToken = useSelector((store) => store.users.user.accessToken);
  const errorMessage = useSelector((store) => store.users.errorMessage);
  const [user, setUser] = useState({ email: "", password: "" });
  const dispatch = useDispatch();
  const history = useHistory();

  if (accessToken) {
    history.push("/");
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(logInFetch(user));
    setUser({ email: "", password: "" });
  };

  return (
    <LogInForm onSubmit={handleSubmit}>
      <label>
        <UserInput
          variant="outlined"
          type="email"
          required
          placeholder="Email"
          value={user.email.toLowerCase()}
          onChange={(event) => setUser({ ...user, email: event.target.value })}
        ></UserInput>
      </label>
      <label>
        <UserInput
          type="password"
          required
          placeholder="Password"
          value={user.password}
          onChange={(event) =>
            setUser({ ...user, password: event.target.value })
          }
        ></UserInput>
      </label>
      {errorMessage && <p>{errorMessage}</p>}
      <Button type="submit">Log in</Button>
      <SignUp>
        Saknar du ett konto?{" "}
        <StyledLink to="/SignUp">
          <strong>Skapa konto här.</strong>
        </StyledLink>
      </SignUp>
    </LogInForm>
  );
};
