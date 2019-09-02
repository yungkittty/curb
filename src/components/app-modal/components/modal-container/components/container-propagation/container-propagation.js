import React from "react";

const ContainerPropagation = WrappedComponent => {
  // eslint-disable-next-line
  const _ContainerPropagation = ({ ...others }) => (
    <WrappedComponent {...others} onClick={event => event.stopPropagation()} />
  );

  return _ContainerPropagation;
};

export default ContainerPropagation;
