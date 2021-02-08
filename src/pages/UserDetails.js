import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components/macro";

import { users } from "../reducers/users";
import { updateFetch } from "../reducers/userFetch";

export const UserDetails = () => {
  const user = useSelector((store) => store.users.user);

  const [editUser, setEditUser] = useState(false);
  const [editedUser, setEditedUser] = useState({
    accessToken: user.accessToken,
    email: user.email,
    firstName: user.firstName,
    lastName: user.lastName,
  });
  const dispatch = useDispatch();
  const history = useHistory();

  if (!user.accessToken) {
    history.push("/");
  }

  const handleOnChange = () => {
    console.log(`Redigera användarprofil för ${user.firstName}`);
    setEditUser(true);
  };

  const handleOnLogOut = () => {
    dispatch(users.actions.logOut());
  };

  const handleOnSave = () => {
    if (editedUser.firstName.length < 2) {
      console.log("Förnamn måste vara minst två tecken långt.");
    } else if (editedUser.lastName.length < 2) {
      console.log("Efternamn måste vara minst två tecken långt.");
    } else {
      dispatch(users.actions.update(editedUser));
      setEditedUser({ email: "", firstName: "", lastName: "" });
      setEditUser(false);
    }
  };

  const handleOnCancel = () => {
    setEditUser(false);
  };

  return (
    <>
      <h2>Min profil</h2>
      <form>
        <h3>
          E-post:{" "}
          {editUser ? (
            <label>
              <input
                value={editedUser.email}
                onChange={(event) =>
                  setEditedUser({ ...editedUser, email: event.target.value })
                }
                type="email"
                required
              ></input>
            </label>
          ) : (
            user.email
          )}
        </h3>

        <h3>
          Förnamn:{" "}
          {editUser ? (
            <label>
              <input
                value={editedUser.firstName}
                onChange={(event) =>
                  setEditedUser({
                    ...editedUser,
                    firstName: event.target.value,
                  })
                }
                type="text"
                required
              ></input>
            </label>
          ) : (
            user.firstName
          )}
        </h3>

        <h3>
          Efternamn:{" "}
          {editUser ? (
            <label>
              <input
                value={editedUser.lastName}
                onChange={(event) =>
                  setEditedUser({ ...editedUser, lastName: event.target.value })
                }
                type="text"
                required
              ></input>
            </label>
          ) : (
            user.lastName
          )}
        </h3>

        {editUser ? (
          <>
            <Button onClick={handleOnSave}>Spara</Button>
            <Button onClick={handleOnCancel}>Avbryt</Button>
          </>
        ) : (
          <Button onClick={handleOnChange}>Redigera profil</Button>
        )}
      </form>
      <Button onClick={handleOnLogOut}>Log out</Button>
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
