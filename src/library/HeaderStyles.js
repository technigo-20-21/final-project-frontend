import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

export const TopRow = styled.section`
  background: #E4E7EC;
  padding: 6px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const LogInButton = styled.button`
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

export const FoldOutLogin = styled.div`
  height: 50px;
  width: 50px;
  background: green;
`;

export const MainRow = styled.section`
  background: #29354b;
  color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled(Link)`
  font-family: "Poiret One", cursive;
  color: #fff;
  text-decoration: none;
  font-size: 50px;
  font-weight: bold;
  letter-spacing: 1.6px;
  margin: 40px 0 0 0;
`;

export const SubTitle = styled.h2`
  font-weight: 300;
`;

export const BottomRow = styled.section`
  background: white;
`;

export const Nav = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 15px;
`;
