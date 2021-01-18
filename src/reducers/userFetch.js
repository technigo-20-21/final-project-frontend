import { users } from "./users";

export const createUserFetch = (user) => {
  console.log("In createUserFetch!");
  console.log({ user });
  return (dispatch) => {
    fetch("http://localhost:8080/users", {
      method: "POST",
      headers: { "Content-Type": "application/JSON" },
      body: JSON.stringify({
        name: user.name,
        email: user.email,
        password: user.password,
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        console.log("User created!");
        alert(`User ${user.name} was created.`);
      });
  };
};
