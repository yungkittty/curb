import React from "react";

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

  _OverlayHide.propTypes = {};

  return _OverlayHide;
};

export default OverlayHide;
