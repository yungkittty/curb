import React from "react";
import PropTypes from "prop-types";

// https://stackoverflow.com/questions/55327862/javascript-close-popup-with-back-button

const HeaderBack = WrappedComponent => {
  // eslint-disable-next-line
  const _HeaderBack = ({ onBackClick, ...others }) => <WrappedComponent {...others} />;

  _HeaderBack.defaultProps = { onBackClick: undefined };

  _HeaderBack.propTypes = { onBackClick: PropTypes.func };

  return _HeaderBack;
};

export default HeaderBack;
