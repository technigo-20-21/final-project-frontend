import styled from "styled-components";

export const Container = styled.section`
  height: 100vh;
  width: 100%;
  display: flex;
`;

// Change color to white, media query doesn't work
export const ImageContainer = styled.a`
  text-decoration: none;
  color: black;
  width: 33%;
  text-align: center;

  @media (min-width: 950px) {
    width: 100%;
    flex-wrap: wrap;
  }
`;

export const Image = styled.img`
  width: 100%;
  top: 0;
`;

// Move up
export const ImageContent = styled.div`
  text-transform: uppercase;
  font-size: 48px;
  font-weight: 700;
  display: flex;
  flex-direction: column;
`;