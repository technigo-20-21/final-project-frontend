import styled from "styled-components"
import { Link } from "react-router-dom";

export const LogInForm = styled.form`
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const UserInput = styled.input`
  margin: 5px;
  padding: 10px;
  width: 250px;
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  color: #697181;
`;

export const Button = styled.button`
  margin: 10px;
  background: #29354b;
  padding: 5px 35px 7px 35px;
  border-radius: 25px;
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  color: #fff;
  outline: none;
`;

export const SignUp = styled.p`
  color: #29354b;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #29354b;
`;