import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import L from "./root";

const link = ({ className, children, to, onClick }) =>
  to ? (
    <L
      className={className}
      to={{ pathname: to.path, state: { isModal: to.isModal ? true : false } }}
    >
      {children}
    </L>
  ) : (
    <a className={className} onClick={onClick}>
      {children}
    </a>
  );

link.defaultProps = {
  to: undefined,
  onClick: undefined
};

link.propTypes = {
  to: PropTypes.object,
  onClick: PropTypes.func
};

const Link = styled(link)`
  ${props =>
    props.to || props.onClick ? "cursor: pointer;" : null} display: block;
  text-decoration: none;
  border: none;
  outline: none;
`;

export default Link;
