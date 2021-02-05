import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components/macro";

import { users } from "../reducers/users";

export const UserDetails = () => {
  const user = useSelector((store) => store.users.user);
  const [editUser, setEditUser] = useState({ user });
  const dispatch = useDispatch();
  const history = useHistory();

  console.log({ user });
  console.log({ editUser });

  if (!user.accessToken) {
    history.push("/");
  }

  const handleOnChange = () => {
    console.log(`Redigera användarprofil för ${user.firstName}`);
  };

  const handleOnLogOut = () => {
    dispatch(users.actions.logOut());
  };

  const handleOnSave = () => {

  }

  return (
    <>
      <h2>Min profil</h2>
      <h3>E-post: {user.email}</h3>
      <h3>Förnamn: {user.firstName}</h3>
      <h3>Efternamn: {user.lastName}</h3>
      <button onClick={handleOnChange}>Redigera profil</button>

      <Button onClick={handleOnLogOut}>Log out</Button>

      <label>
        E-post
        <input
          value={editUser.email}
          onChange={(event) => setEditUser({ ...editUser, email: event.target.value })}
          type="email"
          required
        ></input>
      </label>
      <label>
        Förnamn
        <input
          value={editUser.firstName}
          onChange={(event) => setEditUser({ ...editUser, firstName: event.target.value })}
          type="text"
          required
        ></input>
      </label>
      <label>
        Efternamn
        <input
          value={editUser.lastName}
          onChange={(event) => setEditUser({ ...editUser, lastName: event.target.value })}
          type="text"
          required
        ></input>
      </label>
      <button onClick={handleOnSave}>Spara</button>
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
