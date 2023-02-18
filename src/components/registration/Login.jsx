import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { registrationAction } from "../../store/authSlice/authSlice";
import Button from "../../UI/Button";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });

  const inputChangeHandler = (name) => {
    return (event) => {
      setInputValue((prev) => ({ ...prev, [name]: event.target.value }));
    };
  };

  const loginHandler = (e) => {
    e.preventDefault();

    if (inputValue.email === "@gmail.com" && inputValue.password === "12345") {
      dispatch(registrationAction.login(inputValue.password));
    }

    navigate("/todos");
  };
  return (
    <Container onSubmit={loginHandler}>
      <Box>
        <Input
          type="email"
          placeholder="Enter your email"
          value={inputValue.email}
          onChange={inputChangeHandler("email")}
        />
        <Input
          type="password"
          placeholder="Enter your passoword"
          value={inputValue.password}
          onChange={inputChangeHandler("password")}
        />
        <Button color="#4B79A1">submit</Button>
      </Box>
    </Container>
  );
};

export default Login;

const Input = styled.input`
  font-size: 19px;
  padding: 15px;
  width: 300px;
  border: 1px solid grey;
  margin: 0.5rem 0 1rem 0;
  outline: none;
  border-radius: 5px;
`;

const Box = styled.div`
  margin-top: 7rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1.5rem;
`;

const Container = styled.form`
  border-radius: 8px;
  margin: 0 auto;
  width: 500px;
  height: 250px;
  background: linear-gradient(to top, #283e51, #0d2d54);
`;
