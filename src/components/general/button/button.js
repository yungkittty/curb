import React from "react";
import styled from "styled-components";

const button = ({ className, children, onClick }) => (
  <a className={className} onClick={onClick}>
    {children}
  </a>
);

const Button = styled(button)`
  cursor: pointer;
  display: block;
  text-decoration: none;
  border: none;
  outline: none;
`;

export default Button;
