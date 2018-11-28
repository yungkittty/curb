import React from "react";

const ModalBlur = (WrappedComponent, props) => () => (
  <WrappedComponent {...props} />
);

export default ModalBlur;
