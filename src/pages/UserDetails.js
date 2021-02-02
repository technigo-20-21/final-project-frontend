import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components/macro";

import { users } from "../reducers/users";

export const UserDetails = () => {
  const user = useSelector((store) => store.users.user);
  const dispatch = useDispatch();
  const history = useHistory();

  if (!user.accessToken) {
    history.push("/");
  }

  const handleOnClick = () => {
    dispatch(users.actions.logOut());
  };

  return (
    <>
      <p>This is the user details page.</p>
      <p>Hello {user.firstName}!</p>
      <Button onClick={handleOnClick}>Log out</Button>
    </>
  );
};

const Button = styled.button`
  cursor: pointer;
  margin: 10px;
  background: #29354b;
  padding: 5px 35px 7px 35px;
  border-radius: 25px;
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  color: #fff;
  outline: none;
`;
