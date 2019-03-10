import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Button = styled(({ children, onClick, ...others }) =>
  typeof onClick !== "string" && typeof onClick !== "object" ? (
    <button {...others} type="button" onClick={onClick}>
      {React.Children.only(children)}
    </button>
  ) : (
    <Link {...others} to={onClick}>
      {React.Children.only(children)}
    </Link>
  )
)`
  padding: 0px;
  border-width: initial;
  border-style: initial;
  border-color: initial;
  outline: initial;
  text-decoration: initial;
  background-color: initial;
  cursor: pointer;

  &::-moz-focus-inner {
    border: none;
  }
`;

Button.defaultProps = { onClick: undefined };

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.func
  ])
};

export default Button;
