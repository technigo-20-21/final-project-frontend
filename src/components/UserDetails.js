import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components/macro";

import { users } from "../reducers/users";
import { updateUserFetch } from "../reducers/userFetch";

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
    // password: user.password,
  });
  const [userMessage, setUserMessage] = useState(null);

  const handleOnChange = () => {
    setEditUser(true);
  };

  const handleOnSave = (event) => {
    event.preventDefault();
    if (editedUser.firstName.length < 2) {
      setUserMessage("Förnamn måste vara minst två tecken långt.");
    } else if (editedUser.lastName.length < 2) {
      setUserMessage("Efternamn måste vara minst två tecken långt.");
    } else {
      dispatch(updateUserFetch(editedUser));
      setEditUser(false);
      setUserMessage(null);
    }

    // else if (editedUser.password.length < 6) {
    //   console.log("Lösenordet måste vara minst sex tecken långt.");
    // }
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
        <Container>
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
        </Container>

        <Container>
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
        </Container>

        <Container>
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
        </Container>

        {editUser ? (
          <>
            {/* <Container>
              <LabelHeader>Lösenord: </LabelHeader>
              <label>
                <UserInput
                  value={editedUser.password}
                  onChange={(event) =>
                    setEditedUser({
                      ...editedUser,
                      password: event.target.value,
                    })
                  }
                  type="password"
                  required
                ></UserInput>
              </label>
            </Container> */}
            {userMessage ? <p>{userMessage}</p> : null}
            <Container>
              <Button>Spara</Button>
              <Button onClick={handleOnCancel}>Avbryt</Button>
              <Button onClick={handleOnLogOut}>Logga ut</Button>
            </Container>
          </>
        ) : (
          <Container>
            <Button onClick={handleOnChange}>Redigera profil</Button>
            <Button onClick={handleOnLogOut}>Logga ut</Button>
          </Container>
        )}
      </LogInForm>
    </UserDetailsContainer>
  );
};

const UserDetailsContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const LogInForm = styled.form`
//   padding: 30px;
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const LabelHeader = styled.h3`
  width: 120px;
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
  cursor: pointer;
  margin: 20px 20px 20px 0;
  background: #29354b;
  padding: 5px 35px 7px 35px;
  border-radius: 25px;
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  color: #fff;
  outline: none;
`;
