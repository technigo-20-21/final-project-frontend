import React, { useState } from "react";

export const SignUpForm = () => {
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  console.log({ user });

  const createUser = (user) => {
    // Dispatch user till  reducer
    console.log("In createUser function!")
  }

  const handleSubmit = (event) => {
    console.log("In handleSubmit function!")
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
