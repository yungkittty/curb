import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Link from "../link/root";

const button = ({ className, children, onClick }) =>
  typeof onClick === "object" ? (
    <Link className={className} to={onClick}>
      {children}
    </Link>
  ) : (
    <a className={className} onClick={onClick}>
      {children}
    </a>
  );

button.defaultProps = {
  onClick: undefined
};

button.propTypes = {
  onClick: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
};

const Button = styled(button)`
  cursor: ${props =>
    props.onClick
      ? props.loading !== undefined && props.loading
        ? "wait"
        : "pointer"
      : null};
  display: block;
  text-decoration: none;
  border: none;
  outline: none;
`;

export default Button;
