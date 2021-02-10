import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components/macro";

import { UserDetails } from "../components/UserDetails";
import { Favourites } from "../components/Favourites";

export const UserPage = () => {
  const history = useHistory();

  const user = useSelector((store) => store.users.user);

  if (!user.accessToken) {
    history.push("/");
  }

  return (
    <>
      <MainContainer>
        <UserDetails />
        <Favourites />
      </MainContainer>
    </>
  );
};

const MainContainer = styled.div`
  margin: 20px;
  padding: 30px 30px 10px 30px;
  border: 1px solid #e9eaed;
  display: flex;
  justify-content: space-between;
`;
