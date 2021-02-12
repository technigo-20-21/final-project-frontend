import React from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components/macro";
import { UserIcon } from "../library/UserIcon"

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

const TopRow = styled.section`
  background: #E8ECF3;
  padding: 6px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const LogInButton = styled.button`
  cursor: pointer;
  background: none;
  border: 1px solid;
  padding: 5px 15px 7px 15px;
  border-radius: 20px;
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  color: #29354b;
  outline: none;

  &:hover {
    background: #29354b;
    color: #fff;
  }
`;

const FoldOutLogin = styled.div`
  height: 50px;
  width: 50px;
  background: green;
`;



const MainRow = styled.section`
  background: #29354b;
  color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled(Link)`
  font-family: "Poiret One", cursive;
  color: #fff;
  text-decoration: none;
  font-size: 50px;
  font-weight: bold;
  letter-spacing: 1.6px;
  margin: 40px 0 0 0;
`;

const SubTitle = styled.h2`
  font-weight: 300;
`;

const BottomRow = styled.section`
  background: white;
`;

const Nav = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 15px;
`;

const LocalLink = styled(NavLink)`
  margin-top: 5px;
  padding: 5px 10px;
  text-decoration: none;
  color: #29354b;
  border-top: 1px solid #fff;
  border-bottom: 1px solid #fff;

  &:hover {
    border-image: linear-gradient(to right, transparent, #999, transparent) 5;
  }
`;
