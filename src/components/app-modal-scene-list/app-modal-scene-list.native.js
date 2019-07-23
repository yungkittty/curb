import React from "react";
import PropTypes from "prop-types";
import ListFlat from "../list-flat";

const AppModalSceneList = ({ forwardedRef, ...others }) => (
  <ListFlat
    {...others}
    ref={forwardedRef}
    getItemLayout={(_, itemIndex) => ({
      length: 100,
      offset: 100 * itemIndex,
      index: itemIndex
    })}
  />
);

AppModalSceneList.propTypes = {
  forwardedRef: PropTypes.object // eslint-disable-line
};

export default React.forwardRef(
  // eslint-disable-line
  (props, forwardedRef) => (
    <AppModalSceneList
      // eslint-disable-line
      {...props}
      forwardedRef={forwardedRef}
    />
  )
);
