import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";

// eslint-disable-next-line
const ButtonContainer = styled(({ onClick, ...others }) =>
  // eslint-disable-next-line
  typeof onClick === "string" && onClick[0] !== "/" ? (
    // eslint-disable-next-line
    <a {...others} href={onClick} />
  ) : typeof onClick === "string" || onClick === "object" ? (
    <Link {...others} to={onClick} />
  ) : (
    <button {...others} type="button" onClick={onClick} />
  )
)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px;
  outline: initial;
  border-width: initial;
  border-style: initial;
  border-color: initial;
  text-decoration: initial;
  cursor: ${props =>
    // eslint-disable-line
    !props.disabled
      ? // eslint-disable-line
        "pointer"
      : "default"};
  background-color: initial;
  ${props =>
    !props.disabled
      ? `
  transition: all 0.1s ease;
  &:hover {
    filter: brightness(1.05);
  }`
      : ""}
  &::-moz-focus-inner {
    border: 0;
  }
`;

ButtonContainer.defaultProps = {
  onClick: undefined
};

ButtonContainer.propTypes = {
  onClick: PropTypes.oneOfType([
    // eslint-disable-line
    PropTypes.string,
    PropTypes.object,
    PropTypes.func
  ])
};

export default ButtonContainer;
