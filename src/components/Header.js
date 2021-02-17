import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { UserIcon } from "../library/UserIcon";
import {
  TopRow,
  LogInButton,
  MainRow,
  Title,
  SubTitle,
  BottomRow,
  Nav,
  LocalLink,
} from "../library/HeaderStyles";

export const Header = () => {
  const accessToken = useSelector((store) => store.users.user.accessToken);

  return (
    <>
      <TopRow>
        {!accessToken && (
          <Link to="/LogIn">
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
