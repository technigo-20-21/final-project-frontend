import { users } from "./users";
import { SIGNUP_URL, LOGIN_URL } from ".././urls";

export const signUpFetch = (user) => {
  return (dispatch) => {
    const handleSignUpSuccess = () => {
      console.log(`User ${user.firstName} ${user.lastName} was created.`);
      dispatch(
        users.actions.setStatusMessage({
          statusMessage: "User account created",
        })
      );
    };
    const handleSignUpFailed = (signUpError) => {
      dispatch(users.actions.setStatusMessage({ statusMessage: signUpError }));
    };

    fetch(SIGNUP_URL, {
      method: "POST",
      headers: { "Content-Type": "application/JSON" },
      body: JSON.stringify({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        password: user.password,
      }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Signup failed");
        }
        return res.json();
      })
      .then((json) => handleSignUpSuccess())
      .catch((err) => handleSignUpFailed(err));
  };
};

export const logInFetch = (user) => {
  return (dispatch) => {
    fetch(LOGIN_URL, {
      method: "POST",
      headers: { "Content-Type": "application/JSON" },
      body: JSON.stringify({
        email: user.email,
        password: user.password,
      }),
    })
      .then((res) => {
        if (!res.ok) {
          throw "Kunde inte logga in, kontrollera dina användaruppgifter.";
        }
        return res.json();
      })
      .then((json) => {
        dispatch(users.actions.logIn(json));
      })
      .catch((err) => {
        dispatch(users.actions.setErrorMessage({ errorMessage: err }));
      });
  };
};

export const updateUserFetch = (user) => {
  console.log("Tar emot: " + JSON.stringify(user.favourites));

  return (dispatch) => {
    const handleUpdateSuccess = () => {
      console.log("Fetch sucess!");
    };
    const handleUpdateFailed = (updateError) => {
      console.log("Fetch failed!");
    };

    fetch(`http://localhost:8080/${user.id}/user`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/JSON",
        Authorization: user.accessToken,
      },
      body: JSON.stringify({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        favourites: user.favourites,
        // password: user.password,
      }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Kunde inte uppdatera användaruppgifterna");
        }
        return res.json();
      })
      .then((json) => {
        console.log("json: " + JSON.stringify(json))
        console.log("user: " + JSON.stringify(user))
        dispatch(users.actions.updateUser(user));
        dispatch(users.actions.updateFavourites(user.id));
      })
      .catch((err) => {
        dispatch(
          users.actions.setStatusMessage({ statusMessage: err })
        );
      });
  };
};
