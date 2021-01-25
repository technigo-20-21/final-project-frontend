import React from "react";
import { useSelector } from "react-redux";

import { SignUp } from "../pages/SignUp";
import { LogIn } from "../pages/LogIn";
import { UserInformation } from "./UserInformation";
import { LogOutButton } from "./LogOutButton";

export const Main = () => {
  const isLoggedIn = useSelector((store) => store.users.isLoggedIn);
  const errorMessage = useSelector((store) => store.users.errorMessage);

  return (
    <>
      {/* {!isLoggedIn && <SignUp />} */}
      {!isLoggedIn && <LogIn />}

      {/* Fungerar inte som tänkt, uppdaterar inte errorMessage när man loggar in/skapar konto */}
      <UserInformation message={errorMessage} />
      
      {isLoggedIn && <LogOutButton />}
    </>
  );
};
