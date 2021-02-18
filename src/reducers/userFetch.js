import { users } from "./users";
import { SIGNUP_URL, LOGIN_URL } from ".././urls";

export const signUpFetch = (user) => {
  return (dispatch) => {
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
          throw "Det gick inte att skapa kontot.";
        }
        return res.json();
      })
      .then((json) => {
        dispatch(
          users.actions.setStatusMessage({
            statusMessage: "User account created",
          })
        );
      })
      .catch((err) => {
        dispatch(users.actions.setErrorMessage({ errorMessage: err }));
      });
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
  return (dispatch) => {
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
      }),
    })
      .then((res) => {
        if (!res.ok) {
          throw "Kunde inte uppdatera användaruppgifterna";
        }
        return res.json();
      })
      .then((json) => {
        dispatch(users.actions.updateUser(user));
      })
      .catch((err) => {
        dispatch(users.actions.setErrorMessage({ errorMessage: err }));
      });
  };
};

export const updateFavouritesFetch = (
  userId,
  accessToken,
  updatedFavourites
) => {
  return (dispatch) => {
    fetch(`http://localhost:8080/${userId}/favourites`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/JSON",
        Authorization: accessToken,
      },
      body: JSON.stringify({
        favourites: updatedFavourites,
      }),
    })
      .then((res) => {
        if (!res.ok) {
          throw "Kunde inte uppdatera favoriter";
        }
        return res.json();
      })
      .catch((err) => {
        dispatch(users.actions.setErrorMessage({ errorMessage: err }));
      });
  };
};
