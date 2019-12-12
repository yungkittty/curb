import React from "react";
import PropTypes from "prop-types";

const withEnter = WrappedComponent => {
  const WithEnter = ({ onEnter, ...others }) => (
    <WrappedComponent
      // eslint-disable-line
      {...others}
      returnKeyType="send"
      onSubmitEditing={onEnter}
    />
  );

  WithEnter.propTypes = {
    onEnter: PropTypes.func.isRequired
  };

  return WithEnter;
};

export default withEnter;
