import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";

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
          <Link to="/userdetails">
            <UserIcon src="../img/user-icon.png"></UserIcon>
          </Link>
        )}
      </TopRow>
      <MainRow>
        <Title>Torslanda locals</Title>
        <SubTitle>Restauranger, service och affärer nära dig</SubTitle>
      </MainRow>
      <BottomRow>
        <Nav>
          <NavLink href="#">Äta ute</NavLink>
          <NavLink href="#">Shopping</NavLink>
          <NavLink href="#">Hälsa &amp; Skönhet</NavLink>
          <NavLink href="#">Mat &amp; götta</NavLink>
          <NavLink href="#">Service</NavLink>
        </Nav>
      </BottomRow>
    </>
  );
};

const TopRow = styled.section`
  background: lightgray;
  padding: 10px;
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
    color: white;
  }
`;

const FoldOutLogin = styled.div`
  height: 50px;
  width: 50px;
  background: green;
`;

const UserIcon = styled.img`
  height: 30px;
  width: 30px;
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

const Title = styled.h1`
  font-family: "Poiret One", cursive;
  font-size: 50px;
  letter-spacing: 1.6px;
  margin-bottom: 0;
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

const NavLink = styled.a`
  padding: 5px 10px;
  text-decoration: none;
  color: #29354b;
  border-top: 1px solid #fff;
  border-bottom: 1px solid #fff;

  &:hover {
    border-image: linear-gradient(to right, transparent, #999, transparent) 5;
  }
`;
