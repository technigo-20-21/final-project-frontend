import React from "react";
import { useSelector } from "react-redux";

import { SignUpForm } from "./SignUpForm";
import { LogInForm } from "./LogInForm";
import { UserInformation } from "./UserInformation";
import { LogOutButton } from "./LogOutButton";

export const Main = () => {
  const isLoggedIn = useSelector((store) => store.users.isLoggedIn);
  const errorMessage = useSelector((store) => store.users.errorMessage);

  return (
    <>
      {!isLoggedIn && <SignUpForm />}
      {!isLoggedIn && <LogInForm />}

      {/* Fungerar inte som tänkt, uppdaterar inte errorMessage när man loggar in/skapar konto */}
      <UserInformation message={errorMessage} />
      
      {isLoggedIn && <LogOutButton />}
    </>
  );
};
