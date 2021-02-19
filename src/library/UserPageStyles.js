import styled from "styled-components/macro";

export const OuterContainer = styled.div`
  margin: 20px 20px 40px 20px;
  padding-bottom: 20px;
  background-color: #fdf6e9;
  border-bottom-left-radius: 25px;
  box-shadow: 
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
`;

export const MainContainer = styled.div`
  
  padding: 30px 30px 10px 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 16px;  

  @media (max-width: 750px) {
    padding: 30px 40px 10px 40px;
    flex-direction: column;
    align-items: center;

    
    
  }
`;
