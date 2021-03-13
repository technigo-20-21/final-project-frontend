import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { users } from "../reducers/users";
import { signUpFetch } from "../reducers/userFetch";
import {
  SignUpForm,
  UserInput,
  Button,
  AccoutCreatedText,
} from "../library/user_ui/SignUpStyles";

export const SignUp = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [userMessage, setUserMessage] = useState(null);
  const [accountCreated, setAccountCreated] = useState(false);
  const accessToken = useSelector((store) => store.users.user.accessToken);
  const statusMessage = useSelector((store) => store.users.statusMessage);
  const errorMessage = useSelector((store) => store.users.errorMessage);

  if (accessToken) {
    history.push("/");
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (user.firstName.length < 2) {
      setUserMessage("Förnamn måste vara minst två tecken långt.");
    } else if (user.firstName.length > 20) {
      setUserMessage("Förnamn kan vara max 20 tecken långt.");
    } else if (user.lastName.length < 2) {
      setUserMessage("Efternamn måste vara minst två tecken långt.");
    } else if (user.lastName.length > 20) {
      setUserMessage("Efternamn kan vara max 20 tecken långt.");
    } else if (user.password.length < 6) {
      setUserMessage("Lösenord måste vara minst sex tecken långt.");
    } else {
      dispatch(signUpFetch(user));
      setUser({ firstName: "", lastName: "", email: "", password: "" });
      setUserMessage(null);
    }
  };

  if (statusMessage === "User account created") {
    setAccountCreated(true);
    dispatch(users.actions.setStatusMessage({ statusMessage: "" }));
    dispatch(users.actions.setStatusMessage({ errorMessage: "" }));
  }

  return (
    <>
      {accountCreated ? (
        // In the future: create email verification
        <AccoutCreatedText>
          Ditt användarkonto är skapat, nu kan du logga in.
        </AccoutCreatedText>
      ) : (
        <SignUpForm onSubmit={handleSubmit}>
          <label>
            <UserInput
              type="text"
              required
              placeholder="Förnamn"
              value={user.firstName}
              onChange={(event) =>
                setUser({ ...user, firstName: event.target.value })
              }
            ></UserInput>
          </label>
          <label>
            <UserInput
              type="text"
              required
              placeholder="Efternamn"
              value={user.lastName}
              onChange={(event) =>
                setUser({ ...user, lastName: event.target.value })
              }
            ></UserInput>
          </label>
          <label>
            <UserInput
              type="email"
              required
              placeholder="E-post"
              value={user.email}
              onChange={(event) =>
                setUser({ ...user, email: event.target.value })
              }
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
          {userMessage && <p>{userMessage}</p>}
          {errorMessage && <p>{errorMessage}</p>}
          <Button type="submit">Skapa konto</Button>
        </SignUpForm>
      )}
    </>
  );
};
