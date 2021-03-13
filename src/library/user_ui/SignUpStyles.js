import styled from "styled-components"

export const SignUpForm = styled.form`
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
  padding: 10px 20px 13px 20px;
  border-radius: 25px;
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  color: #fff;
  outline: none;
`;

export const AccoutCreatedText = styled.p`
  margin: 100px 0;
  text-align: center;
  color: #29354b;
`;