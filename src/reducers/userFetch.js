import { users } from "./users";
import { MESSAGE_URL } from ".././urls";

export const manageUserFetch = (user, endpoint) => {
  console.log("In createUserFetch!");
  console.log({ user });
  console.log({ endpoint });

  return (dispatch) => {
    fetch(MESSAGE_URL + `${endpoint}`, {
      method: "POST",
      headers: { "Content-Type": "application/JSON" },
      body: JSON.stringify({
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        password: user.password,
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        console.log({ json });
        // if the fetch returns an error message
        if (json.message) {
          console.log(json.message);
          dispatch(users.actions.setErrorMessage(json.message));
        } else if (endpoint === "sessions") {
          dispatch(users.actions.logIn(json));
        } else {
          console.log("User created!");
          alert(`User ${user.firstname} ${user.lastname} was created.`);
        }
      });
  };
};
