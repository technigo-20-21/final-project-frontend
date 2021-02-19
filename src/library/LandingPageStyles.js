import styled from "styled-components/macro";

export const Container = styled.main`
  height: 100%;
  width: 100%;
  padding: 10px 0;
`;

export const CategoriesContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  column-gap: 10px;
  row-gap: 10px;

  @media (max-width: 550px) {
   display: flex;
   flex-wrap: wrap;
  }

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
   }
`
