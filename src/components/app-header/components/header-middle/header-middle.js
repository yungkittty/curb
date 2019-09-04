import React from "react";
import PropTypes from "prop-types";
import MiddleContainer from "./components/middle-container";

const HeaderMiddle = ({ renderMiddle }) => (
  <MiddleContainer>
    {/* eslint-disable-line */}
    {renderMiddle ? renderMiddle() : null}
  </MiddleContainer>
);

HeaderMiddle.defaultProps = { renderMiddle: undefined };

HeaderMiddle.propTypes = { renderMiddle: PropTypes.func };

export default HeaderMiddle;
