import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Link from "../../link";

const button = ({ className, children, to }) => (
  <Link className={className} to={to}>
    {children}
  </Link>
);

button.defaultProps = {
  to: "/",
  onClick: undefined
};

button.propTypes = {
  to: PropTypes.string,
  onClick: PropTypes.func
};

const Button = styled(button)`
  cursor: pointer;
  display: block;
  text-decoration: none;
  border: none;
  outline: none;
`;

export default Button;
