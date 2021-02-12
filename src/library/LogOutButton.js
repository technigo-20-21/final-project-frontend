import React from "react";
import { useDispatch } from "react-redux";

import { users } from "../reducers/users";

export const LogOutButton = () => {
  const dispatch = useDispatch();

  const handleOnClick = () => {
    console.log("In logout handleOnClick");
    dispatch(users.actions.logOut());
  };
  return <button onClick={handleOnClick}>Log out</button>;
};
