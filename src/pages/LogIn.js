import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import styled from "styled-components/macro";

import { logInFetch } from "../reducers/userFetch";

export const LogIn = () => {
  const accessToken = useSelector((store) => store.users.user.accessToken);
  const statusMessage = useSelector((store) => store.users.statusMessage);
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
          value={user.email}
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
      {statusMessage ? <p>{statusMessage}</p> : null}
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

const LogInForm = styled.form`
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const UserInput = styled.input`
  margin: 5px;
  padding: 10px;
  width: 250px;
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  color: #697181;
`;

const Button = styled.button`
  margin: 10px;
  background: #29354b;
  padding: 5px 35px 7px 35px;
  border-radius: 25px;
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  color: #fff;
  outline: none;
`;

const SignUp = styled.p`
  color: #29354b;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #29354b;
`;
