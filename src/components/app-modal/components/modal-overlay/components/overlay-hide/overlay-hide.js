import React from "react";
import PropTypes from "prop-types";

const OverlayHide = WrappedComponent => {
  // eslint-disable-next-line
  const _OverlayHide = ({ appModalHide, appModalFooterOnClick, ...others }) => (
    <WrappedComponent
      {...others}
      onClick={appModalHide}
      onKeyDown={event => {
        switch (event.keyCode) {
          case 27:
            appModalHide();
            break;
          case 13:
            if (appModalFooterOnClick) appModalFooterOnClick();
            break;
          default:
            break;
        }
      }}
      tabIndex="0"
    />
  );

  _OverlayHide.defaultProps = {
    appModalFooterOnClick: undefined
  };

  _OverlayHide.propTypes = {
    appModalHide: PropTypes.func.isRequired,
    appModalFooterOnClick: PropTypes.func
  };

  return _OverlayHide;
};

export default OverlayHide;
