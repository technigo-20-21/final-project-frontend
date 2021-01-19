import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { manageUserFetch } from '../reducers/userFetch'

export const LogInForm = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const dispatch = useDispatch();
  const endpoint = "sessions"

  const logInUser = (user) => {
    console.log("In logInUser function!")
    console.log({endpoint})
    dispatch(manageUserFetch(user, endpoint))
  }

  const handleSubmit = (event) => {
    console.log("In login handleSubmit function!")
    console.log({user})
    event.preventDefault();
    logInUser(user);
    setUser({ email: "", password: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          type="email"
          required
          placeholder="Email"
          value={user.email}
          onChange={(event) => setUser({ ...user, email: event.target.value })}
        ></input>
      </label>
      <label>
        <input
          type="password"
          required
          placeholder="Password"
          value={user.password}
          onChange={(event) =>
            setUser({ ...user, password: event.target.value })
          }
        ></input>
      </label>
      <button type="submit">Log in</button>
    </form>
  );
};
