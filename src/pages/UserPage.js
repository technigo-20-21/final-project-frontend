import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { UserDetails } from "../components/UserDetails";
import { Favourites } from "../components/Favourites";
import { OuterContainer, FrameContainer, MainContainer } from "../library/UserPageStyles";

export const UserPage = () => {
  const history = useHistory();

  const user = useSelector((store) => store.users.user);

  if (!user.accessToken) {
    history.push("/");
  }

  return (
    <>
      <OuterContainer>
        <FrameContainer>
          <MainContainer>
            <UserDetails />
            <Favourites user={user} />
          </MainContainer>
        </FrameContainer>
      </OuterContainer>
    </>
  );
};
