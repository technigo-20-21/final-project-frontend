import styled from "styled-components"

export const UserDetailsContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const LogInForm = styled.form`
  //   padding: 30px;
  display: flex;
  flex-direction: column;
`;

export const DetailsContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const LabelHeader = styled.h3`
  width: 120px;
`;

export const UserInput = styled.input`
  margin: 5px;
  padding: 10px;
  width: 250px;
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  color: #697181;
`;

export const UserButton = styled.button`
  cursor: pointer;
  margin: 20px 20px 20px 0;
  background: #DA9617;
  padding: 5px 35px 7px 35px;
  border-radius: 25px;
  border: none;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1), 0 0 11px rgba(0, 0, 0, 0.1);
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  color: #fff;
  outline: none;
`;
