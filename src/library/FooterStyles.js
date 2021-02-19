import styled from "styled-components";

export const FooterContainer = styled.footer`
  height: 25%;
  padding: 20px;
  margin-top: 20px;
  position: relative;
  background: #697181;
  color: white;
  text-align: center;
`;


export const Editor = styled.p`
  width: 100%;
  font-family: "Poiret One", cursive;
  font-size: 24px;
`;

export const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
`;

export const Contact = styled.a`
  text-decoration: none;
  color: white;
  &:hover {
      font-weight: bold;
  }
`;
