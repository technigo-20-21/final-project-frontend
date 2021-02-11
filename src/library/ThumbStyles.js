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

export const CardContainer = styled.div`
  margin: 10px;
  padding: 20px;
  border: 1px solid black;
  width: 320px;
  border-radius: 4px;
  border: 1px solid #e0e0e0
`

export const LocalLink = styled(Link)`
  text-decoration: none;  
`;

// Move up
export const ThumbImage = styled.div`
  height: 300px;
  // width: 300px;
  background-image: url("${(props) => props.url}");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
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
padding: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ThumbText = styled.p`
  margin: 10px;
  text-transform: uppercase;
  font-weight: 700;  
`;

export const ThumbIcon = styled.span``;

export const FavouriteHeart = styled.img`
  align-self: flex-end;
  cursor: pointer;
  transition: all 3000ms ease-in-out;
`;
