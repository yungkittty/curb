import React from "react";
import PropTypes from "prop-types";

const OverlayHide = WrappedComponent => {
  // eslint-disable-next-line
  const _OverlayHide = ({
    // eslint-disable-line
    appModalFooterOnClick,
    hideAppModal,
    ...others
  }) => (
    <WrappedComponent
      {...others}
      onClick={hideAppModal}
      onKeyDown={event => {
        switch (event.keyCode) {
          case 27:
            hideAppModal();
            break;
          case 13:
            if (appModalFooterOnClick && !others.areAppModalButtonsDisabled)
              // eslint-disable-line
              appModalFooterOnClick();
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
    areAppModalButtonsDisabled: PropTypes.bool.isRequired,
    appModalFooterOnClick: PropTypes.func,
    hideAppModal: PropTypes.func.isRequired
  };

  return _OverlayHide;
};

export default OverlayHide;
