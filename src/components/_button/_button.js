import React from "react";
import PropTypes from "prop-types";
import ButtonContainer from "./components/_button-container";

// eslint-disable-next-line
const _Button = ({ className, style, onClick, component, render, ...others }) => {
  return (
    <ButtonContainer className={className} style={style} onClick={onClick}>
      {/* eslint-disable-next-line */}
      {component ? React.createElement(component, others) : render ? render(others) : <React.Fragment />}
    </ButtonContainer>
  );
};

_Button.defaultProps = { component: undefined, render: undefined };

_Button.propTypes = { component: PropTypes.func, render: PropTypes.func };

export default _Button;
