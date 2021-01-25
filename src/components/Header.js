import React from "react";
import styled from "styled-components/macro";

export const Header = () => {
  return (
    <>
      <TopRow />
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
  height: 35px;
  background: lightgray;
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
  text-decoration: none;
  color: #29354b;
  &:hover {
    font-weight: 700;
    color: #4b2935;
  }
`;
