import React from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import Button from "../../UI/Button";

const Header = () => {
  const navigate = useNavigate();

  const logoutHandler = () => {
    navigate("/login");
  };
  return (
    <HeaderBtn>
       <Button color='#176777' onClick={logoutHandler}>LogOut</Button>;
    </HeaderBtn>
  )
};

export default Header;

const HeaderBtn=styled.div`
  margin: 2rem 0 0 1rem;
`