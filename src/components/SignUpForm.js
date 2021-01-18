import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { createUserFetch } from '../reducers/userFetch'

export const SignUpForm = () => {
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const dispatch = useDispatch();

  const createUser = (user) => {
    console.log("In createUser function!")
    dispatch(createUserFetch(user))
  }

  const handleSubmit = (event) => {
    console.log("In handleSubmit function!")
    console.log({user})
    event.preventDefault();
    createUser(user);
    setUser({ name: "", email: "", password: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          type="text"
          required
          placeholder="Name"
          value={user.name}
          onChange={(event) => setUser({ ...user, name: event.target.value })}
        ></input>
      </label>
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
      <button type="submit">Create user</button>
    </form>
  );
};
