import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Button = styled(({ onClick, ...others }) =>
  typeof onClick !== "string" || typeof onClick !== "object" ? (
    <button {...others} type="button" onClick={onClick} />
  ) : (
    <Link {...others} to={onClick} />
  )
)`
  padding: 0px;
  border-width: initial;
  border-style: initial;
  border-color: initial;
  outline: initial;
  background-color: initial;
  cursor: pointer;
`;

Button.defaultProps = { onClick: undefined };

Button.propTypes = {
  onClick: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.func
  ])
};

export default Button;
