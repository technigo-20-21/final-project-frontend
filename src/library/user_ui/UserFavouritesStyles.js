import styled from "styled-components/macro";

export const UserFavouritesContainer = styled.div`
  background: #fff;
  padding: 10px 20px;
  display: flex;
  width: 100%;
  flex-direction: column;
  border: 3px solid #ddd;
  border-style: inset;  

  @media (min-width: 900px) {
    margin-left: 10px;
    width: 50%;
  }
`;
