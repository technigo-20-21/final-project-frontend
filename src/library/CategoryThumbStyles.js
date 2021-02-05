import styled from "styled-components/macro";

// Change color to white, media query doesn't work


export const ImageContainer = styled.a`
  text-decoration: none;
  color: black;
  text-align: center;
  position: relative;

//   @media only screen and (min-width: 950px) {
//     width: 100%;
//     flex-wrap: wrap;
//   }
`;

// Move up
export const ImageContent = styled.div`
  height: 300px;
  background-image: url("${props => props.url}");
  background-size: cover;
  background-repeat: no-repeat;
  background-color: rgba(0,0,0,.7);
  color: #fff;
  font-size: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const CategoryText = styled.p`
  margin: 10px;
  width: 100%;
  text-align: center;
  text-transform: uppercase;
  font-weight: 700;
`
export const CategoryIcon = styled.span`
  text-align: center;
`