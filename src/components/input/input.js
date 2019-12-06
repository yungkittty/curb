import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import inputFunc from "./components/input-func";
import InputContainer from "./components/input-container";

const Input = ({ forwardedRef, ...others }) => <InputContainer {...others} ref={forwardedRef} />;

Input.propTypes = {
  forwardedRef: PropTypes.object.isRequired // eslint-disable-line
};

export default _.flowRight([
  // eslint-disable-line
  inputFunc,
  React.forwardRef
])(
  // eslint-disable-line
  (props, forwardedRef) => (
    <Input
      // eslint-disable-line
      {...props}
      forwardedRef={forwardedRef}
    />
  )
);
