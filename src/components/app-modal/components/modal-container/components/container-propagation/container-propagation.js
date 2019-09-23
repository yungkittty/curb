import React from "react";

const ContainerPropagation = WrappedComponent => props => (
  <WrappedComponent {...props} onClick={event => event.stopPropagation()} />
);

export default ContainerPropagation;
