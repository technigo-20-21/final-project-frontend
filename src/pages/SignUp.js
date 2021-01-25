import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components/macro";

import { manageUserFetch } from "../reducers/userFetch";

export const SignUp = () => {
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const dispatch = useDispatch();
  const endpoint = "users";

  const createUser = (user) => {
    console.log("In createUser function!");
    dispatch(manageUserFetch(user, endpoint));
  };

  const handleSubmit = (event) => {
    console.log("In signup handleSubmit function!");
    console.log({ user });
    event.preventDefault();
    createUser(user);
    setUser({ name: "", email: "", password: "" });
  };

  return (
    <SignUpForm onSubmit={handleSubmit}>
      <label>
        <UserInput
          type="text"
          required
          placeholder="Namn"
          value={user.name}
          onChange={(event) => setUser({ ...user, name: event.target.value })}
        ></UserInput>
      </label>
      <label>
        <UserInput
          type="email"
          required
          placeholder="E-post"
          value={user.email}
          onChange={(event) => setUser({ ...user, email: event.target.value })}
        ></UserInput>
      </label>
      <label>
        <UserInput
          type="password"
          required
          placeholder="Lösenord"
          value={user.password}
          onChange={(event) =>
            setUser({ ...user, password: event.target.value })
          }
        ></UserInput>
      </label>
      <Button type="submit">Skapa konto</Button>
    </SignUpForm>
  );
};

const SignUpForm = styled.form`
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const UserInput = styled.input`
  margin: 5px;
  padding: 5px;
  width: 250px;
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  color: #697181;
`;

const Button = styled.button`
  margin: 10px;
  background: #29354b;
  padding: 5px 15px 7px 15px;
  border-radius: 20px;
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  color: #fff;
  outline: none;
`;
