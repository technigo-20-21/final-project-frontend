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
      <OuterContainer>
        <FrameContainer>
          <MainContainer>
            <UserDetails />
            <Favourites />
          </MainContainer>
        </FrameContainer>
      </OuterContainer>
    </>
  );
};

const OuterContainer = styled.div`
  margin: 20px;
  padding: 60px;
  border-radius: 8px;
  background: #bec2c9;
  // background: #44587c;
`;

const FrameContainer = styled.div`
  width: 100%;
  padding: 20px;
  border-radius: 25px;
  background: #d4d6db;
`;

const MainContainer = styled.div`
  padding: 30px 30px 10px 30px;
  border-radius: 16px;
  // border: 20px solid #cab4bc;
  display: flex;
  justify-content: space-between;
  background: #fff;
`;
