import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { users } from "../reducers/users";
import { updateUserFetch } from "../reducers/userFetch";
import {
  UserDetailsContainer,
  LogInForm,
  DetailsContainer,
  LabelHeader,
  UserInput,
  UserButton,
} from "../library/UserDetailsStyles";

export const UserDetails = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.users.user);
  const [editUser, setEditUser] = useState(false);
  const [editedUser, setEditedUser] = useState({
    id: user.id,
    accessToken: user.accessToken,
    email: user.email,
    firstName: user.firstName,
    lastName: user.lastName,
  });
  const [userMessage, setUserMessage] = useState(null);

  const handleOnChange = () => {
    setEditUser(true);
  };

  const handleOnSave = (event) => {
    event.preventDefault();
    if (editedUser.firstName.length < 2) {
      setUserMessage("Förnamn måste vara minst två tecken långt.");
    } else if (editedUser.firstName.length > 20) {
      setUserMessage("Förnamn kan vara max 20 tecken långt.");
    } else if (editedUser.lastName.length < 2) {
      setUserMessage("Efternamn måste vara minst två tecken långt.");
    } else if (editedUser.lastName.length > 20) {
      setUserMessage("Efternamn kan vara max 20 tecken långt.");
    } else {
      dispatch(updateUserFetch(editedUser));
      setEditUser(false);
      setUserMessage(null);
    }
  };

  const handleOnCancel = () => {
    setEditUser(false);
    setUserMessage(null);
  };

  const handleOnLogOut = () => {
    dispatch(users.actions.logOut());
  };

  return (
    <UserDetailsContainer>
      <h2>{editUser ? "Redigera profil" : "Min profil"}</h2>
      <LogInForm onSubmit={handleOnSave}>
        <DetailsContainer>
          <LabelHeader>E-post: </LabelHeader>
          {editUser ? (
            <label>
              <UserInput
                value={editedUser.email}
                onChange={(event) =>
                  setEditedUser({ ...editedUser, email: event.target.value })
                }
                type="email"
                required
              ></UserInput>
            </label>
          ) : (
            user.email
          )}
        </DetailsContainer>

        <DetailsContainer>
          <LabelHeader>Förnamn: </LabelHeader>
          {editUser ? (
            <label>
              <UserInput
                value={editedUser.firstName}
                onChange={(event) =>
                  setEditedUser({
                    ...editedUser,
                    firstName: event.target.value,
                  })
                }
                type="text"
                required
              ></UserInput>
            </label>
          ) : (
            user.firstName
          )}
        </DetailsContainer>

        <DetailsContainer>
          <LabelHeader>Efternamn: </LabelHeader>
          {editUser ? (
            <label>
              <UserInput
                value={editedUser.lastName}
                onChange={(event) =>
                  setEditedUser({ ...editedUser, lastName: event.target.value })
                }
                type="text"
                required
              ></UserInput>
            </label>
          ) : (
            user.lastName
          )}
        </DetailsContainer>

        {editUser ? (
          <>
            {userMessage ? <p>{userMessage}</p> : null}
            <DetailsContainer>
              <UserButton>Spara</UserButton>
              <UserButton onClick={handleOnCancel}>Avbryt</UserButton>
              <UserButton onClick={handleOnLogOut}>Logga ut</UserButton>
            </DetailsContainer>
          </>
        ) : (
          <DetailsContainer>
            <UserButton onClick={handleOnChange}>Redigera profil</UserButton>
            <UserButton onClick={handleOnLogOut}>Logga ut</UserButton>
          </DetailsContainer>
        )}
      </LogInForm>
    </UserDetailsContainer>
  );
};
