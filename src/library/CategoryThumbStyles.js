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
export const Image = styled.img`
  width: 100%;
`;

// Move up
export const ImageContent = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(0,0,0,.7);
  z-index: 10;
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