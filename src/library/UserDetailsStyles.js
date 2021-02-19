import { FullscreenExit } from "@material-ui/icons";
import styled from "styled-components/macro";

export const UserDetailsContainer = styled.div`
  margin-bottom: 20px;
  background: #fff;
  padding: 10px 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 3px solid #ddd;
  border-style: inset;

  @media (min-width: 900px) {
    width: 50%;
    margin-right: 10px;
    margin-bottom: 0;
  }
`;

export const LogInForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const DetailsContainer = styled.div`
padding-right: 20px;
  display: flex;

  @media (max-width: 400px) {
    flex-direction: column;
  }
`;

export const ButtonContainer = styled.div`
  margin: 20px 0;
  display: flex;
  flex-wrap: wrap;
`;

export const LabelHeader = styled.h3`
  width: 120px;
`;

export const UserInput = styled.input`
  margin: 5px;
  padding: 10px;
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  color: #697181;
  width: 100%;
`;

export const UserButton = styled.button`
  cursor: pointer;
  margin: 10px;
  background: #da9617;
  padding: 5px 35px 7px 35px;
  border-radius: 25px;
  border: none;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1), 0 0 11px rgba(0, 0, 0, 0.1);
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  color: #fff;
  outline: none;
`;
