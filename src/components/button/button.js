import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Link from "../link/root";

const button = ({ className, children, to, onClick }) =>
  to ? (
    <Link
      className={className}
      to={{ pathname: to.path, state: { isModal: to.isModal ? true : false } }}
    >
      {children}
    </Link>
  ) : (
    <a className={className} onClick={onClick}>
      {children}
    </a>
  );

button.defaultProps = {
  to: undefined,
  onClick: undefined
};

button.propTypes = {
  to: PropTypes.object,
  onClick: PropTypes.func
};

const Button = styled(button)`
  ${props =>
    props.to || props.onClick ? "cursor: pointer;" : null} display: block;
  text-decoration: none;
  border: none;
  outline: none;
`;

export default Button;
