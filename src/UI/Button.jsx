import React from "react";
import styled from "styled-components";

const Button = ({ children, onClick ,color}) => {
  return (
    <div>
      <ButtonStyle  style={{background: color}} onClick={onClick}>{children}</ButtonStyle>
    </div>
  );
};

export default Button;

const ButtonStyle = styled.button`
  padding: 17px;
  border-radius: 5px;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: white;

`;
