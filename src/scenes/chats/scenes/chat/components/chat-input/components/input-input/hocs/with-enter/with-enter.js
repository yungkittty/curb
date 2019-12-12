import React, { useCallback } from "react";
import PropTypes from "prop-types";

const withEnter = WrappedComponent => {
  const WithEnter = ({ onEnter, ...others }) => {
    const onKeyPress = useCallback(
      event => {
        if (event.key !== "Enter") return;
        event.stopPropagation();
        onEnter();
      },
      [onEnter]
    );

    return (
      <WrappedComponent
        // eslint-disable-line
        {...others}
        onKeyPress={onKeyPress}
      />
    );
  };

  WithEnter.propTypes = {
    onEnter: PropTypes.func.isRequired
  };

  return WithEnter;
};

export default withEnter;
