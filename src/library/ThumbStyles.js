import { Link } from "react-router-dom";
import styled from "styled-components/macro";

// Change color to white, media query doesn't work

export const CategoryLink = styled(Link)`
  width: 100%;
  text-decoration: none;
  color: black;
  text-align: center;
  position: relative;
`;

export const MainContainer = styled.div`
  display: flex;
`;

export const CardContainer = styled.div`
  margin: 20px;
  padding: 20px;
  width: 320px;
  background-color: #fdf6e9;
  border-bottom-left-radius: 25px;
  box-shadow: 
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
`;

export const LocalLink = styled(Link)`
  text-decoration: none;
`;

// Move up
export const ThumbImage = styled.div`
  height: 300px;
  background-image: url("${(props) => props.url}");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
  border: solid 1px #5D5649;
  font-size: 36px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  filter: opacity(0.8);

  &:hover {
    filter: opacity(1);
  }
`;

export const Container = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ThumbText = styled.p`
  text-transform: uppercase;
  font-weight: 700;
`;

export const ThumbIcon = styled.span``;

export const FavouriteHeartButton = styled.div`
  align-self: flex-end;
  cursor: pointer;
  transition: transform 200ms ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;
