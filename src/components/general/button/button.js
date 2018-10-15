import React from "react";
import styled from "styled-components";
import Link from "../../link";

const button = ({ className, children, to }) => {
  if (to === undefined) to = "/sign-in";
  return (
    <Link className={className} to={to}>
      {children}
    </Link>
  );
};

const Button = styled(button)`
  cursor: pointer;
  display: block;
  text-decoration: none;
  border: none;
  outline: none;
`;

export default Button;
