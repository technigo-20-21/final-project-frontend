import React from "react";
import { useSelector } from "react-redux";

import { SignUpForm } from "./SignUpForm";
import { LogInForm } from "./LogInForm";
import { UserInformation } from "./UserInformation";
import { LogOutButton } from "./LogOutButton";

export const Main = () => {
  const isLoggedIn = useSelector((store) => store.users.isLoggedIn);

  return (
    <>
      {!isLoggedIn && <SignUpForm />}
      {!isLoggedIn && <LogInForm />}
      <UserInformation />
      {isLoggedIn && <LogOutButton />}
    </>
  );
};
