import { Link } from "react-router-dom";
import styled from "styled-components/macro";

// Change color to white, media query doesn't work

export const CategoryLink = styled(Link)`
  width: 100%;
  text-decoration: none;
  color: black;
  text-align: center;
  position: relative;  

  //   @media only screen and (min-width: 950px) {
  //     width: 100%;
  //     flex-wrap: wrap;
  //   }
`;

export const LocalLink = styled(Link)`
  text-decoration: none;  
`;

// Move up
export const ThumbImage = styled.div`
  height: 300px;
  background-image: url("${(props) => props.url}");
  background-size: cover;
  background-repeat: no-repeat;
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
  font-size: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  filter: opacity(0.8);

  &:hover {
    filter: opacity(1);
  }
`;

export const Container = styled.div`
  height: 80%;
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const ThumbText = styled.p`
  margin: 10px;
  // width: 100%;
  // text-align: center;
  text-transform: uppercase;
  font-weight: 700;
`;

export const ThumbIcon = styled.span``;

export const FavouriteHeart = styled.img`
  align-self: flex-end;
  cursor: pointer;
  transition: all 3000ms ease-in-out;
`;
