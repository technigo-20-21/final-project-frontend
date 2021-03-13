import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { users } from "../reducers/users";
import { UserIcon } from "../library/user_ui/UserIcon";
import {
  TopRow,
  LogInButton,
  MainRow,
  Title,
  SubTitle,
  BottomRow,
  Nav,
  LocalLink,
} from "../library/global_ui/HeaderStyles";

export const Header = () => {
  const dispatch = useDispatch();
  const accessToken = useSelector((store) => store.users.user.accessToken);

  const handleOnClick = () => {
    dispatch(users.actions.setErrorMessage(""));
    dispatch(users.actions.setStatusMessage(""));
  };

  return (
    <>
      <TopRow>
        {!accessToken && (
          <Link to="/LogIn" onClick={handleOnClick}>
            <LogInButton>Logga in</LogInButton>
          </Link>
        )}
        {accessToken && (
          <Link to="/userpage">
            <UserIcon />
          </Link>
        )}
      </TopRow>
      <MainRow>
        <Title to="/">Torslanda locals</Title>
        <SubTitle>Restauranger, service och affärer nära dig</SubTitle>
      </MainRow>
      <BottomRow>
        <Nav>
          <LocalLink to={"/locals/service"}>Service</LocalLink>
          <LocalLink to={"/locals/cafe"}>Fika</LocalLink>
          <LocalLink to={"/locals/groceries"}>Mat &amp; götta</LocalLink>
          <LocalLink to={"/locals/shopping"}>Shoppa</LocalLink>
          <LocalLink to={"/locals/restaurant"}>Äta ute</LocalLink>
          <LocalLink to={"/locals/beauty"}>Hälsa &amp; Skönhet</LocalLink>
        </Nav>
      </BottomRow>
    </>
  );
};
