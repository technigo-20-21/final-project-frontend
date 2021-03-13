import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { UserDetails } from "../components/user_details/UserDetails";
import { UserFavourites } from "../components/user_details/UserFavourites";
import { OuterContainer, MainContainer } from "../library/user_ui/UserPageStyles";

export const UserPage = () => {
  const history = useHistory();
  const user = useSelector((store) => store.users.user);
  const favourites = useSelector((store) => store.users.favourites);  

  if (!user.accessToken) {
    history.push("/");
  }

  return (
    <>
      <OuterContainer>
          <MainContainer>
            <UserDetails />
            <UserFavourites favourites={favourites} />
          </MainContainer>
      </OuterContainer>
    </>
  );
};
